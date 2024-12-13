import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(UserContext);

    // Redirect to login if the user is not authenticated
    return token ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired, // Expecting React nodes as children
};

export default ProtectedRoute;