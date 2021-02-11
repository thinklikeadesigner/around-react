import React from "react";

// old name attribute of the form tag = name="formEdit"

function PopupWithForm(props) {

    return (
      <div className={`modal modal_type_${props.name}`}>
        <div className="modal__container">
          <form
            action="#"
            className={`form form_${props.formname}`}
            name={props.name}
            novalidate
          >
            <h2 className="form__title">{props.title}</h2>
            <input
              id={`${props.id1}-input`}
              minlength="2"
              maxlength={props.maxlength1}
              name={props.inputname1}
              type={props.type1}
              className={`form__input form__input_type_${props.id1}`}
              placeholder={props.placeholder1}
              style={props.style1}
              value=""
              required
            />
            <span
              className="form__input-error"
              id={`${props.id1}-input-error`}
            ></span>
            <input
              id={`${props.id2}-input`}
              minlength="2"
              maxlength={props.maxlength2}
              type={props.type2}
              name={props.inputname2}
              className={`form__input form__input_type_${props.id2}`}
              placeholder={props.placeholder2}
              style={props.style2}
              value=""
              required
            />
            <span
              className="form__input-error"
              id={`${props.id2}-input-error`}
            ></span>
            <button
              type="submit"
              className={`form__button ${props.name}-submit`}
            >
              Save
            </button>
          </form>
          <button
            aria-label="Close Button"
            type="reset"
            className={`modal__close-button modal__close-button_${props.name}`}
          ></button>
        </div>
      </div>
    );
}

export default PopupWithForm;
