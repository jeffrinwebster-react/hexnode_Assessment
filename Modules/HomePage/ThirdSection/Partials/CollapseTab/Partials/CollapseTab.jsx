import React, { useState } from "react";
import CustomRow from "../../../../../../Components/Others/CustomRow";
import { Col, Collapse } from "antd";
import styled from "styled-components";
import Firsttabsection from "../../TabSections/Firsttabsection";
import Secondtabsection from "../../TabSections/Secondtabsection";
import Thirdtabsection from "../../TabSections/Thirdtabsection";
import Fourthtabsection from "../../TabSections/Fourthtabsection";
import Fivethtabsection from "../../TabSections/fivethtabsection";

const CollapseTabHead = styled.div`
  padding: 40px;
`;

const { Panel } = Collapse;

const CollapseTab = () => {
  const [activeKey, setActiveKey] = useState(null);

  const collapseItems = [
    {
      key: "1",
      header: "Single App Kiosk",
      content: <Firsttabsection />,
    },
    {
      key: "2",
      header: "Multi-App Kiosk",
      content: <Secondtabsection />,
    },
    {
      key: "3",
      header: "Web-based Kiosk",
      content: <Thirdtabsection />,
    },
    {
      key: "4",
      header: "Digital Signages",
      content: <Fourthtabsection />,
    },
    {
      key: "5",
      header: "ASAM Kiosk",
      content: <Fivethtabsection />,
    },
  ];

  const handleChange = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <CollapseTabHead>
      <CustomRow>
        <Col span={24}>
          <Collapse
          accordion
            activeKey={activeKey} 
            onChange={handleChange} 
            expandIconPosition="end" 
          >
            {collapseItems.map((item) => (
              <Panel header={item.header} key={item.key}>
                {item.content}
              </Panel>
            ))}
          </Collapse>
        </Col>
      </CustomRow>
    </CollapseTabHead>
  );
};

export default CollapseTab;
