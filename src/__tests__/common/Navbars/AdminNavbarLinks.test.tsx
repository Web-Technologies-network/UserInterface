import React from 'react';
import AdminNavbarLinks from '../../../components/Dashboard/Navbars/AdminNavbarLinks';
import testRenderer from 'react-test-renderer';

describe('AdminNavbarLinks', () => {
  let container: string | Node | null; // this will hold the main div where our test component is rendered
  // before each test hook aka init
  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });
  // tear down
  afterEach(() => {
    document.body.removeChild(container as Node);
    container = null;
  });
  it('should render the same', () => {
    const tree = testRenderer.create(<AdminNavbarLinks />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
