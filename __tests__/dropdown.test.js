import React from 'react';
import { render, cleanup, fireEvent, queryByText } from 'react-testing-library';
import Dropdown from '../client/components/Dropdown.jsx';
import { exportAllDeclaration } from '@babel/types';

afterEach(cleanup);

test('Ellipsis button renders', () => {
  expect.assertions(1);
  const wrapper = render(<Dropdown />);

  expect(wrapper.getByTestId('ellipsis-btn').tagName).toBe('DIV');
})

test('Dropdown menu renders items only after click, disappear on document click', () => {
  expect.assertions(5);
  const wrapper = render(<Dropdown />);


  // start radio menu item not present before button click
  expect(wrapper.queryByText('Start Radio')).toBeFalsy();

  // all menu items present after click
  fireEvent.click(wrapper.getByTestId('ellipsis-btn'));
  expect(wrapper.getByText('Start Radio').tagName).toBe('LI');
  expect(wrapper.getByText('Save to Your Library').tagName).toBe('LI');
  expect(wrapper.getByText('Copy Artist Link').tagName).toBe('LI');

  // menu items disappear after outside click
  fireEvent.click(wrapper.getByTestId('ellipsis-btn'));
  expect(wrapper.queryByText('Start Radio')).toBeFalsy();
})