import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="/"><NavItem eventKey={1} href="/">Examples</NavItem></LinkContainer>
    <LinkContainer to="/Dates"><NavItem eventKey={2} href="/Dates">Dates</NavItem></LinkContainer>
    <LinkContainer to="/Trunk"><NavItem eventKey={3} href="/Trunk">Trunk</NavItem></LinkContainer>
    <LinkContainer to="/Branch"><NavItem eventKey={4} href="/Branch">Branch</NavItem></LinkContainer>
    {/*
    <LinkContainer to="/Lodash"><NavItem eventKey={5} href="/Lodash">Lodash</NavItem></LinkContainer>
    */}
    <NavItem eventKey={2} href="https://code.zeroasterisk.com/">Blog Post</NavItem>
  </Nav>
);

export default PublicNavigation;
