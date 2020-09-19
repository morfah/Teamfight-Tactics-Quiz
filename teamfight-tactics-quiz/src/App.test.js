import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render at least one B.F Sword', () => {
  const { getAllByAltText } = render(<App />);
  const htmlElement = getAllByAltText("B.F Sword");
  expect(htmlElement[0]).toBeInTheDocument();
});
