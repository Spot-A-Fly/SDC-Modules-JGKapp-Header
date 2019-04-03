import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from '../client/App.jsx';

afterEach(cleanup);

test('App buttons should render', () => {
  expect.assertions(5);
  const wrapper = render(<App />);
  
  expect(wrapper.getByText('play').tagName).toBe('BUTTON');
  expect(wrapper.getByText('save to your library').tagName).toBe('BUTTON');
  expect(wrapper.getByText('overview').tagName).toBe('BUTTON');
  expect(wrapper.getByText('related artists').tagName).toBe('BUTTON');
  expect(wrapper.getByText('about').tagName).toBe('BUTTON');
})
