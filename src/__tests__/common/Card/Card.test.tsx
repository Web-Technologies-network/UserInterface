import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../../../components/common';

describe('Card Rendering:', () => {
  test('should render the same', () => {
    //act
    const tree = renderer.create(
      <Card chart={<div>Chart</div>} className={null} plain={null} profile={null}>
        <div>Test children</div>
      </Card>,
    );
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
