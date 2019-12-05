import { Form, Input, Select, Button } from "antd";
import React from "react";
import "./FormBody.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";

const { Option } = Select;

const educationNum = {
  Bachelors: 13,
  "Some-college": 10,
  "11th": 7,
  "HS-grad": 9,
  "Prof-school": 15,
  "Assoc-acdm": 12,
  "Assoc-voc": 11,
  "9th": 5,
  "7th-8th": 4,
  "5th-6th": 3,
  "1st-4th": 2,
  Preschool: 1,
  "10th": 6,
  "11th": 7,
  "12th": 8,
  Masters: 14
};

export class FormBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setEducation = e => {
    this.setState({ "education-num": [educationNum[e]] });
    this.setState({ education: [e] });
  };

  setSex = e => {
    this.setState({ sex: [e] });
  };

  setAge = e => {
    this.setState({ age: [e] });
  };

  setRace = e => {
    this.setState({ race: [e] });
  };

  setNative = e => {
    this.setState({ "native-country": [e] });
  };

  setRelationship = e => {
    this.setState({ relationship: [e] });
  };

  setMarital = e => {
    this.setState({ "marital-status": [e] });
  };

  setWorkclass = e => {
    this.setState({ workclass: [e] });
  };

  setOccupation = e => {
    this.setState({ occupation: [e] });
  };

  setGain = e => {
    this.setState({ "capital-gain": [e] });
  };

  setLoss = e => {
    this.setState({ "capital-loss": [e] });
  };

  setHours = e => {
    this.setState({ "hours-per-week": [e] });
  };

  setFinalWeight = e => {
    this.setState({ fnlwgt: [e] });
  };

  handleSubmit = () => {
    this.props.saveCase(this.state);
  };

  formLeft() {
    return (
      <div class="form-left">
        <div style={{ fontSize: "22px" }}> Demographics Information </div>
        <Form>
          <Form.Item label="Education Level">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Education"
              onChange={e => this.setEducation(e)}
            >
              <Option value="Preschool"> Preschool</Option>
              <Option value="1st-4th"> 1st-4th</Option>
              <Option value="5th-6th"> 5th-6th</Option>
              <Option value="7th-8th"> 7th-8th</Option>
              <Option value="9th"> 9th</Option>
              <Option value="10th"> 10th</Option>
              <Option value="11th"> 11th</Option>
              <Option value="12th"> 12th</Option>
              <Option value="HS-grad"> HS Grad</Option>
              <Option value="Some-college"> Some College</Option>
              <Option value="Assoc-acdm"> Assoc Acdm</Option>
              <Option value="Assoc-voc"> Assoc Voc</Option>
              <Option value="Bachelors"> Bachelors</Option>
              <Option value="Masters"> Masters</Option>
              <Option value="Doctorate"> Doctorate</Option>
              <Option value="Prof-school"> Prof-School</Option>
            </Select>
          </Form.Item>
          <div style={{ marginTop: "-22px" }} class="special">
            <Form.Item label="Sex">
              <Select
                style={{ width: "300px" }}
                placeholder="Select Male / Female"
                onChange={e => this.setSex(e)}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ marginLeft: "20px" }} label="Age">
              <Input
                style={{
                  width: "100px"
                }}
                placeholder="0"
                type="number"
                onChange={e => this.setAge(e)}
              />
            </Form.Item>
          </div>
          <Form.Item style={{ marginTop: "-22px" }} label="Race">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Race"
              onChange={e => this.setRace(e)}
            >
              <Option value="White">White</Option>
              <Option value="Asian-Pac-Islander">Asian Pacific Islander</Option>
              <Option value="Amer-Indian-Eskimo">American Indian</Option>
              <Option value="Black">Black</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginTop: "-22px" }} label="Native Country">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Country of Origin"
              onChange={e => this.setCountry(e)}
            >
              <Option value="United-States"> United-States</Option>
              <Option value=" Cambodia"> Cambodia</Option>
              <Option value=" England"> England</Option>
              <Option value=" Puerto-Rico"> Puerto-Rico</Option>
              <Option value=" Canada"> Canada</Option>
              <Option value=" Germany"> Germany</Option>
              <Option value=" Outlying-US(Guam-USVI-etc)">
                Outlying-US(Guam-USVI-etc)
              </Option>
              <Option value="India"> India</Option>
              <Option value="Japan"> Japan</Option>
              <Option value="Greece"> Greece</Option>
              <Option value="South"> South</Option>
              <Option value="China"> China</Option>
              <Option value="Cuba"> Cuba</Option>
              <Option value="Iran"> Iran</Option>
              <Option value="Honduras"> Honduras</Option>
              <Option value="Philippines"> Philippines</Option>
              <Option value="Italy"> Italy</Option>
              <Option value="Poland"> Poland</Option>
              <Option value="Jamaica"> Jamaica</Option>
              <Option value="Vietnam"> Vietnam</Option>
              <Option value="Mexico"> Mexico</Option>
              <Option value="Portugal"> Portugal</Option>
              <Option value="Ireland"> Ireland</Option>
              <Option value="France"> France</Option>
              <Option value="Dominican-Republic"> Dominican-Republic</Option>
              <Option value="Laos"> Laos</Option>
              <Option value="Ecuador"> Ecuador</Option>
              <Option value="Taiwan"> Taiwan</Option>
              <Option value="Haiti"> Haiti</Option>
              <Option value="Columbia"> Columbia</Option>
              <Option value="Hungary"> Hungary</Option>
              <Option value="Guatemala"> Guatemala</Option>
              <Option value="Nicaragua"> Nicaragua</Option>
              <Option value="Scotland"> Scotland</Option>
              <Option value="Thailand"> Thailand</Option>
              <Option value="Yugoslavia"> Yugoslavia</Option>
              <Option value="El-Salvador"> El-Salvador</Option>
              <Option value="Trinadad&Tobago"> Trinadad and Tobago</Option>
              <Option value="Peru"> Peru</Option>
              <Option value="Hong"> Hong</Option>
              <Option value="Holand-Netherlands">Holand-Netherlands</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginTop: "-22px" }} label="Relationship">
            <Select
              style={{ width: "300px" }}
              placeholder="Select Current Relationship"
              onChange={e => this.setRelationship(e)}
            >
              <Option value="Wife">Wife</Option>
              <Option value="Husband">Husband</Option>
              <Option value="Own-child">Own-child</Option>
              <Option value="Not-in-family">Not-in-family</Option>
              <Option value="Other-relative">Other-relative</Option>
              <Option value="Unmarried">Unmarried</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginTop: "-22px" }} label="Marital Info">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Marriage Info"
              onChange={e => this.setMarital(e)}
            >
              <Option value="Married-civ-spouse">Married-civ-spouse</Option>
              <Option value="Divorced">Divorced</Option>
              <Option value="Never-married">Never-married</Option>
              <Option value="Separated">Separated</Option>
              <Option value="Widowed">Widowed</Option>
              <Option value="Married-spouse-absent">
                Married-spouse-absent
              </Option>
              <Option value="Married-AF-spouse">Married-AF-spouse</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
    );
  }

  formRight() {
    return (
      <div class="form-right">
        <div style={{ fontSize: "22px" }}> Business Information </div>
        <Form>
          <Form.Item label="Business Sector">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Business Sector"
              onChange={e => this.setWorkclass(e)}
            >
              <Option value="Private">Private</Option>
              <Option value="Self-emp-not-inc">Self employed, No Income</Option>
              <Option value="Self-emp-inc">Self employed, Income</Option>
              <Option value="Federal-gov">Federal Government</Option>
              <Option value="Local-gov">Local Government</Option>
              <Option value="PrState-govivate">State Government</Option>
              <Option value="Without-pay">Without Pay</Option>
              <Option value="Never-worked">Never Worked</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Occupation">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Occupation"
              onChange={e => this.setOccupation(e)}
            >
              <Option value="Private">Private</Option>
              <Option value="Self-emp-not-inc">Self employed, No Income</Option>
              <Option value="Self-emp-inc">Self employed, Income</Option>
              <Option value="Federal-gov">Federal Government</Option>
              <Option value="Local-gov">Local Government</Option>
              <Option value="PrState-govivate">State Government</Option>
              <Option value="Without-pay">Without Pay</Option>
              <Option value="Never-worked">Never Worked</Option>
            </Select>
          </Form.Item>
          <div style={{ marginTop: "-22px" }} class="special">
            <Form.Item label="Capital Gain">
              <Input
                style={{
                  width: "100px"
                }}
                placeholder="0"
                type="number"
                onChange={e => this.setGain(e)}
              />
            </Form.Item>
            <Form.Item style={{ marginLeft: "20px" }} label="Capital Loss">
              <Input
                style={{
                  width: "100px"
                }}
                placeholder="0"
                type="number"
                onChange={e => this.setLoss(e)}
              />
            </Form.Item>
          </div>
          <Form.Item label="Hours Worked Per Week">
            <Input
              style={{
                width: "100px"
              }}
              placeholder="0"
              type="number"
              onChange={e => this.setHours(e)}
            />
          </Form.Item>
          <Form.Item label="Final Weight">
            <Input
              style={{
                width: "100px"
              }}
              placeholder="0"
              type="number"
              onChange={e => this.setFinalWeight(e)}
            />
          </Form.Item>
        </Form>
        <div
          style={{
            position: "absolute",
            marginLeft: "400px",
            marginTop: "-62px"
          }}
        >
          <Button
            style={{ height: "45px", width: "120px" }}
            htmlType="submit"
            type="primary"
            onClick={this.handleSubmit}
          >
            Save Case
          </Button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="form-container">
        {this.formLeft()} {this.formRight()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { saveCase: state => dispatch({ type: "SAVE_CASE", payload: state }) };
};

export default connect(null, mapDispatchToProps)(FormBody);
