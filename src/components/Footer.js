import React, { Component } from 'react';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

fontawesome.library.add(faGithub);

const Footer = styled.footer`
  background: transparent;
`;

class Nav extends Component {
  render() {
    return (
      <Footer className="footer">
        <div className="content has-text-centered">
          <p>
            <a href="https://github.com/melanieseltzer">
              Made with &nbsp;
              <span role="img" aria-label="Heart">
                ❤️
              </span>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/melanieseltzer/grabatar"
              className="button is-outlined"
            >
              <span className="icon">
                <i className="fab fa-github" />
              </span>
              <span>Source</span>
            </a>
          </p>
        </div>
      </Footer>
    );
  }
}

export default Nav;
