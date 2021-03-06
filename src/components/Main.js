import React from "react";
import { api } from "../utils/api";
import Card from "../components/Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({
  onCardClick,
  onAddPlace,
  onEditProfile,
  onEditAvatar,
}) {




  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
    let mounted = true;
    api.getCardList()
      .then((res) => {
        if(mounted) {
          setCards(res);
        }
      })
    return () => mounted = false;
  }, [])


  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.changeCardLikeStatus(card._id, !isLiked).then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Update the state
      setCards(newCards);
    });
} 


  return (
    <main className="container">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__info">
            <div className="profile__avatar-btn" onClick={onEditAvatar}>
              <div
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
                className="profile__pic"
              />
            </div>
            <div className="profile__text">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                aria-label="Profile Edit Button"
                className="form_button profile__edit-btn"
                onClick={onEditProfile}
              ></button>
              <p className="profile__job">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Card Add Button"
            id="addButton"
            className="form_button profile__add-btn"
            onClick={onAddPlace}
          ></button>
        </div>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card, i) => (
            <Card card={card} key={card._id} onCardLike={handleCardLike} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
