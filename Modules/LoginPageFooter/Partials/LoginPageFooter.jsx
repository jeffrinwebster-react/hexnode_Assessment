import React from "react";
import styled from "styled-components";
import CustomRow from "../../../Components/Others/CustomRow";
import { Col } from "antd";
import hexnode from "../../../assets/Images/loginimages/hexnode.svg";
import poweredbymitsogo from "../../../assets/Images/loginimages/poweredbymitsogo.svg";
import hexnodeimg from "../../../assets/Images/loginimages/hexnodeimg.jpg";

const FooterHead = styled.div`
  padding: 60px 90px;
  background: #ecebeb;

  @media (max-width:768px) {
    padding: 20px;
  }
 
  h3 {
    font-weight: 600;
    line-height: 35px;
    color: rgb(51, 51, 51);
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: rgb(99, 99, 103);
    margin-bottom: 16px;

  }
`;

const LoginPageFooter = () => {
  return (
    <FooterHead>
      <CustomRow space={[24, 24]}>
        <Col span={12} md={12} lg={4}>
          <div
            style={{
              display: "inline-block",
              padding: "10px 3px",
              borderRadius: "5px",
            }}
          >
            <img src={hexnode} alt="Logo" style={{ width: "120px" }} />
            <img src={poweredbymitsogo} alt="" />
          </div>
          <p>Hexnode UEM</p>
          <p>Hexnode Kiosk Lockdown</p>
          <p>Hexnode Secure Browser</p>
          <p>Hexnode Digital Signage</p>
          <p>Hexnode Genie</p>
        </Col>
        <Col span={12} md={12} lg={4}>
          <h3>PRODUCT</h3>
          <p>All Features</p>
          <p>Pricing</p>
          <p>Customers</p>
          <p>Customer Services</p>
          <p>Resources</p>
          <p>Webinar</p>
          <p>Help</p>
          <p>Academy</p>
          <p>Forums</p>
          <p>Developers</p>
          <p>Marketplace</p>
          <p>Free Trail</p>
        </Col>
        <Col span={12} md={12} lg={5}>
          <h3>SALES & SUPPORT</h3>
          <p>US: +1-833-HEXNODE (439-6633) Toll-free</p>
          <p>UK: +44-8003-689920 Toll-free</p>
          <p>AU: +61-1800-165-939 Toll-free</p>
          <p>NZ: +64-9-8842599 Direct</p>
          <p>CH: +41-44-798-2244 Direct</p>
          <p>International: +1-415-636-7555</p>
          <p>Fax: +1-415-646-4151</p>
          <p>Support: support@hexnode.com</p>
          <p>Partnership: partners@hexnode.com</p>
        </Col>
        <Col span={12} md={12} lg={3}>
          <h3>COMPANY</h3>
          <p>About us</p>
          <p>Security</p>
          <p>GDPR Compliance</p>
          <p>Contact us</p>
    <p>Sitemap</p>
    <p>Blog</p>
    <p>News</p>
    <p>Events</p>
    <p>Careers</p>
    <p>Legal</p>
        </Col>
        <Col span={12} md={12} lg={4}>
          <h3>CONTACT US</h3>
          <p>Talk to Sales/Support</p>
          <p>Schedule a Demo</p>
          <p>Watch a Demo</p>
          <p>Get a Quote</p>
          <p>Raise a Ticket</p>
          <p>Hexnode partner programs</p>
          <p>Reseller Partnership</p>
          <p>OEM Partnership</p>
          <p>Distribution Program</p>
          <p>ISV Partnership</p>
          <p>MSP Partnership</p>
        </Col>
        <Col span={12} md={12} lg={4}>
          <img
            src={hexnodeimg}
            width={"100%"}
            style={{ paddingTop: "25px" }}
            alt=""
          />
          <p>Our team of industry experts will <br/> be at the Schools and <br/> Academies Show this November <br/> 20th! Come meet us at Booth <br/> A21 to have a chat</p>
          <a>MEET THE TEAM</a>
        </Col>
      </CustomRow>
    </FooterHead>
  );
};

export default LoginPageFooter;
