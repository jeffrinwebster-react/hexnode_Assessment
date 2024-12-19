import styled from "styled-components";

export const RequestDemoHead = styled.div`
  background: #010a19;
  /* height: 30vh; */
  padding: 65px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  p {
    color: #556674;
    text-align: center;
    padding-top: 7px;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
  }

  span {
    color: #dd0735;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;

    .symbol {
      display: inline-block;
      transition: transform 0.2s ease-in-out;
    }

    &:hover .symbol {
      transform: translateX(5px);
    }
  }

  h1 {
    color: rgb(255, 255, 255);
    font-size: 42px;
    font-weight: 700;
    font-style: normal;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
