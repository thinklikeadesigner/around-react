import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm
          name="edit"
          formname="formEdit"
          title="Edit Profile"
          id1="name"
          maxlength1="40"
          inputname1="name"
          type1="text"
          placeholder1="Name"
          id2="job"
          maxlength2="200"
          type2="text"
          inputname2="about"
          placeholder2="About"
        />

        <PopupWithForm
          name="add"
          formname="formAdd"
          title="New Place"
          id1="title-input"
          maxlength1="30"
          inputname1="name"
          type1="text"
          placeholder1="Title"
          id2="url-input"
          inputname2="link"
          type2="url"
          placeholder2="Image URL"
        />

        <PopupWithForm
          name="avatar"
          formname="formAvatar"
          title="Avatar"
          id1="avatar-input"
          type1="url"
          inputname1="avatar"
          placeholder1="Image URL"
        />

        <PopupWithForm
          name="delete"
          title="Are you sure?"
          id1="avatar-input"
          type1="url"
          inputname1="avatar"
          placeholder1="Image URL"
        />
      </div>
      <template id="card__template">
        <li className="card">
          <img
            src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
            alt="image loading"
            className="card__pic"
          />
          <button
            aria-label="Delete Button"
            className="card__delete-btn"
          ></button>
          <div className="card__text">
            <h2 className="card__title"></h2>
            <div className="card__likes_container">
              <button aria-label="Like Button" className="card__heart"></button>
              <p className="card__likes_count">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
