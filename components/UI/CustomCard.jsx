import { GithubOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import Image from "next/image";
import React, { useState } from "react";
import classes from "./styles/CustomCard.module.css";

export const CustomCard = (props) => {
  const [photo, setPhoto] = useState(props.photo);
  return (
    <div className={[classes.card, props.className].join(" ")}>
      
      {photo ? (
        <GithubOutlined className={classes.github_logo} />
      ) : (
        <Image
        width={30}
        height={30}
        src="/images/google-logo.png"
      />
      )}
      <Text>{props.description}</Text>
      {props.children}
    </div>
  );
};
{/* <Image
        width={props.widthImage}
        height={props.heightImage}
        src={props.srcImage}
      /> */}