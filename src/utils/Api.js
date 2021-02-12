export class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
    //GET https://around.nomoreparties.co/v1/groupId/cards
    getCardList() {
      return fetch(this._baseUrl + "/cards", {
        headers: this._headers,
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error!" + res.statusText)
      );
    }
  
    // GET https://around.nomoreparties.co/v1/groupId/users/me
    getUserInfo() {
      return fetch(this._baseUrl + "/users/me", {
        headers: this._headers,
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error!" + res.statusText)
      );
    }
  
    getAppInfo() {
      return Promise.all([this.getUserInfo(), this.getCardList()]);
    }
  
    // POST https://around.nomoreparties.co/v1/groupId/cards
    addCard({ name, link }) {
      return fetch(this._baseUrl + "/cards", {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name,
          link,
        }),
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error!" + res.statusText)
      );
    }
  
    // DELETE https:around.nomoreparties.co/v1/groupId/cards/cardId
    removeCard(cardId) {
      return fetch(this._baseUrl + "/cards/" + cardId, {
        headers: this._headers,
        method: "DELETE",
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error!" + res.statusText)
      );
    }
  
    // PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
    addCardLike(cardId) {
      return fetch(this._baseUrl + "/cards/likes/" + cardId, {
        headers: this._headers,
        method: "PUT",
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error! " + res.statusText)
      );
    }
  
    deleteCardLike(cardId) {
      return fetch(this._baseUrl + "/cards/likes/" + cardId, {
        headers: this._headers,
        method: "DELETE",
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error! " + res.statusText)
      );
    }
  
    // PATCH https://around.nomoreparties.co/v1/groupId/users/me
    setUserInfo({ name, about }) {
      return fetch(this._baseUrl + "/users/me", {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name,
          about,
        }),
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error!" + res.statusText)
      );
    }
  
    // PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
    setUserAvatar({ avatar }) {
      return fetch(this._baseUrl + "/users/me/avatar", {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({ avatar }),
      }).then((res) =>
        res.ok ? res.json() : Promise.reject("Error!" + res.statusText)
      );
    }
  }
  
  export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-5",
    headers: {
      authorization: "b0d2099d-1e3e-49c8-a58b-52391c0a6488",
      "Content-Type": "application/json",
    },
  });

