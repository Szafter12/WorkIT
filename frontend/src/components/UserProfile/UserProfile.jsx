import { useState } from 'react';
import styles from './UserProfile.module.scss';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import InfoSection from './InfoSection';
import { Briefcase, GraduationCap, Globe, MapPin, Share2, Lock } from 'lucide-react';

const UserProfile = ({ userDetails }) => {
  return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>

        <ProfileHeader user={userDetails.user} />

        <div className={styles.layout}>

          <main className={styles.mainContent}>
            
            <InfoSection title="O mnie" icon={null}>
               <p className={styles.descriptionText}>{userDetails.user?.description}</p>
            </InfoSection>

            <InfoSection title="Doświadczenie zawodowe" icon={<Briefcase size={20} />}>
              {userDetails.user_work.map(job => (
                <div key={job.id} className={styles.entry}>
                  <h4>{job.position}</h4>
                  <p className={styles.subTitle}>{job.company_name}</p>
                  <p className={styles.date}>{job.start_date} - {job.end_date || 'Obecnie'}</p>
                </div>
              ))}
            </InfoSection>

            <InfoSection title="Edukacja" icon={<GraduationCap size={20} />}>
              {userDetails.user_education.map(edu => (
                <div key={edu.id} className={styles.entry}>
                  <h4>{edu.school_name}</h4>
                  <p className={styles.subTitle}>{edu.degree} - {edu.field_name}</p>
                  <p className={styles.date}>{edu.start_date} - {edu.end_date}</p>
                </div>
              ))}
            </InfoSection>
          </main>

          <aside className={styles.sidebar}>
            
            <InfoSection title="Lokalizacja" icon={<MapPin size={18} />}>
              <p>{userDetails?.user_address?.street}, {userDetails?.user_address?.city_name}</p>
            </InfoSection>

            <InfoSection title="Języki" icon={<Globe size={18} />}>
              {userDetails.user_language.map(lang => (
                <div key={lang.id} className={styles.tagGroup}>
                  <span className={styles.tag}>{lang.name} - <strong>{lang.level}</strong></span>
                </div>
              ))}
            </InfoSection>

            <InfoSection title="Social Media" icon={<Share2 size={18} />}>
              {userDetails?.user_social_links.map(link => (
                <a key={link.id} href={link.url} className={styles.socialLink}>
                  {link.platform_name}
                </a>
              ))}
            </InfoSection>

            <InfoSection title="Bezpieczeństwo" icon={<Lock size={18} />}>
              <button className={styles.secondaryBtn}>Zmień hasło</button>
            </InfoSection>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;