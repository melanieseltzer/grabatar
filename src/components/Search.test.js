import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <Search />
    </MemoryRouter>,
  );
});
