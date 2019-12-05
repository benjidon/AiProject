
# coding: utf-8

# # Income Prediction Analysis

# ### Import statements

# In[1]:


from __future__ import absolute_import, division, print_function, unicode_literals

import sys
import numpy as np
import pandas as pd
import tensorflow as tf
import tensorflowjs as tfjs
import tensorflow_hub as hub
# tf.enable_eager_execution()
from tensorflow import feature_column
from tensorflow.keras import layers
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense, Dropout
from sklearn.preprocessing import MinMaxScaler
from keras.models import load_model
from keras.models import model_from_json


# ### Clean data and create dataframe:

# In[2]:


adult_cols = ["age", "workclass", "fnlwgt", "education", "education-num", "marital-status", 
              "occupation", "relationship", "race", "sex", "capital-gain", "capital-loss", 
              "hours-per-week", "native-country", "income"]

adult_df = pd.read_csv("input/adult.data", names=adult_cols)


# In[3]:


# Convert income to numerical (0 : <=50K, 1 : >50K)

income_map = {' <=50K': 0, ' >50K': 1}
adult_df["income"] = adult_df["income"].map(income_map)


# In[4]:


# Trim white spaces

adult_df = adult_df.apply(lambda x: x.str.strip() if x.dtype == "object" else x)
adult_df


# ### Split the dataframe into train, validation, and test sets:

# In[5]:


train, test = train_test_split(adult_df, test_size=0.2)
train, val = train_test_split(train, test_size=0.2)
# print(len(train), 'train examples')
# print(len(val), 'validation examples')
# print(len(test), 'test examples')


# ### Create an input pipeline using tf.data

# In[6]:


# A utility method to create a tf.data dataset from a Pandas Dataframe
def df_to_dataset(dataframe, shuffle=True, batch_size=32):
    dataframe = dataframe.copy()
    labels = dataframe.pop('income')
    ds = tf.data.Dataset.from_tensor_slices((dict(dataframe), labels))
    if shuffle:
        ds = ds.shuffle(buffer_size=len(dataframe))
    ds = ds.batch(batch_size)
    return ds


# In[7]:


batch_size = 10 # A small batch sized is used for demonstration purposes
train_ds = df_to_dataset(train, batch_size=batch_size)
val_ds = df_to_dataset(val, shuffle=False, batch_size=batch_size)
test_ds = df_to_dataset(test, shuffle=False, batch_size=batch_size)


# ### Understand the input pipeline

# In[8]:


# for feature_batch, label_batch in train_ds.take(1):
#     print('Every feature:', list(feature_batch.keys()))
#     print('A batch of ages:', feature_batch['age'])
#     print('A batch of targets:', label_batch )


# ### Feature selection:

# In[9]:


# Check column types
adult_df.dtypes


# In[10]:


feature_columns = []


# **Numeric columns:**

# In[11]:


for header in ['age', 'fnlwgt', 'education-num', 'capital-gain', 'capital-loss', 'hours-per-week']:
    feature_columns.append(feature_column.numeric_column(header))


# **Categorical columns:**

# In[12]:


# Workclass
workclass_values = ['Private','Self-emp-not-inc','Local-gov','?','State-gov','Self-emp-inc',
                    'Federal-gov','Without-pay','Never-worked']
workclass = feature_column.categorical_column_with_vocabulary_list(
      'workclass', workclass_values)
workclass_one_hot = feature_column.indicator_column(workclass)

feature_columns.append(workclass_one_hot)

# Education
education_values = ['HS-grad','Some-college','Bachelors','Masters','Assoc-voc','11th','Assoc-acdm',
                     '10th','7th-8th','Prof-school','9th','12th','Doctorate','5th-6th','1st-4th','Preschool']
education = feature_column.categorical_column_with_vocabulary_list(
      'education', education_values)
education_one_hot = feature_column.indicator_column(education)

feature_columns.append(education_one_hot)

# Marital Status
marital_status_values = ['Married-civ-spouse','Never-married','Divorced','Separated','Widowed',
                         'Married-spouse-absent','Married-AF-spouse']
marital_status = feature_column.categorical_column_with_vocabulary_list(
      'marital-status', marital_status_values)
marital_status_one_hot = feature_column.indicator_column(marital_status)

feature_columns.append(marital_status_one_hot)

# Occupation
occupation_values = ['Prof-specialty', 'Craft-repair', 'Exec-managerial', 'Adm-clerical', 'Sales', 'Other-service',
                'Machine-op-inspct', '?', 'Transport-moving', 'Handlers-cleaners', 'Farming-fishing', 'Tech-support',
                'Protective-serv', 'Priv-house-serv', 'Armed-Forces']
occupation = feature_column.categorical_column_with_vocabulary_list(
      'occupation', occupation_values)
occupation_one_hot = feature_column.indicator_column(occupation)

feature_columns.append(occupation_one_hot)

# Relationship
relationship_values = ['Husband','Not-in-family','Own-child','Unmarried','Wife','Other-relative']
relationship = feature_column.categorical_column_with_vocabulary_list(
      'relationship', relationship_values)
relationship_one_hot = feature_column.indicator_column(relationship)

feature_columns.append(relationship_one_hot)

# Race
race_values = ['White','Black','Asian-Pac-Islander','Amer-Indian-Eskimo','Other']
race = feature_column.categorical_column_with_vocabulary_list(
      'race', race_values)
race_one_hot = feature_column.indicator_column(race)

feature_columns.append(race_one_hot)

# Sex
sex_values = ['Male','Female']
sex = feature_column.categorical_column_with_vocabulary_list(
      'sex', sex_values)
sex_one_hot = feature_column.indicator_column(sex)

feature_columns.append(sex_one_hot)


# **Bucketized columns:**

# In[13]:


age = feature_column.numeric_column("age")
age_buckets = feature_column.bucketized_column(age, boundaries=[18, 25, 30, 35, 40, 45, 50, 55, 60, 65])
feature_columns.append(age_buckets)


# **Embedded columns:**

# In[14]:


occupation_embedding = feature_column.embedding_column(occupation, dimension=8)
feature_columns.append(occupation_embedding)


# **Crossed columns:**

# In[15]:


crossed_feature = feature_column.crossed_column([age_buckets, occupation], hash_bucket_size=1000)
crossed_feature = feature_column.indicator_column(crossed_feature)
feature_columns.append(crossed_feature)


# ### Create the feature layer

# In[16]:


feature_layer = tf.keras.layers.DenseFeatures(feature_columns)


# In[17]:


batch_size = 32
train_ds = df_to_dataset(train, batch_size=batch_size)
val_ds = df_to_dataset(val, shuffle=False, batch_size=batch_size)
test_ds = df_to_dataset(test, shuffle=False, batch_size=batch_size)


# ### Create and train the model:

# In[18]:


model = tf.keras.Sequential([
    feature_layer,
    layers.Dense(128, activation='relu'),
    layers.Dense(128, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

model.fit(train_ds,
          validation_data=val_ds,
          epochs=2,
          verbose=0)


# In[19]:


loss, accuracy = model.evaluate(test_ds)
# print("Accuracy", accuracy)


# In[20]:

d = {'age': [31], 'workclass': ['Private'], 'fnlwgt': [45781], 'education': ['Masters'], 'education-num': [14], 
     'marital-status': ['Never-married'], 'occupation': ['Prof-specialty'], 'relationship': ['Not-in-family'], 
     'race': ['White'], 'sex': ['Female'], 'capital-gain': [14084], 'capital-loss': [0], 'hours-per-week': [50], 
     'native-country': ['United-States'], 'income': [1]}
d2 = {'age': [15], 'workclass': ['Without-pay'], 'fnlwgt': [45781], 'education': ['1st-4th'], 'education-num': [2], 
     'marital-status': ['Never-married'], 'occupation': ['Other-service'], 'relationship': ['Not-in-family'], 
     'race': ['White'], 'sex': ['Female'], 'capital-gain': [0], 'capital-loss': [0], 'hours-per-week': [50], 
     'native-country': ['United-States'], 'income': [1]}
df_input = pd.DataFrame(data=d)
df_input
input_ds = df_to_dataset(df_input, shuffle=False, batch_size=batch_size)


# In[21]:


print(model.predict(input_ds))


# In[22]:


adult_df.loc[8]

