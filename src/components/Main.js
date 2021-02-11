import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  //   modalAvatar = document.querySelector(".modal_type_avatar");
  //  modalAdd = document.querySelector(".modal_type_add")
  //  modalEdit = document.querySelector(".modal_type_edit")

  handleEditAvatarClick() {
    document.querySelector(".modal_type_avatar").classList.add("modal_open");
  }
  handleEditProfileClick() {
    document.querySelector(".modal_type_edit").classList.add("modal_open");
  }
  handleAddPlaceClick() {
    document.querySelector(".modal_type_add").classList.add("modal_open");
  }

  render() {
    return (
      <main className="container">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__info">
              <div
                className="profile__avatar-btn"
                onClick={this.handleEditAvatarClick}
              >
                <img src="#" alt="profile picture" className="profile__pic" />
              </div>
              <div className="profile__text">
                <h1 className="profile__name"></h1>
                <button
                  type="button"
                  aria-label="Profile Edit Button"
                  className="form_button profile__edit-btn"
                  onClick={this.handleEditProfileClick}
                ></button>
                <p className="profile__job"></p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Card Add Button"
              id="addButton"
              className="form_button profile__add-btn"
              onClick={this.handleAddPlaceClick}
            ></button>
          </div>
        </section>
        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
    );
  }
}

export default Main;
