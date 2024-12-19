import React from "react"
import { Button as AntdButton, Flex } from 'antd'
import { THEME } from "../../Modules/theme"
import styled,{css} from "styled-components"

const dangerButtonStyles = css`
  /* color:#f5222d; */
  color:${THEME.white};
  border-color:${THEME.danger_2};
  background: ${THEME.danger_2};
  &:hover {
    color:#fff;
    background-color: ${THEME.danger_2};
    border-color: ${THEME.danger_2};
  }
  &:focus {
    box-shadow:0 0 0 .2rem rgba(220,53,69,.5)
  }
`

const loginButtonStyles = css`
  /* color:#f5222d; */
  color:${THEME.white};
  border-color:${THEME.danger_2};
  background: ${THEME.danger_2};
  &:hover {
    color:#fff;
    background-color: ${THEME.danger_2};
    border-color: ${THEME.danger_2};
  }
  &:focus {
    box-shadow:0 0 0 .2rem rgba(220,53,69,.5)
  }
`

const LoginButtonStyle = styled(AntdButton)`
  color: ${props => (props.type === 'secondary' ? THEME.PRIMARY : '#FFFFFF')};
  border-width:1px;
  display: flex;
  height: ${props => (props.height ? props.height : '48px')};
  align-items: center;
  justify-content: space-between;
  /* border-radius: 8px; */
  border-radius: 4px;
  font-size:14px;
  letter-spacing:1px;
  justify-content: center;
  text-transform:capitalize;
  /* font-weight:600; */
  padding: 0px 60px !important;
  margin: 0px 15px 8px 0px !important;
  font-weight:400;
  cursor: ${props => props?.disableCursor && 'not-allowed'};
  pointer-events: ${props => (props?.disable ? 'none' : 'auto')};
  ${props => props.type === 'danger' && dangerButtonStyles};
  ${props => props.type === 'loginbtn' && loginButtonStyles};

  transition: 0.5s;
`


const PlainButton = styled(AntdButton)`
  color: ${props => (props.type === 'secondary' ? THEME.PRIMARY : '#FFFFFF')};
  border-width:1px;
  display: flex;
  height: ${props => (props.height ? props.height : '48px')};
  align-items: center;
  justify-content: space-between;
  /* border-radius: 8px; */
  border-radius: 4px;
  font-size:14px;
  letter-spacing:1px;
  justify-content: center;
  text-transform:capitalize;
  /* font-weight:600; */
  padding: 0px 15px !important;
  margin: 0px 15px 8px 0px !important;
  font-weight:400;
  cursor: ${props => props?.disableCursor && 'not-allowed'};
  pointer-events: ${props => (props?.disable ? 'none' : 'auto')};
  ${props => props.type === 'danger' && dangerButtonStyles};
  ${props => props.type === 'loginbtn' && loginButtonStyles};

  transition: 0.5s;
`

const TextContainer = styled.div`
    /* margin-left: ${props => (props.icon ? '7px' : '')}; */
    display: flex;
`


const Button = props => <AntdButton {...props} />


const Danger = ({ text, icon, ...props }) => (
    <PlainButton {...props} type="danger">
        <Flex style={{alignItems:'center'}} >
            {icon}
            <TextContainer icon={icon ? "true" : "false"}>{text}</TextContainer>
        </Flex>
    </PlainButton>
)

const LoginButton = ({ text, icon, ...props }) => (
  <LoginButtonStyle {...props} type="loginbtn">
      <Flex style={{alignItems:'center'}} >
          {icon}
          <TextContainer icon={icon ? "true" : "false"}>{text}</TextContainer>
      </Flex>
  </LoginButtonStyle>
)



Button.Danger = Danger
Button.LoginButton = LoginButton


export default Button

