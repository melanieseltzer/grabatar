import React, { Component } from 'react';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

fontawesome.library.add(faGithub);

const Footer = styled.footer`
  background: transparent;
`;

const List = styled.ul`
  li {
    display: inline-block;
    list-style: none;
    margin-right: 2em;
  }
`;

class Nav extends Component {
  render() {
    return (
      <Footer className="footer">
        <div className="content has-text-centered">
          <List>
            <li>
              <a href="https://github.com/melanieseltzer/grabatar">
                <span className="icon">
                  <i className="fab fa-github" />
                </span>
                <span>Source</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/melanieseltzer">
                Made with &nbsp;
                <span role="img" aria-label="Heart">
                  ❤️
                </span>
              </a>
            </li>
          </List>
          <p>
            <a
              href="https://en.gravatar.com/support/what-is-gravatar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              What is a Gravatar?
            </a>
          </p>
        </div>
      </Footer>
    );
  }
}

export default Nav;
