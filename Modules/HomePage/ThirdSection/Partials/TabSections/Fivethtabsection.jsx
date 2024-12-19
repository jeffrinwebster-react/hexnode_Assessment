import { TiTick } from "react-icons/ti";
import React from "react";
import CustomRow from "../../../../../Components/Others/CustomRow";
import { Col } from "antd";
import tabthirdsec from "../../../../../assets/Images/tabthirdsec.webp";
import { Firsttabsec } from "../../Styles";

const Fivethtabsection = () => {
  return (
    <Firsttabsec>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={14}>
          <h1 style={{ textAlign: "start" }}>
            Unlock the power of Autonomous Single App Mode (ASAM)
          </h1>
          <div className="tick_details_head">
            <p>
              <TiTick className="green_tick" />A feature that empowers your iOS
              app to seamlessly secure itself in the foreground.
            </p>
            <p>
              <TiTick className="green_tick" />
              Transform tablets or devices into dedicated point-of-sale (POS)
              systems by preventing interruptions from other applications or
              notifications.
            </p>
            <p>
              <TiTick className="green_tick" />
              Create focused, efficient and secure digital environments to match
              your requirements.
            </p>
            <p>
              <TiTick className="green_tick" />
              Configure ASAM effortlessly and elevate your user experience like
              never before.
            </p>
          </div>
        </Col>
        <Col span={24} md={10} className="image-column">
          <div className="img_style_head">
            <img className="img_style" src={tabthirdsec} alt="Loading" />
          </div>
        </Col>
      </CustomRow>
    </Firsttabsec>
  );
};

export default Fivethtabsection;
