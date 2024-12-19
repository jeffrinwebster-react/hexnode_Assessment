import styled from "styled-components";

export const CoyrightHead = styled.div`
  background: #f2f2f2;
  height: 8vh;
  display: flex;
  padding: 0px 100px 0px 100px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    color: rgb(2, 10, 25);

    @media (max-width: 768px) {
      padding: 10px;
    }
  }
`;