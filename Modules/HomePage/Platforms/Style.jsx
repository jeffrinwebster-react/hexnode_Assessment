import styled from "styled-components";

export const PlatformSection = styled.div`
  .platform_sub {
    padding: 0px 95px 95px 95px;

    @media (max-width: 768px) {
      padding: 10px;
      
    }
  }

  h1 {
    text-align: center;
    color: black;
    font-size: 40px;
    font-weight: 700;
    font-style: normal;
    padding-top: 100px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .platforms_products {
    margin-top: 36px;
  }

  .platforms_products_img {
    width: 100%;
    height: auto;
    object-fit: contain;
    padding: 10px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .platforms_products_img:hover {
    transform: translateY(-10px);
  }
`;