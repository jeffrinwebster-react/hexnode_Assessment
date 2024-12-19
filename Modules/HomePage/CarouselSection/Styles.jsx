import styled from "styled-components";

export const CarouselHead = styled.div`
  margin-top: 100px;
  padding: 100px 20px;
  background: #ecebeb;
  @media (max-width: 767px) {
    margin-top: 50px;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    color: rgb(2, 10, 25);
  }
`;

export const CarouselCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  margin: 40px auto;
  display: flex;
  max-width: 1000px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  .left_side {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    &.fade-in img {
      opacity: 1;
    }
  }

  .right_side {
    padding: 30px 0px 30px 40px;
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.fade-in {
      opacity: 1;
    }

    h2 {
      font-size: 24px;
      font-weight: 600;
      color: rgb(2, 10, 25);
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: rgb(51, 51, 51);
      line-height: 1.5;
    }

    .feedback_summary {
      padding-top: 80px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      text-align: start;
      color: rgb(0, 0, 0);

      @media (max-width: 768px) {
        padding-top: 5px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
      }
    }

    .feedback_names {
      font-size: 20px;
      font-weight: 700;
      color: rgb(2, 10, 25);
      line-height: 33px;
      text-align: start;

      @media (max-width: 767px) {
        font-size: 14px;
        font-weight: 700;
        line-height: 11px;
        text-align: center;
      }
    }

    .feedback_roles {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: rgb(2, 10, 25);
      text-align: start;

      @media (max-width: 767px) {
        padding-top: 5px;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        text-align: center;
      }
    }
  }
`;