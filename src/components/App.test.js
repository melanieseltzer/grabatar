import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});
