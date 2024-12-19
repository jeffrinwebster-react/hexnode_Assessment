import styled from "styled-components";

export const SecondSectionHead = styled.div`
  /* height: 25vh; */
  background: #1a1c2b;
  /* padding: 70px 0px 70px 0px; */

  /* img{
    max-width: 100px;
} */

  .firstsubsec {
    /* padding: 20px 0px 0px 30px; */
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100%;

    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      text-align: center;
      padding: 0px;
    }

    img {
      max-width: 120px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      color: #fff9;
      padding: 20px 20px 0px 0px;

      @media (max-width: 999px) {
        font-size: 14px;
        text-align: center;
        padding: 10px;
      }
    }
  }

  .secsubsec {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100%;

    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      text-align: center;
      padding: 0px;
    }

    img {
      max-width: 120px;
      height: auto;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      color: #fff9;
      padding: 20px 20px 0px 0px;

      @media (max-width: 999px) {
        font-size: 14px;
        text-align: center;
        padding: 10px;
      }
    }
  }
  .thirdsubsec {
    /* background: #4072df; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 100%;

    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      text-align: center;
      padding: 0px;
    }

    img {
      max-width: 140px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      font-style: normal;
      text-align: start;
      color: #fff9;
      padding: 20px 20px 0px 0px;

      @media (max-width: 999px) {
        font-size: 14px;
        text-align: center;
        padding: 10px;
      }
    }
  }
`;

export const SecondSub = styled.div`
  /* padding: 18px 20px 0px 80px; */
  padding: 50px 20px 0px 80px;

  position: relative;

  .sec_vertical_line {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
      background: #484956;
    }
  }

  .vertical_line {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
      background: #484956;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    .sec_vertical_line::after,
    .vertical_line::after {
      width: 70%;
      height: 1px;
      top: auto;
      left: 15%;
      transform: translateX(0);
    }
  }
`;
