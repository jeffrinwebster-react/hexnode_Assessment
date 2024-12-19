import { TiTick } from "react-icons/ti";
import React from "react";
import CustomRow from "../../../../../Components/Others/CustomRow";
import { Col } from "antd";
import tabthirdsec from "../../../../../assets/Images/tabthirdsec.webp";
import { Firsttabsec } from "../../Styles";

const Fourthtabsection = () => {
  return (
    <Firsttabsec>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={14}>
          <h1 style={{ textAlign: "start" }}>
            Capture attention with Digital Signage Kiosks
          </h1>
          <div className="tick_details_head">
            <p>
              <TiTick className="green_tick" />
              Transform your devices into captivating digital signage kiosks
              that grab attention.
            </p>
            <p>
              <TiTick className="green_tick" />
              Engage your audience with vibrant images and seamless video
              streaming.
            </p>
            <p>
              <TiTick className="green_tick" />
              Customize media files with trimming, muting, and background music.
            </p>
            <p>
              <TiTick className="green_tick" />
              Advertise and show off your brand aesthetics to attract customers
              in different ways.
            </p>
            <p>
              <TiTick className="green_tick" />
              Take control with Hexnode to reestablish your brand's presence.
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

export default Fourthtabsection;
