import config from "../config";
import TokenService from "./token-service";

const DoggodateApiService = {
  //dogs
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
        !res.ok 
        ? res.json().then((e) => Promise.reject(e)) 
        : res.json()
    );
  },
  getDog(dogId) {
    return fetch(`${config.API_ENDPOINT}/dogs/${dogId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
        !res.ok 
        ? res.json().then((e) => Promise.reject(e)) 
        : res.json()
    );
  },
  addDog(newDog) {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newDog),
    }).then((res) =>
      !res.ok 
      ? res.json().then((e) => Promise.reject(e)) 
      : res.json()
    );
  },
  //users
  getUser() {
    //remove temp
    // return fetch(`${config.API_ENDPOINT}/users/getdetails`, {
    return fetch(`${config.API_ENDPOINT}/users/`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
        !res.ok 
        ? res.json().then((e) => Promise.reject(e)) 
        : res.json()
    );
  },
  addUser(newUser) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newUser),
    }).then((res) =>
        !res.ok 
        ? res.json().then((e) => Promise.reject(e)) 
        : res.json()
    );
  },
  updateUser(userId, newUser) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newUser),
    }).then((res) =>
      !res.ok 
      ? res.json().then((e) => Promise.reject(e)) 
      : true
    );
  },
  //events
  getEvent() {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
        !res.ok 
        ? res.json().then((e) => Promise.reject(e)) 
        : res.json()
    );
  },
  addEvent(newEvent) {
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newEvent),
    }).then((res) =>
        !res.ok 
        ? res.json().then((e) => Promise.reject(e)) 
        : res.json()
    );
  },
  updateEvent(eventId, newEvent) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newEvent),
    }).then((res) =>
      !res.ok 
      ? res.json().then((e) => Promise.reject(e)) 
      : true
    );
  },
};

export default DoggodateApiService;