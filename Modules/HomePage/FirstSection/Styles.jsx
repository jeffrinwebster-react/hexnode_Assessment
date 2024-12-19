import styled from "styled-components";

export const FirstSecHead = styled.div`
  background: #010a19;
  height: 86vh;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    max-width: 720px;
    object-fit: contain;
  }

  p {
    font-size: 42px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-style: normal;
    padding: 32px;

    @media (max-width: 375px) {
      font-size: 23px;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-style: normal;
      padding: 0px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      font-size: 32px;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-style: normal;
      padding: 0px;
    }

    @media (min-width: 767px) and (max-width: 900px) {
      font-size: 37px;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-style: normal;
      padding: 0px;
    }

    @media (max-width: 1110px) {
      .break {
        display: none;
      }
    }
  }

  @media (max-width: 1000px) {
    .image-column {
      order: -1;
    }
  }
  @media (max-width: 1000px) {
    height: auto; /* Adjust height for smaller screens */
    padding-top: 60px;
  }

  .leftside {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    padding-left: 15px;
    padding-top: 15px;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40vh;
    }
  }
`;

export const FirstHeadsub = styled.div`
  padding: 120px 0px 0px 0px;
`;
