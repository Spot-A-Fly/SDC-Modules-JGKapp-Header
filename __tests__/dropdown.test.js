import React from 'react';
import { render, cleanup, fireEvent, queryByText } from 'react-testing-library';
import Dropdown from '../client/components/Dropdown.jsx';
import { exportAllDeclaration } from '@babel/types';

afterEach(cleanup);

test('<Dropdown /> button will render', () => {
  expect.assertions(1);
  const wrapper = render(<Dropdown />);

  expect(wrapper.getByTestId('ellipsis-btn').tagName).toBe('DIV');
})

test('Dropdown menu renders menu items after click', () => {
  expect.assertions(5);
  const wrapper = render(<Dropdown />);

  expect(wrapper.queryByText('start radio')).toBeFalsy();
  fireEvent.click(wrapper.getByTestId('ellipsis-btn'));
  expect(wrapper.getByText('start radio').tagName).toBe('LI');
  expect(wrapper.getByText('save to your library').tagName).toBe('LI');
  expect(wrapper.getByText('copy artist link').tagName).toBe('LI');
  fireEvent.click(wrapper.getByTestId('ellipsis-btn'));
  expect(wrapper.queryByText('start radio')).toBeFalsy();

})