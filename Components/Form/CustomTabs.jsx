import React from 'react'
import { Tabs } from 'antd'
import styled from 'styled-components';
import { THEME } from '../../Modules/theme';

const StyledTabs = styled(Tabs)`
/* margin-bottom: 20px; */
  /* .ant-tabs-tab {
    color: #000 ;
    &:hover {
      color: ${THEME.primary}; 
    }
  }
  &.ant-tabs .ant-tabs-ink-bar {
  background-color: ${THEME.primary};
  }
  &.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color:  ${THEME.black};
    background-color:  ${THEME.primary};
    padding:0 10px;
  } */
  .ant-tabs .ant-tabs-tab {
    padding: 0 12px 0 0 !important;
    border-right: 2px solid !important;
  }
  .ant-tabs-ink-bar {
    background:${THEME.primary_color};
  }
  .ant-tabs-tab:hover {
    color:${THEME.primary_color};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color:${THEME.primary_color};
  }
`;
const CustomTabs = ({ items, defaultActiveKey, activeKey, onChange }) => {

  const handleChange = (e) => {
    onChange(e)
  }

  return (
    <StyledTabs activeKey={activeKey} items={items} defaultActiveKey={defaultActiveKey} onChange={handleChange}/>
  )
}

export default CustomTabs;
// -------> Usage

// const onChange = (key) => {
//   console.log(key);
// };
// const items = [
//   {
//     key: '1',
//     label: 'Tab 1',
//     children: 'Content of Tab Pane 1',
//   },
//   {
//     key: '2',
//     label: 'Tab 2',
//     children: 'Content of Tab Pane 2',
//   },
//   {
//     key: '3',
//     label: 'Tab 3',
//     children: 'Content of Tab Pane 3',
//   },
// ];