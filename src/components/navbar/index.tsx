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
  /* position: absolute; */
  right: 0px;
  width: fit-content;
  padding-left: 200px;
  padding-right: 100px;
  height: 100px;
  font-size: 1.5rem;
  background-color: darkblue;
  color: white;
  z-index: 0;
`;

const MySpan = styled.span`
  margin: 0 10px;
  padding: 38px 0;
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

const Navbar = () => {
  return (
    <BigWrapper>
      <img style={{ marginLeft: "50px" }} src={logo} alt="logo" />
      <MyLine />
      <NavbarWrapper>
        <div className="title">
          <MySpan className="numbers">00</MySpan>
          <MySpan>HOME</MySpan>
        </div>
        <div className="title">
          <MySpan className="numbers">01</MySpan>
          <MySpan>DESTINATION</MySpan>
        </div>
        <div className="title">
          <MySpan className="numbers">02</MySpan>
          <MySpan>CREW</MySpan>
        </div>
        <div className="title">
          <MySpan className="numbers">03</MySpan>
          <MySpan>TECHNOLOGY</MySpan>
        </div>
      </NavbarWrapper>
    </BigWrapper>
  );
};

export default Navbar;
