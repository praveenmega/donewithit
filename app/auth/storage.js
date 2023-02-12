import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

const key = 'authToken';

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log(error);
    }
}

const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key);
        return token;
    } catch (error) {
        console.log(error);
    }
}

const getUser = async () => {
    try {
        const token = await SecureStore.getItemAsync(key);
        return jwt_decode(token)
    } catch (error) {
        console.log(error);
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log(error);
    }
}

export default {getToken, removeToken, storeToken, getUser}