import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { useRouter } from 'next/router'
import { useUser } from '../../utils/user';
import styles from './_header-nav.module.scss';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useUser();

  const router = useRouter();

  const toggle = () => setIsOpen(!isOpen);

  const onBrandClick = () => router.push('/');

  return (
    <div className={styles.containerBackground}>
      <Navbar className={classNames({
        'container': true,
      })} color="light" light expand="sm">
        <NavbarBrand onClick={onBrandClick}>techrally.me</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-half">
              <Link href="/about">
                <NavLink>
                  About
                </NavLink>
              </Link>
            </NavItem>
            <NavItem className="mr-half">
              <Link href="/blogs">
              <NavLink>Blogs</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.youtube.com/c/techrally"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                Youtube
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
