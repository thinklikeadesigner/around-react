import React from "react";

// old name attribute of the form tag = name="formEdit"

function PopupWithForm(props) {
  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen ? "modal_open" : ""
      }`}
    >
      <div className="modal__container">
        <form
          action="#"
          className={`form form_${props.formname}`}
          name={props.name}
          noValidate
        >
          <h2 className="form__title">{props.title}</h2>
{props.children}
          <button type="submit" className={`form__button ${props.name}-submit`}>
            Save
          </button>
        </form>
        <button
          aria-label="Close Button"
          type="reset"
          className={`modal__close-button modal__close-button_${props.name}`}
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
