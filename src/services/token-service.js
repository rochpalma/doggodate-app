import jwtDecode from 'jwt-decode'
import config from '../config';

const TokenService = {
    saveAuthToken(token) {
        window.localStorage.setItem(config.TOKEN_KEY, token);
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY);
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY);
    },
    hasAuthToken() {    
        return !!TokenService.getAuthToken();
    },
    saveUserId(id) {
        window.localStorage.setItem('user_id', id);
    },
    getUserId() {
        return window.localStorage.getItem('user_id');
    },
    clearUserId() {
        window.localStorage.removeItem('user_id');
    },
    saveDogId(id) {
        window.localStorage.setItem('dog_id', id);
    },
    getDogId() {
        return window.localStorage.getItem('dog_id');
    },
    clearDogId() {
        window.localStorage.removeItem('dog_id');
    },
    saveOwnerId(id) {
        window.localStorage.setItem('owner_id', id);
    },
    getOwnerId() {
        return window.localStorage.getItem('owner_id');
    },
    clearOwnerId() {
        window.localStorage.removeItem('owner_id');
    },
    parseJwt(jwt) {
        return jwtDecode(jwt);
    },
    readJwtToken() {
        return TokenService.parseJwt(TokenService.getAuthToken());
    },

}

export default TokenService;