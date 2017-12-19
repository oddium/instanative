import React from 'react';
import renderer from 'react-test-renderer';

import CommonHeader from '../CommonHeader';

it('renders a CommonHeader using Snapshots', () => {
  
  const _getComponent = (props) => {
    return (
      renderer.create(
        <CommonHeader/>
      )
    )
  };
  
  let component = _getComponent();
  expect(component).toMatchSnapshot();
});