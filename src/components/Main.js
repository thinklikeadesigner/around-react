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

  // React.useEffect(() => {
  //   api.getCardList().then((res) => {
  //     setCards(res);
  //   }).catch((err) => {
  //     console.log(err);
  // }, []);});

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
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
