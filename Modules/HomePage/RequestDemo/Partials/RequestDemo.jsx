import React from "react";
import { CustomInput } from "../../../../Components/Form/CustomInput";
import Button from "../../../../Components/Form/CustomButton";
import CustomRow from "../../../../Components/Others/CustomRow";
import { Col } from "antd";
import { RequestDemoHead } from "../Styles";


const RequestDemo = () => {
  return (
    <RequestDemoHead>
        <h1>Sign up and try Hexnode free for 14 days!</h1>
        <CustomRow
          className={"custom_row"}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "30px",
            gap: "6px",
          }}
        >
          <Col span={24} md={6}>
            <CustomInput name={"workemail"} placeholder={"Your Work Email"} />
          </Col>

          <Col span={24} md={4}>
            <Button.Danger
              text={"GET STARTED NOW!"}
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={24} md={14}>
            <p>
              No credit cards required.{" "}
              <span>
                Request a demo <span className="symbol">&gt;</span>
              </span>
            </p>
          </Col>
        </CustomRow>
    </RequestDemoHead>
  );
};

export default RequestDemo;
