import styled from "styled-components";
import logo from "../../assets/shared/logo.svg";

const BigWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0px;
  width: fit-content;
  padding-left: 200px;
  padding-right: 100px;
  height: 200px;
  font-size: 1.5rem;
  background-color: darkblue;
  color: white;
  z-index: 0;
`;

const MyNumberSpan = styled.span`
  font-weight: 800;
`;

const MySpan = styled.span`
  margin: 0 10px;
  padding: 70px 0;
`;

const MyLine = styled.div`
  position: sticky;
  width: 800px;
  height: 1px;
  background-color: white;
  margin-right: -150px;
  margin-left: 10px;
  z-index: 1;
`;

const TitleContainer = styled.div`
  cursor: pointer;
  margin-right: 50px;
  &:hover {
    padding: 82px 0;
    border-bottom: 3px solid white;
    margin-top: 3px;
  }
`;

export const Navbar = () => {
  return (
    <BigWrapper>
      <img style={{ marginLeft: "50px" }} src={logo} alt="logo" />
      <MyLine />
      <NavbarWrapper>
        <TitleContainer>
          <MyNumberSpan>00</MyNumberSpan>
          <MySpan>HOME</MySpan>
        </TitleContainer>
        <TitleContainer>
          <MyNumberSpan>01</MyNumberSpan>
          <MySpan>DESTINATION</MySpan>
        </TitleContainer>
        <TitleContainer>
          <MyNumberSpan>02</MyNumberSpan>
          <MySpan>CREW</MySpan>
        </TitleContainer>
        <TitleContainer>
          <MyNumberSpan>03</MyNumberSpan>
          <MySpan>TECHNOLOGY</MySpan>
        </TitleContainer>
      </NavbarWrapper>
    </BigWrapper>
  );
};
