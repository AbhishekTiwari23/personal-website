import React from "react";
// import { ReactDOM } from "react";
// import { QueryClint,  QueryClintProvider} from 'react-query';
import "./opensourcecard.scss";
const Companies = (props) => {
  return (
    <div className="companies-wrapper">
      <div className="company-name">
        {/* <p>{props.name}</p> */}
      </div>
      <div className="company-logo">
        <img src={props.logo} alt=""  />
      </div>
    </div>
  );
};
export default Companies;
