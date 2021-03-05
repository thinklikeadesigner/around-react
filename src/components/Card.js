import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  // Checking if you are the owner of the current card
const isOwn = props.card.owner._id === currentUser._id;

// Creating a variable which you'll then set in `className` for the delete button
const cardDeleteButtonClassName = (
  `card__delete-btn ${isOwn ? 'card_show-delete-btn card_show-delete-btn' : 'card__delete-btn'}`
); 

  return (
    <li className={`card `}>
      <div
        style={{ backgroundImage: `url(${props.card.link})` }}
        className="card__pic"
        onClick={handleClick}
      ></div>
      <button aria-label="Delete Button" className={` ${cardDeleteButtonClassName}`}></button>
      <div className="card__text">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes_container">
          <button aria-label="Like Button" className="card__heart"></button>
          <p className="card__likes_count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
