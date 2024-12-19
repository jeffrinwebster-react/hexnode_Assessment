import React from "react";
import FirstSection from "./FirstSection/Partials/FirstSection";
import SecondSection from "./SecondSection/Partials/SecondSection";
import Platforms from "./Platforms/Partials/Platforms";
import RequestDemo from "./RequestDemo/Partials/RequestDemo";
import Copyrightfooter from "./CopyrightFooter/Partials/Copyrightfooter";
import ThirdSection from "./ThirdSection/Partials/ThirdSection";
import FourthSection from "./FourthSection/Partials/FourthSection";
import CarouselSection from "./CarouselSection/Partials/CarouselSection";
import LoginPage from "../LoginPage/Partials/LoginPage";
import LoginPageFooter from "../LoginPageFooter/Partials/LoginPageFooter";

const HomePage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <CarouselSection />
      <Platforms />
      <RequestDemo />
      <Copyrightfooter />
    </div>
  );
};

export default HomePage;
