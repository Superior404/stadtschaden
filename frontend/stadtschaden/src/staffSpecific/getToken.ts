import { useState } from 'react'

const useToken = () => {
    const Storage_token_key = 'token';

    const getToken = () => {
        const tokenString = sessionStorage.getItem(Storage_token_key);
        if (tokenString !== null) {
            const userToken = tokenString; //JSON.parse(
            return userToken;
        }
        return null; // or any other default value you prefer
    }

    const [token, setToken] = useState(getToken())

    const saveToken = (userToken: string) => {
        console.log(userToken);
        sessionStorage.setItem(Storage_token_key, userToken);
        setToken(userToken);
    }

    const deleteToken = () => {
        setToken(null);
        sessionStorage.removeItem(Storage_token_key);
    }

    return {
        setToken: saveToken,
        deleteToken: deleteToken,
        token: token
    }
}

export default useToken