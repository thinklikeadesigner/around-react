
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import Main from "./Main";

function EditAvatarPopup(props) {

const avatarRef = React.useRef(); // assigning the object returned by a hook to a variable
      

function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

    return (


<PopupWithForm
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
            ref={avatarRef}
          />

          <span className="form__input-error" id="avatar-input-error"></span>
        </PopupWithForm>


);
}

export default EditAvatarPopup;