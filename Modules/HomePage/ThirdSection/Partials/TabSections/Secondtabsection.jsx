import { TiTick } from "react-icons/ti";
import React from "react";
import CustomRow from "../../../../../Components/Others/CustomRow";
import { Col } from "antd";
import tabsecsection from "../../../../../assets/Images/tabsecsection.webp";
import { Firsttabsec } from "../../Styles";

const Secondtabsection = () => {
  return (
    <Firsttabsec>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={14}>
          <h1 style={{ textAlign: "start" }}>
            Elevate efficiency with Multi-App Kiosk
          </h1>
          <div className="tick_details_head">
            <p>
              <TiTick className="green_tick" />
              Limit device access to approved apps, ensuring focus and
              productivity.
            </p>
            <p>
              <TiTick className="green_tick" />
              With default phone and settings app inclusion, reduce distractions
              by providing users access to essential functions only.
            </p>
            <p>
              <TiTick className="green_tick" />
              With Hexnode's peripheral settings admins can allow necessary
              device settings while retaining control.
            </p>
            <p>
              <TiTick className="green_tick" />
              Simplify device management while empowering user productivity by
              deploying Multi-App Kiosk Mode.
            </p>
          </div>
        </Col>
        <Col span={24} md={10} className="image-column">
          <div className="img_style_head">
            <img className="img_style" src={tabsecsection} alt="Loading" />
          </div>
        </Col>
      </CustomRow>
    </Firsttabsec>
  );
};

export default Secondtabsection;
