import React from "react";
import { Tab, Tabs, TabPanel } from "react-tabs";
import "antd/dist/antd.css";
import { Form, Input, Select, Button } from "antd";
import { ReactComponent as Logo } from "./logo2.svg";
import DataTable from "./DataTable";
import "react-tabs/style/react-tabs.css";
import "./App.css";

const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  formLeft() {
    return (
      <div class="form-left">
        <div style={{ fontSize: "22px" }}> Demographics Information </div>
        <Form>
          <Form.Item label="Education Level">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Education"
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
              />
            </Form.Item>
          </div>
          <Form.Item style={{ marginTop: "-22px" }} label="Race">
            <Select
              style={{ marginTop: "-80px", width: "300px" }}
              placeholder="Select Race"
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
            >
              {/* workclass: Private, Self-emp-not-inc, Self-emp-inc, Federal-gov, Local-gov, State-gov, Without-pay, Never-worked. */}
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
              />
            </Form.Item>
            <Form.Item style={{ marginLeft: "20px" }} label="Capital Loss">
              <Input
                style={{
                  width: "100px"
                }}
                placeholder="0"
                type="number"
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
            />
          </Form.Item>
          <Form.Item label="Final Weight">
            <Input
              style={{
                width: "100px"
              }}
              placeholder="0"
              type="number"
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
          >
            Save Case
          </Button>
        </div>
      </div>
    );
  }

  formBody() {
    return (
      <div class="form-container">
        {this.formLeft()} {this.formRight()}
      </div>
    );
  }

  setActiveTab(key) {
    this.setState({ activeTab: key });
  }

  render() {
    return (
      <div>
        <Tabs>
          <div class="header">
            <div class="header-left">
              <Logo
                style={{ width: "50px", height: "50px", marginTop: "5px" }}
              />
              <div style={{ marginLeft: "15px" }}>Loan Genius</div>
            </div>
            <div class="header-right">
              <Tab
                className="tab"
                style={
                  this.state.activeTab == 1
                    ? { borderBottom: "3px solid rgb(11, 94, 248)" }
                    : {}
                }
                onClick={key => this.setActiveTab(1)}
              >
                Create Case
              </Tab>
              <Tab
                style={
                  this.state.activeTab == 2
                    ? { borderBottom: "3px solid rgb(11, 94, 248)" }
                    : {}
                }
                className="tab"
                onClick={key => this.setActiveTab(2)}
              >
                Test Loan Cases
              </Tab>
            </div>
          </div>
          <div className="form-body">
            <TabPanel>{this.formBody()}</TabPanel>
            <TabPanel>
              <DataTable />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
