import React from 'react';

import Card from '../common/ui/Card';
import classes from './ContactItem.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactItem(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  function deleteHandler() {
    navigate(`/delete-contacts/${props.id}`, { replace: true });
  }

  function editHandler() {
    navigate(`/edit-contacts/${props.id}`, {
      replace: true,
    });
  }

  function addFavoriteHandler() {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        _id: props.id,
        name: props.name,
        photo: props.photo,
        phone: {
          mobileNumber: props.mobileNumber,
          workNumber: props.workNumber,
          homeNumber: props.homeNumber,
        },
        address: props.address,
        email: props.email,
      },
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <img src={props.photo} alt="Contacts" />
          <address>{props.address}</address>
          <p>{props.mobileNumber ? props.mobileNumber : 'Not Availabe'}</p>
          <p>{props.workNumber ? props.workNumber : 'Not Availabe'}</p>
          <p>{props.homeNumber ? props.homeNumber : 'Not Availabe'}</p>
          <p>{props.email}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={addFavoriteHandler}>Favorite</button>
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}
