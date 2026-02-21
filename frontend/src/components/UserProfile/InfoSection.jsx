import styles from './UserProfile.module.scss';
import { Plus } from 'lucide-react';

const InfoSection = ({ title, icon, children, onAddClick }) => {
  return (
    <section className={styles.infoCard}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <h3>{title}</h3>
        </div>
        
        {/* Przycisk dodawania - np. nowej szkoły lub pracy */}
        {onAddClick && (
          <button className={styles.addBtn} onClick={onAddClick}>
            <Plus size={18} />
            Dodaj
          </button>
        )}
      </div>
      
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default InfoSection;