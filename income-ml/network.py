from __future__ import absolute_import, division, print_function, unicode_literals

import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow import feature_column
from tensorflow.keras import layers
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Dense, Dropout

# Create the initial dataframe containing all the features
def createDataframe(data_loc, adult_cols):
    adult_df = pd.read_csv(data_loc, names=adult_cols)

    # Convert income to numerical (0 : <=50K, 1 : >50K)
    income_map = {' <=50K': 0, ' >50K': 1}
    adult_df["income"] = adult_df["income"].map(income_map)

    # Trim white spaces
    adult_df = adult_df.apply(lambda x: x.str.strip() if x.dtype == "object" else x)
    return adult_df

# Convert the features so it's more model readable
def featureSelection():
    feature_columns = []

    # Numerical columns
    for header in ['age', 'fnlwgt', 'education-num', 'capital-gain', 'capital-loss', 'hours-per-week']:
        feature_columns.append(feature_column.numeric_column(header))

    # Categorical columns
    # Workclass
    workclass_values = ['Private','Self-emp-not-inc','Local-gov','?','State-gov','Self-emp-inc',
                        'Federal-gov','Without-pay','Never-worked']
    workclass = feature_column.categorical_column_with_vocabulary_list('workclass', workclass_values)
    workclass_one_hot = feature_column.indicator_column(workclass)
    feature_columns.append(workclass_one_hot)

    # Education
    education_values = ['HS-grad','Some-college','Bachelors','Masters','Assoc-voc','11th','Assoc-acdm',
                        '10th','7th-8th','Prof-school','9th','12th','Doctorate','5th-6th','1st-4th','Preschool']
    education = feature_column.categorical_column_with_vocabulary_list('education', education_values)
    education_one_hot = feature_column.indicator_column(education)
    feature_columns.append(education_one_hot)

    # Marital Status
    marital_status_values = ['Married-civ-spouse','Never-married','Divorced','Separated','Widowed',
                             'Married-spouse-absent','Married-AF-spouse']
    marital_status = feature_column.categorical_column_with_vocabulary_list('marital-status', marital_status_values)
    marital_status_one_hot = feature_column.indicator_column(marital_status)
    feature_columns.append(marital_status_one_hot)

    # Occupation
    occupation_values = ['Prof-specialty', 'Craft-repair', 'Exec-managerial', 'Adm-clerical', 'Sales', 'Other-service',
                    'Machine-op-inspct', '?', 'Transport-moving', 'Handlers-cleaners', 'Farming-fishing', 'Tech-support',
                    'Protective-serv', 'Priv-house-serv', 'Armed-Forces']
    occupation = feature_column.categorical_column_with_vocabulary_list('occupation', occupation_values)
    occupation_one_hot = feature_column.indicator_column(occupation)
    feature_columns.append(occupation_one_hot)

    # Relationship
    relationship_values = ['Husband','Not-in-family','Own-child','Unmarried','Wife','Other-relative']
    relationship = feature_column.categorical_column_with_vocabulary_list('relationship', relationship_values)
    relationship_one_hot = feature_column.indicator_column(relationship)
    feature_columns.append(relationship_one_hot)

    # Race
    race_values = ['White','Black','Asian-Pac-Islander','Amer-Indian-Eskimo','Other']
    race = feature_column.categorical_column_with_vocabulary_list('race', race_values)
    race_one_hot = feature_column.indicator_column(race)
    feature_columns.append(race_one_hot)

    # Sex
    sex_values = ['Male','Female']
    sex = feature_column.categorical_column_with_vocabulary_list('sex', sex_values)
    sex_one_hot = feature_column.indicator_column(sex)
    feature_columns.append(sex_one_hot)

    # Bucketized columns
    age = feature_column.numeric_column("age")
    age_buckets = feature_column.bucketized_column(age, boundaries=[18, 25, 30, 35, 40, 45, 50, 55, 60, 65])
    feature_columns.append(age_buckets)

    # Embedded columns
    occupation_embedding = feature_column.embedding_column(occupation, dimension=8)
    feature_columns.append(occupation_embedding)

    # Crossed columns
    crossed_feature = feature_column.crossed_column([age_buckets, occupation], hash_bucket_size=1000)
    crossed_feature = feature_column.indicator_column(crossed_feature)
    feature_columns.append(crossed_feature)
    return feature_columns

# A utility method to create a tf.data dataset from a Pandas Dataframe
def df_to_dataset(dataframe, shuffle=True, batch_size=32):
    dataframe = dataframe.copy()
    labels = dataframe.pop('income')
    ds = tf.data.Dataset.from_tensor_slices((dict(dataframe), labels))
    if shuffle:
        ds = ds.shuffle(buffer_size=len(dataframe))
    ds = ds.batch(batch_size)
    return ds

# Train the model using train and val set
def trainModel(feature_layer, train_ds, val_ds):
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
              epochs=20)
    return model

def main():
    data_loc = "input/adult.data"
    adult_cols = ["age", "workclass", "fnlwgt", "education", "education-num", "marital-status",
                  "occupation", "relationship", "race", "sex", "capital-gain", "capital-loss",
                  "hours-per-week", "native-country", "income"]
    adult_df = createDataframe(data_loc, adult_cols)

    train, test = train_test_split(adult_df, test_size=0.2)
    train, val = train_test_split(train, test_size=0.2)

    batch_size = 32
    train_ds = df_to_dataset(train, batch_size=batch_size)
    val_ds = df_to_dataset(val, shuffle=False, batch_size=batch_size)
    test_ds = df_to_dataset(test, shuffle=False, batch_size=batch_size)

    feature_columns = featureSelection()

    feature_layer = tf.keras.layers.DenseFeatures(feature_columns)

    model = trainModel(feature_layer, train_ds, val_ds)

    loss, accuracy = model.evaluate(test_ds)
    print("Accuracy", accuracy)

    # Sample input
    d = {'age': [31], 'workclass': ['Private'], 'fnlwgt': [45781], 'education': ['Masters'], 'education-num': [14],
     'marital-status': ['Never-married'], 'occupation': ['Prof-specialty'], 'relationship': ['Not-in-family'],
     'race': ['White'], 'sex': ['Female'], 'capital-gain': [14084], 'capital-loss': [0], 'hours-per-week': [50],
     'native-country': ['United-States'], 'income': [1]}
    df_input = pd.DataFrame(data=d)
    input_ds = df_to_dataset(df_input, shuffle=False, batch_size=batch_size)

    # Get the prediction
    # < 0.5 : 0, >= 0.5 : 1
    prediction = model.predict(input_ds)
    print(prediction)

if __name__== "__main__":
    main()
