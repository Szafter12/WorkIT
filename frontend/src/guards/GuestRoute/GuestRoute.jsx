import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const GuestRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return null; 

    if (user) {
        return <Navigate to="/profile" replace />;
    }

    return children;
};