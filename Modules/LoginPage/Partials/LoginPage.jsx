import React from "react";
import styled from "styled-components";
import CustomRow from "../../../Components/Others/CustomRow";
import { Col } from "antd";
import { CustomInputMail } from "../../../Components/Form/CustomInputMail";
import Button from "../../../Components/Form/CustomButton";

import costco from "../../../assets/Images/loginimages/costco.svg";
import group1 from "../../../assets/Images/loginimages/group1.png";
import hilton from "../../../assets/Images/loginimages/hilton.svg";
import lowes from "../../../assets/Images/loginimages/lowes.svg";
import marriott from "../../../assets/Images/loginimages/marriott.svg";
import merck from "../../../assets/Images/loginimages/merck.svg";
import { LoginPagehead, LoginRightSide } from "../Styles";

const LoginPage = () => {
  return (
    <>
    <LoginPagehead>
      <CustomRow>
        <Col span={24} md={16}>
          <div className="loginleft_details">
            <h1>Log in to your Hexnode account</h1>
            <p>
              Enter your Hexnode portal name below. Once connected, you can log
              in with the same credentials that you used while setting up your
              Hexnode account.
            </p>

            <CustomRow space={[12, 12]} style={{ paddingTop: "15px" }}>
              <Col span={24} md={16}>
                <CustomInputMail placeholder={"Enter your portal name "} />
              </Col>
              <Col span={24} md={8}>
                <Button.LoginButton
                  text={"CONNECT"}
                  style={{ width: "100%" }}
                />
              </Col>
            </CustomRow>
          </div>

          <div className="loginleftone_details">
            <h1>Log in to your Hexnode account</h1>
            <p>
              Enter your Hexnode portal name below. Once connected, you can log
              in with the same credentials that you used while setting up your
              Hexnode account.
            </p>

            <CustomRow space={[12, 12]} style={{ paddingTop: "15px" }}>
              <Col span={24} md={16}>
                <CustomInputMail placeholder={"Your work email "} />
              </Col>
              <Col span={24} md={8}>
                <Button.LoginButton
                  text={"GET PORTAL INFO"}
                  style={{ width: "100%" }}
                />
              </Col>
            </CustomRow>
          </div>
        </Col>

        <Col span={24} md={8} className="right_side_hide">
          <LoginRightSide>
            <div className="loginrightside_details" />
            <h2>Don't have an account?</h2>
            <Button.LoginButton
              text={"GET STARTED FOR FREE"}
              style={{
                background: "white",
                border: "none",
                color: "black",
                position: "absolute",
                top: "45%",
                left: "20%",
              }}
            />
            <p className="rightside_text">
              Enterprises of all sizes trust Hexnode UEM
            </p>
          </LoginRightSide>

          <CustomRow
            style={{ position: "absolute", bottom: "10%", width: "100%" }}
          >
            <Col span={24} md={8}>
              <img src={marriott} alt="costco" width="100%" />
            </Col>
            <Col span={24} md={8}>
              <img src={merck} alt="gorillas" width="100%" />
            </Col>
            <Col span={24} md={8}>
              <img src={costco} alt="group1" width="100%" />
            </Col>
            <Col span={24} md={8}>
              <img src={lowes} alt="hilton" width="100%" />
            </Col>
            <Col span={24} md={8}>
              <img src={hilton} alt="lowes" width="100%" />
            </Col>
            <Col span={24} md={8}>
              <img src={group1} alt="marriott" width="100%" />
            </Col>
          </CustomRow>
        </Col>
      </CustomRow>
    </LoginPagehead>
    </>
  );
};

export default LoginPage;
