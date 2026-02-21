import styles from './ProfileHeader.module.scss';
import { Camera } from 'lucide-react';

const ProfileHeader = ({ user }) => {
  return (
    <div className={styles.headerCard}>
      <div 
        className={styles.cover} 
        style={{ backgroundImage: `url(${user.background_picture_path})` }}
      >
        <button className={styles.changeCover}><Camera size={16} /></button>
      </div>
      <div className={styles.profileRow}>
        <div className={styles.avatarContainer}>
          <img src={user.prof_picture_path} className={styles.avatar} />
          <button className={styles.changeAvatar}><Camera size={14} /></button>
        </div>
        <div className={styles.userData}>
          <h2>{user.name} {user.surname}</h2>
          <p>{user.phone} • {user.email}</p>
        </div>
        <button className={styles.mainBtn}>Uzupełnij profil</button>
      </div>
    </div>
  );
};

export default ProfileHeader;