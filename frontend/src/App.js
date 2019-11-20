import React from "react";
import logo from "./logo.svg";
import DatePicker from "react-date-picker";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import { formatCountdown } from "antd/lib/statistic/utils";

/* 
Claim ID
Disease ID
Claim start
Claim end
Provider
Reimbursement amount
Attending Physician 

Date of birth
Gener
Race
State
Country
*/

function formLeft() {
  return (
    <form>
      <div style={{ fontSize: "20px", fontWeight: 450, marginBottom: "20px" }}>
        {" "}
        Personal Info
      </div>
      <label> Name</label>
      <br />
      <input
        placeholder="Name"
        size="default"
        style={{ height: "18px", width: "180px", marginBottom: "20px" }}
      />
      <br />
      <label>Date of Birth</label>
      <br />
      <DatePicker style={{ borderRadius: "1px" }} />
      <br />
      <br />
      <label> Race</label>
      <br />
      <select
        placeholder="Race"
        size="default"
        style={{ height: "18px", width: "180px", marginBottom: "20px" }}
      >
        <option>white</option>
        <option>black??</option>
        <option>mexican?</option>
        <option>asian?</option>
      </select>
      <br />
      <label>Gender</label>
      <br />
      <select
        placeholder="Gender"
        size="default"
        style={{ height: "18px", width: "180px", marginBottom: "20px" }}
      >
        <option>male</option>
        <option>female</option>
        <option>nonbinary</option>
      </select>
    </form>
  );
}

function formRight() {
  return (
    <form>
      <div style={{ fontSize: "20px", fontWeight: 450, marginBottom: "20px" }}>
        {" "}
        Claim Info
      </div>
      <label> Name</label>
      <br />
      <input
        placeholder="Name"
        size="default"
        style={{ height: "18px", width: "180px", marginBottom: "20px" }}
      />
      <br />
      <label>Date of Birth</label>
      <br />
      <DatePicker style={{ borderRadius: "1px" }} />
      <br />
      <br />
      <label> Race</label>
      <br />
      <select
        placeholder="Race"
        size="default"
        style={{ height: "18px", width: "180px", marginBottom: "20px" }}
      >
        <option>white</option>
        <option>black??</option>
        <option>mexican?</option>
        <option>asian?</option>
      </select>
      <br />
      <label>Gender</label>
      <br />
      <select
        placeholder="Gender"
        size="default"
        style={{ height: "18px", width: "180px", marginBottom: "20px" }}
      >
        <option>male</option>
        <option>female</option>
        <option>nonbinary</option>
      </select>
    </form>
  );
}

function claimTable() {
  return (
    <div class="claim-table">
      <table>
        <tr>
          {" "}
          <th>Stuff</th>
          <th>Stuff</th>
          <th>Stuff</th>
          <th>Stuff</th>
        </tr>
        <tr>
          <td>Person</td>
          <td>Person</td>
          <td>Person</td>
          <td>Person</td>
        </tr>
      </table>
    </div>
  );
}

function App() {
  return (
    <div>
      <Tabs>
        <div class="header">
          <span class="header-left">CSC 480 Health Group</span>
          <span class="header-tabs">
            <TabList>
              <Tab>Enter Claim</Tab>
              <Tab>Past Claims</Tab>
            </TabList>
          </span>
        </div>
        <TabPanel>
          <div className="form-body">
            <div className="form-left">{formLeft()}</div>
            <div className="form-right">{formRight()}</div>
          </div>
        </TabPanel>
        <TabPanel>{claimTable()}</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
