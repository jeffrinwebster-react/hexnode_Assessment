import React from "react";
import CustomRow from "../../../../Components/Others/CustomRow";
import { Col } from "antd";
import forrester from "../../../../assets/Images/forrester.webp";
import gartner from "../../../../assets/Images/gartner.webp";
import idc from "../../../../assets/Images/idc.webp";
import { SecondSectionHead, SecondSub } from "../Styles";


const SecondSection = () => {
  return (
    <SecondSectionHead>
      <SecondSub>
        <CustomRow space={[12, 12]} className="firstsubhead">
          <Col span={24} md={6}>
            <div className="firstsubsec">
              <div className="firstsubdetails">
                <img src={idc} alt="" />
                <p>
                  Hexnode is listed as a leader and a major player in IDC
                  MarketScape UEM Vendors Assessment Reports 2024.
                </p>
              </div>
            </div>
          </Col>
          <Col span={24} md={2}>
            <div className="vertical_line"></div>
          </Col>
          <Col span={24} md={1}></Col>

          <Col span={24} md={6}>
            <div className="secsubsec">
              <div className="firstsubdetails">
                <img src={gartner} alt="" />
                <p>
                  Hexnode mentioned as a Notable Vendor in Midmarket Context:
                  Magic Quadrant for Unified Endpoint Management tools 2022.
                </p>
              </div>
            </div>
          </Col>
          <Col span={24} md={2}>
            <div className="sec_vertical_line"></div>
          </Col>
          <Col span={24} md={1}></Col>

          <Col span={24} md={6}>
            {/* <div style={{textAlign:'center',background:'red',display:'flex',justifyContent:'center',padding:'50px'}}> */}
            <div className="thirdsubsec">
              <div className="firstsubdetails">
                <img src={forrester} alt="" />
                <p>
                  Forrester includes Hexnode as a Notable vendor in The Unified
                  Endpoint Management Landscape, Q3 2023.
                </p>
              </div>
            </div>
            {/* </div> */}
          </Col>
        </CustomRow>
      </SecondSub>
    </SecondSectionHead>
  );
};

export default SecondSection;
