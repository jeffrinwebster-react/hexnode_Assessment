import styled from "styled-components";

export const Iconplace = styled.div`
  display: none;

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const NavHead = styled.div`
  height: ${(props) => (props.scrolled ? "76px" : "70px")};
  background: ${(props) => (props.scrolled ? "white" : "#010a19")};
  color: ${(props) => (props.scrolled ? "black" : "white")};
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.scrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1000;

  // it is not working properly so only i removed hover effect in navbar

  /* &:hover {
    background: white;
    color: black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:hover .hexnode-image {
    display: ${(props) => (props.scrolled ? "block" : "block")} !important;
  } */
`;
