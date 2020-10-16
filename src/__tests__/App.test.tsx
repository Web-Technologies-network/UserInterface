import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Dashboard } from '../../src/components/Dashboard/Dashboard';
import { create, act } from 'react-test-renderer';

describe('Dashboard render and navigation test suite', () => {
  test('renders correctly', () => {
    // prepare
    const inMemHistory = createMemoryHistory();
    // act
    const { findByText } = render(
      <Router history={inMemHistory}>
        <Dashboard />
      </Router>,
    );
    expect(findByText(/Dashboard/));
    expect(findByText(/User Profile/));
  });
  // test('render the same', () => {});
  //  // prepare
  //  const inMemHistory = createMemoryHistory();
  // // act
  //  act(() => {
  //   const tree = create(<Router history={inMemHistory}>
  //    <Dashboard />
  //   </Router>)
  //  });
  //
  //  //  // expect(tree.toJSON()).toMatchSnapshot();
});
