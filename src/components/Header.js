import React from 'react';
import PropTypes from 'prop-types';
import {Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import styled from 'styled-components';

const NavTextLeft = styled.div`
  margin-left: 15%;
`;

const NavTextRight = styled.div`
  margin-left: 52%;
`;

const Header = props => {
  const {branding} = props;
  return (
    <div>
      <Navbar color="danger" light expand="sm">
        <NavTextLeft>
          <NavbarBrand tag="h1" href="/">
            {branding}
          </NavbarBrand>
        </NavTextLeft>
        <NavTextRight>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag="h6" href="/components/">
                  Home
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </NavTextRight>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
