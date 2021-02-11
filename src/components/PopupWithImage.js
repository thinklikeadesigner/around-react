import React from "react";

// old name attribute of the form tag = name="formEdit"

class PopupWithImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="modal modal_type_pic">
          <div className="modal__container">
            <button
              aria-label="Close Button "
              type="button"
              className="modal__close-button modal__close-button_pic"
            ></button>
            <figure className="modal__figure">
              <img
                src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
                alt="image loading"
                className="modal__img"
              />
              <figcaption className="modal__caption"></figcaption>
            </figure>
          </div>
        </div>
    );
  }
}

export default PopupWithImage;
