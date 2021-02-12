import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

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

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
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
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onDeleteCard={handleDeleteCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="edit"
          formname="formEdit"
          title="Edit Profile"
          id1="name"
          maxength1="40"
          inputname1="name"
          type1="text"
          placeholder1="Name"
          id2="job"
          maxLength2="200"
          type2="text"
          inputname2="about"
          placeholder2="About"
        ></PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="add"
          formname="formAdd"
          title="New Place"
          id1="title-input"
          maxLength1="30"
          inputname1="name"
          type1="text"
          placeholder1="Title"
          id2="url-input"
          inputname2="link"
          type2="url"
          placeholder2="Image URL"
        />

        <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          formname="formAvatar"
          title="Avatar"
          id1="avatar-input"
          type1="url"
          inputname1="avatar"
          placeholder1="Image URL"
          style2={{ display: "none" }}
        />

        <PopupWithForm
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          name="delete"
          title="Are you sure?"
          style1={{ display: "none" }}
          style2={{ display: "none" }}
        />
      </div>
      <template id="card__template">
        <li className="card">
          <img
            src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
            // alt="image loading"
            className="card__pic"
          />
          <button
            aria-label="Delete Button"
            className="card__delete-btn"
          ></button>
          <div className="card__text">
            <h2 className="card__title"></h2>
            <div className="card__likes_container">
              <button aria-label="Like Button" className="card__heart"></button>
              <p className="card__likes_count">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
