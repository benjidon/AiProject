import React from "react";
import { Tab, Tabs, TabPanel } from "react-tabs";
import "antd/dist/antd.css";
import { ReactComponent as Logo } from "./logo.svg";
import DataTable from "./components/DataTable";
import FormBody from "./components/FormBody";
import "react-tabs/style/react-tabs.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
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
                    ? { borderBottom: "3px solid #40a9ff" }
                    : {}
                }
                onClick={key => this.setActiveTab(1)}
              >
                Create Case
              </Tab>
              <Tab
                style={
                  this.state.activeTab == 2
                    ? { borderBottom: "3px solid #40a9ff" }
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
            <TabPanel>
              <FormBody />
            </TabPanel>
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
