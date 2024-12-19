import { TiTick } from "react-icons/ti";
import React from "react";
import CustomRow from "../../../../../Components/Others/CustomRow";
import { Col } from "antd";
import tabthirdsec from "../../../../../assets/Images/tabthirdsec.webp";
import { Firsttabsec } from "../../Styles";

const Thirdtabsection = () => {
  return (
    <Firsttabsec>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={14}>
          <h1 style={{ textAlign: "start" }}>
            Explore the new way to manage web apps and websites
          </h1>
          <div className="tick_details_head">
            <p>
              <TiTick className="green_tick" />
              Let users access essential and approved web apps, website and
              files only.
            </p>
            <p>
              <TiTick className="green_tick" />
              Make the best use of website kiosk with Hexnode's advanced
              settings.
            </p>
            <p>
              <TiTick className="green_tick" />
              Tailor your experience to match your unique use case.
            </p>
            <p>
              <TiTick className="green_tick" />
              From configuring toolbar options to scheduling page refresh,
              remote debugging, and limiting incognito tabs, take full control
              of your website kiosk experience.
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

export default Thirdtabsection;
