import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../../../components/common';

/**
 * Test suite
 */
describe('Card:', () => {
  /**
   * Test case
   */
  test('should render the same', () => {
    //prepare
    const children = <div>Test children</div>;
    //act
    const tree = renderer.create(
      <Card chart={<div>Chart</div>} className={null} plain={null} profile={null}>
        {children}
      </Card>,
    );
    //assert
    expect(tree.toJSON()).toMatchInlineSnapshot(`
      <div
        className="MuiGrid-root makeStyles-card-1 makeStyles-cardChart-4 null"
      >
        <div>
          Test children
        </div>
      </div>
    `);
  });
});
