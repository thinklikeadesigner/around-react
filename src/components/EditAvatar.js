
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Main from "./Main";

function EditProfilePopup(props) {



//     const [nameInput, setNameInput] = React.useState("");
//     const [descriptionInput, setDescriptionInput] = React.useState(
//       ""
//     );

//   // state containing the value of the input

//     function handleChangeNameInput(e) {
//         setNameInput(e.target.value);
//       }
//     function handleChangeDescriptionInput(e) {
//         setDescriptionInput(e.target.value);
//       }
//         // Subscription to the context
// const currentUser = React.useContext(CurrentUserContext);
// console.log(currentUser.name);

// // After loading the current user from the API
// // their data will be used in managed components.
// React.useEffect(() => {
//   setNameInput(currentUser.name);
//   setDescriptionInput(currentUser.about);
// }, [currentUser]); 

// function handleSubmit(e) {
//     e.preventDefault();
  
//     // Pass the values of the managed components to the external handler
//     props.onUpdateUser({
//       name: nameInput,
//       about: descriptionInput,
//     });
//   } 

function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: /* The value of the input which we got using the ref */,
    });
  } 

    return (


<PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          formname="formAvatar"
          title="Avatar"
          onSubmit={handleSubmit}
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


);
}
