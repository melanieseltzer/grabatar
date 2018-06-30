import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Clipboard from 'react-clipboard.js';

const Copy = styled(Clipboard)`
  float: right;
`;

const Box = styled.div`
  code {
    height: 100px;
    word-break: break-all;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  > div {
    font-weight: bold;
    padding: 10px;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

class Result extends Component {
  renderHelper() {
    const hash = this.props.match.params.hash;

    return (
      <Box className="box">
        <Container>
          <div>
            <img
              src={`https://www.gravatar.com/avatar/${hash}?s=200&r=g`}
              alt="Gravatar"
            />
            <p>G</p>
          </div>
          <div>
            <img
              src={`https://www.gravatar.com/avatar/${hash}?s=200&r=pg`}
              alt="Gravatar"
            />
            <p>PG</p>
          </div>
          <div>
            <img
              src={`https://www.gravatar.com/avatar/${hash}?s=200&r=r`}
              alt="Gravatar"
            />
            <p>R</p>
          </div>
          <div>
            <img
              src={`https://www.gravatar.com/avatar/${hash}?s=200&r=x`}
              alt="Gravatar"
            />
            <p>X</p>
          </div>
        </Container>
        <Copy data-clipboard-text={`https://s.gravatar.com/avatar/${hash}`}>
          Copy
        </Copy>
        <code id="copy">https://s.gravatar.com/avatar/{hash}</code>
      </Box>
    );
  }

  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            {this.renderHelper()}
            <h2 className="subtitle is-5">
              <Link to="/">
                Grab another &nbsp;
                <span role="img" aria-label="Mag">
                  🔍
                </span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
