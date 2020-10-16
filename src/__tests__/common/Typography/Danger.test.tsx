import React from 'react';
import { Danger } from '../../../components/common';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import testRenderer from 'react-test-renderer';

describe('Danger', () => {
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
  it('should render children', function () {
    act(() => {
      ReactDOM.render(
        <Danger>
          <div>children</div>
        </Danger>,
        container,
      );
      const grid = container.querySelector('div');
      expect(grid.textContent).toBe('children');
    });
  });
  it('should render the same', () => {
    const tree = testRenderer.create(
      <Danger>
        <div>test children</div>
      </Danger>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
