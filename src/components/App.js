import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import { api } from "../utils/api";

function App() {
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
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(false);
    setIsImagePopupOpen(false);
  }

  React.useEffect(() => {
    let mounted = true;
    api.getUserInfo()
      .then((res) => {
        if(mounted) {
          setCurrentUser(res);
        }
      })
    return () => mounted = false;
  }, [])


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
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="edit"
          formname="formEdit"
          title="Edit Profile"
        >
          <input
            id="name-input"
            minLength="2"
            maxLength="40"
            name="name"
            type="text"
            className="form__input form__input_type_name"
            placeholder="Name"
            required
          />
          <span className="form__input-error" id="name-input-error"></span>
          <input
            id="job-input"
            minLength="2"
            maxLength="200"
            type="text"
            name="about"
            className="form__input form__input_type_job"
            placeholder="About Me"
            required
          />
          <span className="form__input-error" id="job-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="add"
          formname="formAdd"
          title="New Place"
        >
          <input
            id="title-input"
            minLength="2"
            maxLength="30"
            name="name"
            type="text"
            className="form__input form__input_type_title"
            placeholder="Title"
            required
          />
          <span className="form__input-error" id="title-input-error"></span>
          <input
            id="url-input"
            type="url"
            name="link"
            className="form__input form__input_type_url"
            placeholder="Image URL"
            required
          />
          <span className="form__input-error" id="url-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          formname="formAvatar"
          title="Avatar"
        >
          <input
            id="avatar-input"
            type="url"
            name="avatar"
            className="form__input form__input_type_url form__input_type_avatar"
            placeholder="Image URL"
            required
          />

          <span className="form__input-error" id="avatar-input-error"></span>
        </PopupWithForm>

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
