import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('contains header text', () => {
    expect(component.find('h1').text()).toEqual('Just Do It.');
  });
});