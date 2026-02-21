import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import UserProfile from '../../components/UserProfile/UserProfile';
import { getUserProfile } from '../../api/user';

export function UserPanel() {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getUserProfile();
                setUserDetails(data);
            } catch (err) {
                console.error("Błąd podczas pobierania profilu:", err);
                setError("Nie udało się załadować danych profilu.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return (
        <Layout>
            <div style={{ textAlign: 'center', padding: '50px' }}>Ładowanie profilu...</div>
        </Layout>
    );

    if (error) return (
        <Layout>
            <div style={{ textAlign: 'center', color: 'red', padding: '50px' }}>{error}</div>
        </Layout>
    );

    return (
        <Layout>
            <UserProfile userDetails={userDetails} />
        </Layout>
    );
}