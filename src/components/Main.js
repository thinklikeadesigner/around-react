import React from "react";
import { api } from "../utils/Api";
function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    function handleSetData() {
      api.getUserInfo().then((res) => {
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
        setUserName(res.name);
      });
    }

    handleSetData();

    return () => {
      handleSetData();
    };
  });

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__info">
            <div className="profile__avatar-btn" onClick={props.onEditAvatar}>
              <img
                src={userAvatar}
                className="profile__pic"
              />
            </div>
            <div className="profile__text">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                aria-label="Profile Edit Button"
                className="form_button profile__edit-btn"
                onClick={props.onEditProfile}
              ></button>
              <p className="profile__job">{userDescription}</p>
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
