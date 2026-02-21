import { MainButton } from '../MainButton/MainButton'
import styles from './LoginPrev.module.scss'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function LoginPrev() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };
    if (user) {
        return (
            <div className={styles.loginPrev}>
                <p className={styles.loginPrev__main}>Witaj ponownie, {user.name}!</p>
                <p className={styles.loginPrev__text}>
                    Twój profil jest gotowy. Zarządzaj swoimi aplikacjami, edytuj CV i sprawdzaj 
                    najnowsze oferty dopasowane do Twoich umiejętności.
                </p>
                
                <MainButton href='/profile' fontSize='1.4rem' bgc={true}>
                    Mój profil
                </MainButton>
                
                <div style={{ marginTop: '10px', width: '100%' }}>
                    <MainButton onClick={handleLogout} fontSize='1.4rem'>
                        Wyloguj się
                    </MainButton>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.loginPrev}>
            <p className={styles.loginPrev__main}>Witaj na Work IT!</p>
            <p className={styles.loginPrev__text}>
                Zaloguj się i uzyskaj dostęp do szybkiego aplikowania, zapisanych ofert, zarządzania plikami CV i wielu innych
                funkcji!
            </p>
            <MainButton href='/logowanie' fontSize='1.4rem' bgc={true}>
                Zaloguj się
            </MainButton>
            <p>Nie masz jeszcze konta?</p>
            <MainButton href='/rejestracja' fontSize='1.4rem'>
                Zarejestruj się
            </MainButton>
        </div>
    );
}