import React from 'react';

import Card from '../common/ui/Card';

import classes from './ContactItem.module.css';

export default function ContactItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <address>{props.address}</address>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
        <div className={classes.actions}>
          <button>Favorite</button>
        </div>
      </Card>
    </li>
  );
}
