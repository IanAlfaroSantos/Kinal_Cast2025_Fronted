import { useState, useEffect } from 'react';
import { logout as logoutHandler } from './userLogout';
import toast from 'react-hot-toast';

const getUserDetails = () => {
    
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
        return JSON.parse(userDetails);
    } else {
        return null;
    }
}

export const useUserDetails = () => {
    
    const [userDetails, setUserDetails] = useState(getUserDetails());
    
    useEffect(() => {
        const mostrar = localStorage.getItem('mostrar-mensaje');
        if (mostrar === 'true') {
            toast.success('Sesión cerrada correctamente');
            localStorage.removeItem('mostrar-mensaje');
        }
    }, []);
    
    const logout = () => {
        logoutHandler();
    }

    return {
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : 'Guest',
        logout
    }
}