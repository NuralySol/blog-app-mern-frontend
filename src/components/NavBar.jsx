import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <nav>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <span>Welcome, {user.username}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;