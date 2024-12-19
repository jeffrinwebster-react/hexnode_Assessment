import { TiTick } from "react-icons/ti";
import React from "react";
import CustomRow from "../../../../../Components/Others/CustomRow";
import { Col } from "antd";
import tabfirstsec from "../../../../../assets/Images/tabfirstsec.webp";
import { Firsttabsec } from "../../Styles";

const Firsttabsection = () => {
  return (
    <Firsttabsec>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={14}>
          <h1 style={{ textAlign: "start" }}>
            Powerful Single-App Kiosk solutions for enhanced control
          </h1>
          <div className="tick_details_head">
            <p>
              <TiTick className="green_tick" />
              Provision the devices to run one specialized application, with
              limited functionalities.
            </p>
            <p>
              <TiTick className="green_tick" />
              Customize the device settings to cater to a specific use-case each
              time.
            </p>
            <p>
              <TiTick className="green_tick" />
              Use Hexnode’s Advanced Kiosk settings for additional restrictions
              or expanded device functionalities while in kiosk mode.
            </p>
            <p>
              <TiTick className="green_tick" />
              Empower your administrators with full control over the kiosk
              devices.
            </p>
          </div>
        </Col>
        <Col span={24} md={10} className="image-column">
          <div className="img_style_head">
            <img className="img_style" src={tabfirstsec} alt="Loading" />
          </div>
        </Col>
      </CustomRow>
    </Firsttabsec>
  );
};

export default Firsttabsection;
