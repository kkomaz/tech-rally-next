import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import useResponsive from 'utils/responsive/useResponsive';
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
  const { isDesktop } = useResponsive();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.containerBackground}>
      <Navbar className={classNames({
        'container': isDesktop,
      })} color="light" light expand="md">
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
              <Link href="/blogs">
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
