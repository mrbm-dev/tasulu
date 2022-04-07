import { Input } from "antd";
import React from "react";
import classes from "./styles/CustomInput.module.css";

export const CustomInput = (props) => {
  return (
    <div className={classes.login_form}>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
      />
    </div>
  );
};
