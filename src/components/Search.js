import React, { Component } from 'react';
import Form from './Form';

class Search extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h2 className="subtitle is-3">
              Grab your <abbr title="Globally Recognized Avatar">Gravatar</abbr>
              &nbsp;
              <span role="img" aria-label="Mag">
                🔍
              </span>
            </h2>
            <div className="box">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
