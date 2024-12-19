import styled from "styled-components";

export const ThirdsecHead = styled.div`
  padding-top: 120px;

  h1 {
    font-weight: 700;
    font-style: normal;
    color: rgb(2, 10, 25);
    text-align: center;
  }

  .tab_head {
    margin: 50px;
    text-align: center;
  }

  .custom_tab {
    font-size: 18px; 
    font-weight: 600; 
    font-style: italic;
    color: #000;
  }

  .custom_tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #dd0735 !important; 
  }


  
`;


export const Firsttabsec = styled.div`
  padding: 20px;
  background: #eee8e8;

  h1 {
    font-size: 28px;
    font-weight: 700;
    font-style: normal;

    @media (max-width:768px) {
        font-size: 20px;
    font-weight: 700;
    font-style: normal;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: rgb(51, 51, 51);
    text-align: start;
    padding: 0px 38px 38px 0px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.6;

    @media (max-width:768px) {
        font-size: 16px;
    font-weight: 400;
    font-style: normal;
    padding: 5px;
    }
  }

  .tick_details_head {
    padding-top: 40px;

    @media (max-width:768px) {
       padding-top: 10px;
    }
  }

  .img_style_head {
    /* height: 80vh; */

 
}

@media (max-width: 768px) {
    .image-column {
      order: -1;
    }
  }

  .img_style {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  }

  .green_tick {
    color: #4caf50;
    font-size: 20px;
    flex-shrink: 0;
    margin-top: 4px;
  }
`;
