import React from "react";
import logo from "./logo.svg";
import DatePicker from "react-date-picker";
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

function form() {
  return (
    <form>
      <div style={{ fontSize: "20px", fontWeight: 450, marginBottom: "20px" }}>
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
        <option>Asian</option>
        <option>American Indian or Alaskan Native</option>
        <option>Black or African American</option>
        <option>Native Hawaiin / Pacific Islander</option>
        <option>White</option>
        <option></option>
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

function App() {
  return (
    <div>
      <div class="header">
        <span class="header-left">CSC 480 Health Group</span>
      </div>
      <div class="form-left">{form()}</div>
    </div>
  );
}

export default App;
