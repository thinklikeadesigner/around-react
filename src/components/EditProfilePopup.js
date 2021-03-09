import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [nameInput, setNameInput] = React.useState("");
  const [descriptionInput, setDescriptionInput] = React.useState("");

  // state containing the value of the input

  function handleChangeNameInput(e) {
    setNameInput(e.target.value);
  }
  function handleChangeDescriptionInput(e) {
    setDescriptionInput(e.target.value);
  }
  // Subscription to the context
  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser.name);

  // After loading the current user from the API
  // their data will be used in managed components.
  React.useEffect(() => {
    setNameInput(currentUser.name);
    setDescriptionInput(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    props.onUpdateUser({
      name: nameInput,
      about: descriptionInput,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
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
        value={nameInput}
        onChange={handleChangeNameInput}
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
        value={descriptionInput}
        onChange={handleChangeDescriptionInput}
      />
      <span className="form__input-error" id="job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
