import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarItem = styled.a`
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: transparent !important;
    transform: scale(1.03);
  }
  > h1 img {
    margin-right: 10px;
  }
`;

class Nav extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <NavBarItem className="navbar-item" href="/">
                <h1 className="title">
                  <span role="img" aria-label="Space Invader">
                    👾
                  </span>
                  &nbsp; Grabatar
                </h1>
              </NavBarItem>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
