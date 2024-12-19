import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../Components/Form/CustomButton";
import hexnode from "../../assets/Images/loginimages/hexnode.svg";
import homelogohexnode from "../../assets/Images/loginimages/homelogohexnode.png";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Drawer, Flex } from "antd"; // Importing Ant Design Drawer
import { useNavigate } from "react-router-dom";
import { Iconplace, NavHead } from "./Styles";


const Navbar = () => {

  const navigate = useNavigate()

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For Icon toggle
  const [drawerVisible, setDrawerVisible] = useState(false); // For Drawer visibility

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 15) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Drawer Toggle
  const toggleDrawer = () => {
    setDrawerVisible((prev) => !prev);
  };

  const movetologinPage = () => {
    navigate('/loginpage')
  }

  const movetoHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <NavHead scrolled={scrolled}>
        <div
          style={{
            width: "85%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="/">

          {!scrolled && (
            <img src={homelogohexnode} width={"140px"} alt="" className="hexnode-image" />
          )}
          {scrolled && (
            <img src={hexnode} width={"100px"} alt="" className="hexnode-image" />
          )}
          </a>
         

          <Button.Danger text={"14 DAYS FREE TRIAL"} onClick={movetologinPage}  />
          <Iconplace
            onClick={() => {
              setIsOpen((prev) => !prev);
              toggleDrawer(); // Open Drawer on Icon click
            }}
          >
            {isOpen ? <MdOutlineMenu /> : <MdOutlineMenu />}
          </Iconplace>
        </div>
      </NavHead>

      {/* Ant Design Drawer */}
      <Drawer
        // title="Menu"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        <Flex>
        <p>
        <Button.Danger text={"14 DAYS FREE TRIAL"} onClick={movetologinPage}  />
       </p>
        <p>
          <Button.Danger text="LOGIN" onClick={movetologinPage} />
        </p>
        </Flex>
   
      </Drawer>
    </>
  );
};

export default Navbar;
