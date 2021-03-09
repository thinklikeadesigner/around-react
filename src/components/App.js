import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";

function App() {
  const [cards, setCards] = React.useState([]);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState([]);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    console.log(isEditAvatarPopupOpen);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about }).then((res) => setCurrentUser(res));
    closeAllPopups();
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserAvatar({ avatar })
      .then(() => closeAllPopups())
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(false);
    setIsImagePopupOpen(false);
    api.getUserInfo().then((res) => setCurrentUser(res));
  }


  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeCardLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const oldCards = [...cards];

        const filteredCards = oldCards.filter(
          (oldCard) => oldCard._id !== card._id
        );
        setCards(filteredCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleUpdateCard(card) {
    api
      .addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    let mounted = true;
    api
      .getUserInfo()
      .then((res) => {
        if (mounted) {
          setCurrentUser(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (mounted = false);
  }, []);

  React.useEffect(() => {
    let mounted = true;
    api
      .getCardList()
      .then((res) => {
        if (mounted) {
          setCards(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onDeleteCard={handleDeleteCardClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onUpdateCard={handleUpdateCard}
          />
          <PopupWithForm
            isOpen={isDeleteCardPopupOpen}
            onClose={closeAllPopups}
            name="delete"
            title="Are you sure?"
          />
          <PopupWithImage
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            figimage={selectedCard.link}
            figcaption={selectedCard.name}
          />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
