import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <div>Ładowanie...</div>;

    if (!user) {
        return <Navigate to="/logowanie" replace />;
    }

    return children;
};