import React from "react";

// old name attribute of the form tag = name="formEdit"

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`modal modal_type_${this.props.name}`}>
        <div className="modal__container">
          <form
            action="#"
            className={`form form_${this.props.formname}`}
            name={this.props.name}
            novalidate
          >
            <h2 className="form__title">{this.props.title}</h2>
            <input
              id={`${this.props.id1}-input`}
              minlength="2"
              maxlength={this.props.maxlength1}
              name={this.props.inputname1}
              type={this.props.type1}
              className={`form__input form__input_type_${this.props.id1}`}
              placeholder={this.props.placeholder1}
              style={this.props.style1}
              value=""
              required
            />
            <span
              className="form__input-error"
              id={`${this.props.id1}-input-error`}
            ></span>
            <input
              id={`${this.props.id2}-input`}
              minlength="2"
              maxlength={this.props.maxlength2}
              type={this.props.type2}
              name={this.props.inputname2}
              className={`form__input form__input_type_${this.props.id2}`}
              placeholder={this.props.placeholder2}
              style={this.props.style2}
              value=""
              required
            />
            <span
              className="form__input-error"
              id={`${this.props.id2}-input-error`}
            ></span>
            <button
              type="submit"
              className={`form__button ${this.props.name}-submit`}
            >
              Save
            </button>
          </form>
          <button
            aria-label="Close Button"
            type="reset"
            className={`modal__close-button modal__close-button_${this.props.name}`}
          ></button>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;
