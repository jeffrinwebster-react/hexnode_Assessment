import React from "react";
import CustomRow from "../../../../Components/Others/CustomRow";
import { Col } from "antd";
import { PlatformProducts } from "./PlatformsProducts";
import { PlatformSection } from "../Style";


const Platforms = () => {
  return (
    <PlatformSection>
      <div className="platform_sub">
        <CustomRow space={[12, 12]}>
          <Col span={24} md={24}>
            <h1>Platforms supported</h1>
          </Col>
          {PlatformProducts.map((product) => (
            <Col key={product.id} span={12} md={4}>
              <div className="platforms_products">
                <img
                  src={product.img}
                  alt={`Platform ${product.id}`}
                  className="platforms_products_img"
                />
              </div>
            </Col>
          ))}
        </CustomRow>
      </div>
    </PlatformSection>
  );
};

export default Platforms;
