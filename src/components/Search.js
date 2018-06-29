import React, { Component } from 'react';
import md5 from 'md5';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      email: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    // this.props.push(``);
  }

  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h2 className="subtitle is-3">Easily find your Gravatar</h2>
            <div className="box">
              <form onSubmit={this.handleSubmit} className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                    className="input"
                    placeholder="Enter your email"
                  />
                </p>
                <p className="control">
                  <input
                    type="submit"
                    className="button is-primary"
                    value="Find"
                  />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
