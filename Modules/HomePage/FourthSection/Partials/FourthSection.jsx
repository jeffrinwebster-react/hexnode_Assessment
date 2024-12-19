import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomRow from "../../../../Components/Others/CustomRow";
import { Col, Collapse } from "antd";
import { fourthSecDatas } from "./FourthSectionDatas";

const FourthSecHead = styled.div`
  /* margin-top: 350px; */
  /* height: 100vh; */


  @media (max-width: 768px) {
    margin-top:20px;

  }

  .collapse_head {
    /* padding: 20px; */

    .para_content {
      padding: 15px 50px 0px 14px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      color: rgb(51, 51, 51);
      line-height: 28px;
    }
  }

  .tryforfree {
    padding: 15px 50px 0px 14px;
    color: rgb(221, 7, 53);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
  }

  span {
    padding-top: 10px;
    color: #dd0735;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;

    .symbol {
      display: inline-block;
      transition: transform 0.2s ease-in-out;
    }

    &:hover .symbol {
      transform: translateX(5px);
    }
  }

  @media (max-width: 1110px) {
    .break {
      display: none;
    }
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    color: black;

    @media (max-width: 768px) {
  font-size: 32px;
   
  }
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .image-container img {
    width: 80%;
    max-width: 500px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const CustomPanelHeader = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: rgb(5, 6, 7);
  font-style: normal;
  cursor: pointer;

  

  @media (max-width: 768px) {
  font-size: 21px;
   
  }
`;

const { Panel } = Collapse;

const FourthSection = () => {
  const [activeKey, setActiveKey] = useState(1);

  const [isMobileView, setIsMobileView] = useState(false);

  const checkScreenSize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleChange = (key) => {
    const numericKey = Number(key);
    console.log(numericKey, "numericKey");
    setActiveKey((prevKey) => (prevKey === numericKey ? null : numericKey));
  };

  return (
    <FourthSecHead>
      <h1>
        What additional possibilities does the <br className="break" /> Kiosk
        mode offer?
      </h1>
      <CustomRow space={[24, 24]} style={{ marginTop: "50px" }}>
        {!isMobileView && ( 
          <Col span={24} md={12}>
            <div className="image-container">
              {activeKey && (
                <img
                  src={
                    fourthSecDatas.find((item) => item.key === activeKey)?.img
                  }
                  alt="Kiosk Mode"
                />
              )}
            </div>
          </Col>
        )}
        <Col span={24} md={12}>
          <div className="collapse_head">
            <Collapse
              accordion
              ghost
              activeKey={String(activeKey)}
              onChange={handleChange}
              expandIconPosition="end"
            >
              {fourthSecDatas.map((item) => (
                <Panel
                  header={
                    <CustomPanelHeader>{item.paraHead}</CustomPanelHeader>
                  }
                  key={String(item.key)}
                >
                  {isMobileView ? (
                    <>
            <div className="image-container">

                      <img src={item.img} alt="Loading...." />
                      </div>
                      <p className="para_content">{item.content}</p>
                      <span className="tryforfree">
                        {item.paraSub} <span className="symbol">&gt;</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <p className="para_content">{item.content}</p>
                      <span className="tryforfree">
                        {item.paraSub} <span className="symbol">&gt;</span>
                      </span>
                    </>
                  )}
                </Panel>
              ))}
            </Collapse>
          </div>
        </Col>
      </CustomRow>
    </FourthSecHead>
  );
};

export default FourthSection;
