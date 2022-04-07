import React from "react";
import { Form, Input, Button, Checkbox, Alert, Typography, Card } from "antd";
import classes from "./styles/Register.module.css";
import Image from "next/image";
import Title from "antd/lib/typography/Title";
import { CustomCard } from "./UI/CustomCard";
import { GithubOutlined } from "@ant-design/icons";
import { CustomInput } from "./inputs/CustomInput";

const { Text, Link } = Typography;

export const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onClose = (e) => {
    console.log(e, "I was closed.");
  };
  return (
    <div className={classes.main}>
      <div className={classes.selection_right}>
        <div className={classes.taskulu_logo}>
          <Image src="/images/taskulu-fa-blue.svg" width={162} height={42} />
        </div>
        <div className={classes.main_center}>
          <Alert
            message="نشست شما منقضی شده است. برای ادامه، لطفاً دوباره وارد شوید."
            type="warning"
            closable
            onClose={onClose}
          />
          <Title level={3}>عضویت</Title>

          <div className={classes.login_form}>
            <CustomInput
              name={"username"}
              type={"text"}
              placeholder={"نام کاربری، مانندbilbo"}
            />
            <CustomInput
              type={"email"}
              name={"email"}
              placeholder={"ایمیل، مانند bilbo@example.com"}
            />
            <CustomInput
              type={"password"}
              name={"password"}
              placeholder={"گذرواژه مانند .........."}
            />
            <CustomInput
              type={"password"}
              name={"repassword"}
              placeholder={"تگرار گذرواژه"}
            />
          </div>
          <Checkbox>من را برای ۳۰ روز به یاد داشته باش </Checkbox>
          <div className={classes.btn}>
            <Button>عضویت</Button>
            <Button type="primary" htmlType="submit">
              ورود
            </Button>
          </div>
          <div className={classes.card_item}>
            <CustomCard
              photo={false}
              description="اتصال با گوگل"
              className={classes.card_google}
            />
            <CustomCard
              photo={true}
              description="اتصال با گیت هاب"
              className={classes.card_github}
            />
          </div>
          <Link href="#">فراموشی گذرواژه</Link>
          <div className={classes.footer}>
            <Text> پشتیبانی</Text>
            <Text> | </Text>
            <Text>Taskulu </Text>
          </div>
        </div>
      </div>

      <div className={classes.selection_left}>
        <div className={classes.text}>
          <Title className={classes.title} level={3}>
            برنامه امروزتون چیه؟
          </Title>
          <Title level={5}>وقتشه کار رو شروع کنیم</Title>
        </div>
      </div>
    </div>
  );
};
