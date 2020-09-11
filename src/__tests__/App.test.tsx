import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Dashboard } from '../../src/components/Dashboard/Dashboard';
describe('Dashboard render and navigation test suite', () => {
  // @ts-ignore
  test('renders correctly', () => {
    // prepare
    const inMemHistory = createMemoryHistory();
    // act
    const { findByText } = render(
     <Router history={inMemHistory}>
      <Dashboard />
     </Router>
     );
    expect(findByText(/Dashboard/));
    expect(findByText(/User Profile/))
  });
});
