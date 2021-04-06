import React from "react";
import Class from "./Job.module.css";

const Job = (props) => {
  return (
    <React.Fragment>
      <div className={Class.container}>
        <p className={Class.item}>{props.nume}</p>
        <p className={Class.item}>{props.descriere}</p>
        <p className={Class.item}>{props.tip}</p>
        <p className={Class.item}>{props.locatie}</p>
      </div>
    </React.Fragment>
  );
};

export default Job;
