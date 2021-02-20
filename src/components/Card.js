import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div
        style={{ backgroundImage: `url(${props.card.link})` }}
        className="card__pic"
        onClick={handleClick}
      ></div>
      <button aria-label="Delete Button" className="card__delete-btn"></button>
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
