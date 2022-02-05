import React from 'react';

import Card from '../common/ui/Card';
import classes from './ContactItem.module.css';

export default function ContactItem(props) {
  function deleteHandler() {
    props.onDelete(props.id);
  }

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
          <button>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}
