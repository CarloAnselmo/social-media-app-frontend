import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Button,
} from "reactstrap";
import LoginComp from "../login/LoginComp";
import "../mochi/mochiVectorLogo.svg";

interface IProps{

}

const MainNavbar: React.FC = (props:IProps) => {
  return (
      <Navbar color="dark" dark expand="md" 
      style={{ width: "100%", margin:0, zIndex: 2, 
      position:"sticky", top:0,left:0,right:0, padding: 10}}
      className='nav justify-content-center'>
        <span><Button href="/" style={{ margin: 5 }} ><img src={"../mochi/mochiVectorLogo.svg"} alt="MC"/></Button></span>
        <span><Button href="/profile" style={{ margin: 5 }}><img src="" alt="Pic" className="shrunk-img"/>  
        's Profile</Button></span>       
          <NavItem style={{ margin: 5 }}>
            <span className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" 
                style={{ margin: 5 }}></input>
                <button type="submit" className="fa fa-search"
                style={{ margin: 5 }}>search</button>
                </form>
            </span>
          </NavItem>
          <NavItem>
            <NavLink href="/register">
              <Button style={{ margin: 5 }}>
              Register
              </Button>
            </NavLink>  
          </NavItem>
          <NavItem>
             <LoginComp />
          </NavItem>
      </Navbar>
  );
};

export default MainNavbar;
