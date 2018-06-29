import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';
import Result from './Result';
import Footer from './Footer';

const Hero = styled.section`
  background: linear-gradient(to right, #ff9966, #ff5e62);
`;

class App extends Component {
  render() {
    return (
      <div>
        <Hero className="hero is-primary is-fullheight">
          <Nav />
          <Route path="/" exact component={Search} />
          <Route path="/:hash" component={Result} />
          <Footer />
        </Hero>
      </div>
    );
  }
}

export default App;
