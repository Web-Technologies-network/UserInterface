import React from 'react';
import { Warning } from '../../../components/common';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import testRenderer from 'react-test-renderer';

describe('Warning', () => {
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
    const tree = testRenderer.create(
      <Warning>
        <div>test children</div>
      </Warning>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
