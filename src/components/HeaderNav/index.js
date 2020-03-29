import React, { useState } from 'react';
import Link from 'next/link';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styles from './_header-nav.module.scss';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.containerBackground}>
      <Navbar className="container" color="light" light expand="md">
        <Link href="/">
          <NavbarBrand>techrally.me</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-one">
              <Link href="/sign-in">
              <NavLink>Sign In</NavLink>
              </Link>
            </NavItem>
            <NavItem className="mr-one">
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <Button color="primary">Login</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
