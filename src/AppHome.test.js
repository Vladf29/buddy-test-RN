import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import AppHome from './AppHome';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Search component', () => {
  it('renders', () => {
    const wrapper = shallow(<AppHome />);

    expect(wrapper.exists()).toBe(true);
  });
});
