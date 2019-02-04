import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', tye: 'salad' },
  { label: 'Bacon', tye: 'bacon' },
  { label: 'Cheese', tye: 'cheese' },
  { label: 'Meat', tye: 'meat' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default buildControls;
