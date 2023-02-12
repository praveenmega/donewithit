import React,{useContext} from 'react';
import AuthContext from './context';
import authStorage from './storage';
import jwt_decode from 'jwt-decode';

export default useAuth = () => {
    const {user,setUser} = useContext(AuthContext);

    const login = (token) => {
        var decoded = jwt_decode(token);
        setUser(decoded);
        authStorage.storeToken(token);
    }

    const logout = async () => {
        setUser(null);
        await authStorage.removeToken();
    }

    return {user,logout,login};
}