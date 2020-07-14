import React from 'react';
import { render } from '@testing-library/react';
import TechNetwork from '../applications/TechNetwork';

test('renders learn react link', () => {
  const { getByText } = render(<TechNetwork />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
