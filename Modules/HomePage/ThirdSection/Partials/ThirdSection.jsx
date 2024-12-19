import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomTabs from "../../../../Components/Form/CustomTabs";
import Firsttabsection from "./TabSections/Firsttabsection";
import Secondtabsection from "./TabSections/Secondtabsection";
import Thirdtabsection from "./TabSections/Thirdtabsection";
import Fourthtabsection from "./TabSections/Fourthtabsection";
import Fivethtabsection from "./TabSections/fivethtabsection";
import CollapseTab from "./CollapseTab/Partials/CollapseTab";
import { ThirdsecHead } from "../Styles";
import { tabs } from "./TabSections/TabsDatas";

const ThirdSection = () => {
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

  const handleTab = () => {};

  return (
    <ThirdsecHead>
      <h1 style={{ fontSize: "40px" }}>
        Specific kiosk modes for unique use cases
      </h1>
      {isMobileView ? (
        <CollapseTab />
      ) : (
        <div className="tab_head">
          <CustomTabs
            items={tabs}
            defaultActiveKey={"1"}
            onChange={() => handleTab()}
            className="custom_tab"
            tabBarStyle={{
              fontSize: "28px",
              fontWeight: "600",
              fontStyle: "italic",
              textTransform: "uppercase",
            }}
          />
        </div>
      )}
    </ThirdsecHead>
  );
};

export default ThirdSection;
