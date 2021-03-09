import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
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
    console.log(isEditAvatarPopupOpen);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about}).then((res) => setCurrentUser(res));
    closeAllPopups();
  }

  function handleUpdateAvatar({avatar}) {
    api.setUserAvatar({avatar}).then((res) => {
        setCurrentUser(res);
        console.log('handleeditavatar')
      
    }).catch((err) => {
                console.log(err);});
  }

  function closeAllPopups({name, about}) {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(false);
    setIsImagePopupOpen(false);
    api.getUserInfo({name, about}).then((res) => setCurrentUser(res));
  }

  React.useEffect(() => {
    let mounted = true;
    api.getUserInfo()
      .then((res) => {
        if(mounted) {
          setCurrentUser(res);
        }
      }).catch((err) => {
                  console.log(err);});
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
       <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} onUpdateAvatar={handleUpdateAvatar}/> 
       <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 

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
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
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
