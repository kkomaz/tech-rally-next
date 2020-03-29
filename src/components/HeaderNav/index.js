import React, { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive'
import {
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
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.containerBackground}>
      <Navbar className={isDesktop ? 'container' : ''} color="light" light expand="md">
        <Link href="/">
          <NavbarBrand>techrally.me</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-one">
              <Link href="/products">
              <NavLink>Products</NavLink>
              </Link>
            </NavItem>
            <NavItem className="mr-one">
              <Link href="/items">
              <NavLink>Items</NavLink>
              </Link>
            </NavItem>
            <NavItem className="mr-one">
              <Link href="/products">
              <NavLink>Courses</NavLink>
              </Link>
            </NavItem>
            <NavItem className="mr-one">
              <Link href="/products">
              <NavLink>Blog</NavLink>
              </Link>
            </NavItem>
            <NavItem className="mr-one">
              <Link href="/sign-in">
              <NavLink>Sign In</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
