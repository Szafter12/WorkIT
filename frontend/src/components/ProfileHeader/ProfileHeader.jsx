import { useRef, useState, useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import styles from './ProfileHeader.module.scss'
import { Camera } from 'lucide-react'

const ProfileHeader = ({ user, onUserUpdate }) => {
  const avatarInput = useRef(null)
  const coverInput = useRef(null)
  const BASE_URL = 'http://localhost:8000'

  const [avatarUrl, setAvatarUrl] = useState('')
  const [coverUrl, setCoverUrl] = useState('')

  const generateUrl = (path) => {
    if (!path) return '/default-avatar.png'
    const fullPath = path.startsWith('http') ? path : `${BASE_URL}${path}`
    return `${fullPath}?t=${new Date().getTime()}`
  }

  useEffect(() => {
    if (user?.prof_picture_path) setAvatarUrl(generateUrl(user.prof_picture_path))
    if (user?.background_picture_path) setCoverUrl(generateUrl(user.background_picture_path))
  }, [user])

  const handleFileChange = async (event, type) => {
    const file = event.target.files[0]
    if (!file) return

    const formData = new FormData()
    if (type === 'avatar') formData.append('prof_picture', file)
    if (type === 'cover') formData.append('background_picture', file)

    try {
      const response = await axiosInstance.post('/api/user/update-pictures', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      const updatedUser = response.data.user
      
      if (type === 'avatar') {
        setAvatarUrl(generateUrl(updatedUser.prof_picture_path))
      } else {
        setCoverUrl(generateUrl(updatedUser.background_picture_path))
      }
      if (onUserUpdate) {
        onUserUpdate(updatedUser)
      }

    } catch (error) {
      console.error('Błąd przesyłania:', error)
      alert('Błąd podczas aktualizacji zdjęcia.')
    } finally {
      event.target.value = null
    }
  }

  return (
    <div className={styles.headerCard}>
      <input
        type='file'
        ref={avatarInput}
        onChange={e => handleFileChange(e, 'avatar')}
        style={{ display: 'none' }}
        accept='image/*'
      />
      <input
        type='file'
        ref={coverInput}
        onChange={e => handleFileChange(e, 'cover')}
        style={{ display: 'none' }}
        accept='image/*'
      />
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${coverUrl || 'default-cover.jpg'})` }}
      >
        <button className={styles.changeCover} onClick={() => coverInput.current.click()}>
          <Camera size={16} />
        </button>
      </div>

      <div className={styles.profileRow}>
        <div className={styles.avatarContainer}>
          <img 
            src={avatarUrl || '/default-avatar.png'} 
            className={styles.avatar} 
            alt="Avatar"
          />
          <button className={styles.changeAvatar} onClick={() => avatarInput.current.click()}>
            <Camera size={14} />
          </button>
        </div>

        <div className={styles.userData}>
          <h2>{user.name} {user.surname}</h2>
          <p>{user.phone} • {user.email}</p>
        </div>
        <button className={styles.mainBtn}>Uzupełnij profil</button>
      </div>
    </div>
  )
}

export default ProfileHeader