import client from './client';

const endPoint = '/user';

const registerUser = (name,email,password) => client.post(endPoint, { name,email,password });

export default {
    registerUser,
}