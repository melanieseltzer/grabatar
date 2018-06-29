import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarItem = styled.a`
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
                  <img
                    src="https://www.gravatar.com/avatar/6911773b6510cdabb2144fb3092b720d?s=30&f=y&d=retro"
                    alt="Grabatar"
                  />
                  Grabatar
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
