import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../common/ui/Card';
import classes from './ContactItem.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - Each contact item component.
 */
export default function ContactItem(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  /**
   * This function is used to navigate to the delete contacts page.
   */
  function deleteHandler() {
    navigate(`/delete-contacts/${props.id}`, { replace: true });
  }

  /**
   * This function is used to navigate to the edit contacts page along with the payload.
   */
  function editHandler() {
    navigate(`/edit-contacts/${props.id}`, {
      replace: true,
      state: {
        name: props.name,
        mobileNumber: props.mobileNumber,
        workNumber: props.workNumber,
        homeNumber: props.homeNumber,
        address: props.address,
        email: props.email,
      },
    });
  }

  /**
   * This function is used to dispatch the action to add the contact to the favorites.
   */
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

  /**
   *
   * @param {Number} id - The id of the contact.
   * @returns {Boolean} - Returns true if the contact is in the favorites.
   */
  function isFavorite(id) {
    return favorites.some((favorite) => favorite._id === id);
  }

  /**
   * This function is used to dispatch the action to remove the contact from the favorites.
   */
  function removeFavoriteHandler() {
    dispatch({
      type: 'REMOVE_FAVORITE',
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
          <address>
            <b>Address:</b> {props.address}
          </address>
          <p>
            <b>Mobile Number:</b>{' '}
            {props.mobileNumber ? props.mobileNumber : 'N/A'}
          </p>
          <p>
            <b>Work Number:</b> {props.workNumber ? props.workNumber : 'N/A'}
          </p>
          <p>
            <b>Home Number:</b> {props.homeNumber ? props.homeNumber : 'N/A'}
          </p>
          <p>
            <b>Email:</b> {props.email}
          </p>
        </div>
        <div className={classes.actions}>
          {/* if a contact is in the favorites, then it will show the remove favorite button and vice versa. */}
          {isFavorite(props.id) ? (
            <button onClick={removeFavoriteHandler}>Unfavorite</button>
          ) : (
            <button onClick={addFavoriteHandler}>Favorite</button>
          )}
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}
