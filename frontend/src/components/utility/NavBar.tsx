import styled from "styled-components";
import {MenuList} from "../../typings";
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid #f9f9f6;
  box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.1), 0 2px 3px -2px rgba(0, 0, 0, 0.05);
`;

const StyledLogo = styled.div`
  display: flex;
  width: 150px;
  padding: 5px;
  height: 90px;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
  }
`;

const StyledMenuList = styled.ul`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  align-items: center;
`;

const StyledMenuListItem = styled.li`
  padding: 10px 0;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

const NavBar = () => {
  const menuList: MenuList[] = [
    {
      name: 'Care Recipients',
      path: '/'
    }
  ];
  const logoUrl = "https://assets.website-files.com/5d80c03f1edd7bd68fcdb623/6095ef73185566645ff6812f_5d80c151ddf52828d3cff080_Birdie%20-%20Logo%20-%20Blue%20%2B%20Green.svg"
  return (
    <StyledNav data-testid="nav-bar">
      <StyledLogo>
        <Link to="/"><img src={logoUrl} alt="logo"/></Link>
      </StyledLogo>
      <StyledMenuList>
        {menuList.map((menu, index) => {
          return (
            <StyledMenuListItem key={index}>
              <Link to={menu.path}>{menu.name}</Link>
            </StyledMenuListItem>
          )
        })}
      </StyledMenuList>
    </StyledNav>
  );
};

export default NavBar;
