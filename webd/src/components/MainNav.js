import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import scrollToElement from 'scroll-to-element';
import styled from 'styled-components';

const BrandImg = styled.img`
  width: auto;
  height: 48px;
`;

const CustomNav = styled(Nav)`
  margin-left: auto;

  &:hover {
    @media screen and (max-width: 991px) {
      background-color: #d4d2d9;
    }
  }
`;

const StyledButton = styled(Button)`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  padding: 7.5px 30px;
  background-color: #f26b32;
  border: solid 2px #f26b32;
  border-radius: 4px;
  transition: transform 0.5s ease;

  &:hover,
  &:focus {
    background-color: #ce470d;
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px #00000029;
    border: solid 2px #ce470d;
  }

  &.active,
  &:active {
    color: #ce470d !important;
    background-color: white !important;
    border: solid 2px #ce470d !important;
    box-shadow: 0px 3px 6px #00000029 !important;
  }
`;

const CustomNavbar = styled(Navbar)`
  padding: 0 0;
`;

function NavTypeA({ menu }) {
  const [open, setOpen] = useState(false);

  const jumpLinkOnClickHandler = (id) => {
    setOpen(false);
    // scrollToElement(id);
    scrollToElement(id, {
      duration: 1000,
    });
  };

  const homeHandler = () => {
    setOpen(false);
  };

  const navBrand = menu.filter((x) => x._type === 'navBrand')[0];
  const navMenu = menu.filter((x) => x._type !== 'navBrand');

  return (
    <Container>
      <CustomNavbar collapseOnSelect expand="xs" className="text-center">
        <Navbar.Brand className="my-3">
          <Link to="/" onClick={() => homeHandler()}>
            <BrandImg
              loading="eager"
              alt={navBrand.brand.title}
              src={navBrand.brand.logo.asset.url}
              className="d-inline-block"
            />
          </Link>
        </Navbar.Brand>
        {navMenu.map((item) => {
          switch (item._type) {
            case 'navJumpLink':
              return (
                <CustomNav key={item.link}>
                  <a href={`#${item.link}`} onClick={() => jumpLinkOnClickHandler(`#${item.link}`)}>
                    {item.isButton ? <StyledButton>{item.title}</StyledButton> : item.title}
                  </a>
                </CustomNav>
              );
            default:
              return <div>Menu item</div>;
          }
        })}
      </CustomNavbar>
    </Container>
  );
}

export default NavTypeA;
