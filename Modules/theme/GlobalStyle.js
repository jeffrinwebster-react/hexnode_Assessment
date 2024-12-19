import { createGlobalStyle } from "styled-components";
import { THEME } from ".";

const GlobalStyle = createGlobalStyle`

* {
        margin:0;
        padding: 0;
        box-sizing:border-box;
        /* font-family: 'Urbanist', sans-serif; */
        font-family: "Mulish", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
        letter-spacing: 0.03em;
        /* font-feature-settings: 'tnum';
        font-variant: tabular-nums; */
        line-height: 1.3;
    } 
  body {
        margin: 0;
        padding: 0;
        font-family: "Mulish", sans-serif;
        width:100%;
        font-weight: 500 !important;
        font-size: 14px;
        color: #545454;
        font-variant: tabular-nums;
        background:#F5F5F5;
     } 
   
  .react-datepicker {
    font-family: "Helvetica Neue", helvetica, arial, sans-serif;
    font-size: 0.8rem;
    /* background-color: red; */
    color: #000;
    border: none; /* Remove border */
    /* display: inline-block; */
    position: relative;
    line-height: initial;
  }
  
  .react-datepicker__navigation--previous {
    position: absolute;
    width: 400px;
    right: 0px;
}

  .react-datepicker__header {
    background-color: white;
    color: #fff;
    /* border-bottom: 1px solid #f50000; */
    border-bottom: none;
    padding: 10px;
    font-size: 1rem;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  h2.react-datepicker__current-month {
    padding: 0;
    margin: 0;
    display: flex;
    font-size: 18px;
}

.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    color: #7F7F7F;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
}

  .react-datepicker__input-container {
    border: none; /* Remove border from the input field */
  }

  .react-datepicker__day--disabled {
    color: #ccc;
    pointer-events: none;
    cursor: not-allowed;
  }

  .react-datepicker__day--selected {
    background-color: #f50000;
    color: white;
    border-radius: 50%;
  }


  :where(.css-dev-only-do-not-override-142vneq).ant-tabs .ant-tabs-tab {
    position: relative;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    /* display: inline-flex; */
    align-items: center;
    justify-content: center;
    padding: 25px 30px;
    font-size: 14px;
    background: black;
    border: 0;
    outline: none;
    cursor: pointer;
    color: white;
}

.eWYNsX .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: white;
    font-size: 22px;
    font-weight: 400;
    font-style: normal;
}

:where(.css-dev-only-do-not-override-142vneq).ant-tabs .ant-tabs-tab+.ant-tabs-tab {
    margin: 0 0 0 0;
    /* width: 100%; */
}

:where(.css-dev-only-do-not-override-142vneq).ant-tabs >.ant-tabs-nav .ant-tabs-nav-wrap, :where(.css-dev-only-do-not-override-142vneq).ant-tabs >div>.ant-tabs-nav .ant-tabs-nav-wrap {
    position: relative;
    display: flex;
    flex: auto;
    justify-content: center;
    align-self: stretch;
    overflow: hidden;
    white-space: nowrap;
    transform: translate(0);

    @media (max-width:1000px) {
      display: flex;
      justify-content: start;
      
    }
}

:where(.css-dev-only-do-not-override-142vneq).ant-collapse>.ant-collapse-item >.ant-collapse-header .ant-collapse-header-text {
    margin-inline-end: auto;
    font-size: 18px;
    font-weight: 900;
    font-style: normal;
    color:rgba(2, 10, 25, 0.5);
}

:where(.css-dev-only-do-not-override-142vneq).ant-collapse .ant-collapse-content>.ant-collapse-content-box {
    padding:0px;

}

:where(.css-dev-only-do-not-override-142vneq).ant-collapse>.ant-collapse-item >.ant-collapse-header {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 12px 14px;
    color: rgba(0, 0, 0, 0.88);
    line-height: 1.5714285714285714;
    cursor: pointer;
    transition: all 0.3s, visibility 0s;
    /* height: 60px; */
    /* border: 1px solid red; */
}

:where(.css-dev-only-do-not-override-142vneq).ant-col [class^="ant-col"], :where(.css-dev-only-do-not-override-142vneq).ant-col [class*=" ant-col"] {
    box-sizing: border-box;
    border-radius: 2px;
}





`;

export default GlobalStyle;
