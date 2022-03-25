import React, { Component } from "react";
import Link from "next/link";

import { DiReact } from "react-icons/di";
import { GiLightBulb } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <Navbar dark sticky="top" expand="xl">
        <Container>
          <Div1>
            <Link href="/">
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "whitesmoke",
                  marginBottom: "10px",
                }}
              >
                <DiReact size="4rem" /> <Span> Portfolio</Span>
              </a>
            </Link>
          </Div1>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <Div2>
                <li>
                  <Link href="#tech">
                    <NavLink>Tech </NavLink>
                  </Link>
                </li>
                <li>
                  <Link href="#projects">
                    <NavLink> Projects </NavLink>
                  </Link>
                </li>
                <li>
                  <Link href="#timeline">
                    <NavLink> About</NavLink>
                  </Link>
                </li>
                <li>
                  <Link href="#lightmode">
                    <NavLink>
                      <GoLightBulb size="2rem" href="#/" />
                    </NavLink>
                  </Link>
                </li>
              </Div2>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
