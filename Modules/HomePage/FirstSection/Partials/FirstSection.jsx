import React from "react";
import firstsecimg from "../../../../assets/Images/firstsecimg.webp";
import { Col } from "antd";
import { FirstHeadsub, FirstSecHead } from "../Styles";
import CustomRow from "../../../../Components/Others/CustomRow";
import { CustomInput } from "../../../../Components/Form/CustomInput";
import Button from "../../../../Components/Form/CustomButton";
import { useNavigate } from "react-router-dom";





const FirstSection = () => {

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/loginpage')


  }
  return (
    <>
    <FirstSecHead>
        <FirstHeadsub>
        <CustomRow space={[24, 24]} >
          <Col span={24} md={12} >
            <div
            className="leftside"
            >
              <p >
                Turn your devices into <br className="break"/> kiosks in a few minutes <br className="break"/>
                with Hexnode UEM
                <CustomRow space={[6,6]} style={{paddingTop:'10px'}}>
                  <Col span={24} md={12} >
                    <CustomInput
                      name={"workmail"}
                      placeholder={"Your Work Email"}
                    />
                  </Col>
                  <Col span={24} md={12}>
                    <Button.Danger onClick={goToLogin} text={"GET STARTED NOW!"} style={{width:'100%'}} />
                  </Col>
                </CustomRow>
              </p>
            </div>
          </Col>
          <Col span={24} md={12} className="image-column">
            <div 
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              <img  src={firstsecimg} alt="Loading...." />
            </div>
          </Col>
        </CustomRow>
        </FirstHeadsub>
    </FirstSecHead>

    </>
  );
};

export default FirstSection;
