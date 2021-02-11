import React from "react";

function Main(props) {

    return (
      <main className="container">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__info">
              <div
                className="profile__avatar-btn"
                onClick={props.onEditAvatar}
              >
                <img src="#" alt="profile picture" className="profile__pic" />
              </div>
              <div className="profile__text">
                <h1 className="profile__name"></h1>
                <button
                  type="button"
                  aria-label="Profile Edit Button"
                  className="form_button profile__edit-btn"
                  onClick={props.onEditProfile}
                ></button>
                <p className="profile__job"></p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Card Add Button"
              id="addButton"
              className="form_button profile__add-btn"
              onClick={props.onAddPlace}
            ></button>
          </div>
        </section>
        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
    );
}

export default Main;
