import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import "./DataTable.css";
import { connect } from "react-redux";

export class DataTable extends React.Component {
  sampleData = [
    {
      key: "1",
      age: 21,
      workclass: "Private",
      fnlwgt: 1,
      education: "Bachelors",
      "education-num": 9,
      "marital-status": "Married",
      occupation: "Student",
      relationship: "Single",
      race: "White",
      sex: "Female",
      "capital-gain": 12,
      "capital-loss": 2,
      "hours-per-week": 40,
      "native-country": "Portugal",
      prediction: 12
    }
  ];

  columns = [
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Work Class",
      dataIndex: "workclass",
      key: "workclass"
    },
    {
      title: "Final Weight",
      dataIndex: "fnlwgt",
      key: "fnlwgt"
    },
    {
      title: "Education",
      dataIndex: "education",
      key: "education"
    },
    {
      title: "Education Num",
      dataIndex: "education-num",
      key: "education-num"
    },
    {
      title: "Marital Status",
      dataIndex: "marital-status",
      key: "marital-status"
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation"
    },
    {
      title: "Relationship",
      dataIndex: "relationship",
      key: "relationship"
    },
    {
      title: "Race",
      dataIndex: "race",
      key: "race"
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex"
    },
    {
      title: "Capital Gain",
      dataIndex: "capital-gain",
      key: "capital-gain"
    },
    {
      title: "Capital Loss",
      dataIndex: "capital-loss",
      key: "capital-loss"
    },
    {
      title: "Work Hours Per Week",
      dataIndex: "hours-per-week",
      key: "hours-per-week"
    },
    {
      title: "Native Country",
      dataIndex: "native-country",
      key: "native-country"
    },
    {
      title: "Prediction",
      dataIndex: "prediction",
      key: "prediction",
      render: text => <b>{text}</b>
    }
  ];

  render() {
    return (
      <div>
        <Table
          dataSource={this.props.profiles}
          columns={this.columns}
          pagination={false}
        ></Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profiles: state
  };
};
export default connect(mapStateToProps, null)(DataTable);
