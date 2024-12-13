import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Stores user data (e.g., role)
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            const userData = JSON.parse(atob(token.split('.')[1])); // Decode JWT
            setUser(userData);
        }
    }, [token]);

    const login = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;