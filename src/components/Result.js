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
  renderGravatar({ url, rating }) {
    return (
      <div key={rating}>
        <img src={url} alt={rating} />
        <p>{rating}</p>
      </div>
    );
  }

  render() {
    const hash = this.props.match.params.hash;
    const baseURL = `https://www.gravatar.com/avatar/${hash}?s=200&r=`;

    const gravatars = [
      {
        url: `${baseURL}g`,
        rating: 'G',
      },
      {
        url: `${baseURL}pg`,
        rating: 'PG',
      },
      {
        url: `${baseURL}r`,
        rating: 'R',
      },
      {
        url: `${baseURL}x`,
        rating: 'X',
      },
    ];

    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <Box className="box">
              <Container>
                {gravatars.map(gravatar => this.renderGravatar(gravatar))}
              </Container>
              <Copy
                data-clipboard-text={`https://s.gravatar.com/avatar/${hash}`}
              >
                Copy
              </Copy>
              <code id="copy">https://s.gravatar.com/avatar/{hash}</code>
            </Box>
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
