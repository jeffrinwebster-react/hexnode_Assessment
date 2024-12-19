import styled from "styled-components";
import loginrightimg from "../../assets/Images/loginimages/loginrightimg.jpg";

export const LoginPagehead = styled.div`
  /* height: 100vh; */

  .loginleft_details {
    padding: 120px 90px;

    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  .right_side_hide {
    @media (max-width: 1100px) {
      display: none;
    }
  }

  .loginleftone_details {
    padding: 20px 90px 40px 90px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 43px;
    color: rgb(2, 10, 25);

    @media (max-width: 768px) {
      font-size: 28px;
      font-weight: 500;
      line-height: 34px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translateX(-50%); /* Corrected the transform syntax */
    color: rgb(255, 255, 255);
  }

  p {
    padding-top: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: rgb(85, 101, 117);
  }

  .rightside_text {
    font-size: 16px;
    position: absolute;
    top: 65%;
    left: 20%;
    color: rgb(255, 255, 255);
  }
`;

export const LoginRightSide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .loginrightside_details {
    background-image: url(${loginrightimg});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

   
  }
`;
