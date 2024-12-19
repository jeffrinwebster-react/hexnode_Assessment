import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomRow from "../../../../Components/Others/CustomRow";
import { Col } from "antd";
import carouselimgone from "../../../../assets/Images/carouselimgone.webp";
import carouselimgtwo from "../../../../assets/Images/carouselimgtwo.webp";
import carouselimgthree from "../../../../assets/Images/carouselimgthree.webp";
import CarouselLogoSection from "./CarouselLogoSection";
import { CarouselCard, CarouselHead } from "../Styles";

const CarouselSection = () => {
  const images = [
    {
      src: carouselimgone,
      summary: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      role: "Technology Coordinator",
      organization: "East Troy Community School District",
    },
    {
      src: carouselimgtwo,
      summary:
        "Most Complete MDM Solution I found, and I tested many of them, including major names.",
      name: "Dalibor Kruljac",
      role: "KAMELEYA LTD",
    },
    {
      src: carouselimgthree,
      summary: "It seemed to be in-line with everything we were looking at.",
      name: "Chris Robinson",
      role: "Executive Account Manager , NCS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass("fade-in");
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <CarouselHead>
        <h1>Why should you choose Hexnode?</h1>
        <CarouselCard>
          <CustomRow gutter={[24, 24]}>
            <Col span={24} md={8}>
              <div className={`left_side ${fadeClass}`}>
                <img src={images[currentIndex].src} alt="Hexnode Feature" />
              </div>
            </Col>
            <Col span={24} md={14}>
              <div className={`right_side ${fadeClass}`}>
                <p className="feedback_summary">
                  "{images[currentIndex].summary}"
                </p>
                <hr
                  color="#f7f7f7"
                  style={{
                    margin: "30px 0px 30px 0px",
                  }}
                />
                <p className="feedback_names">{images[currentIndex].name}</p>
                <p className="feedback_roles">{images[currentIndex].role}</p>
                <p className="feedback_roles">
                  {images[currentIndex].organization}
                </p>
              </div>
            </Col>
          </CustomRow>
        </CarouselCard>
        <CarouselLogoSection />
      </CarouselHead>
    </>
  );
};

export default CarouselSection;
