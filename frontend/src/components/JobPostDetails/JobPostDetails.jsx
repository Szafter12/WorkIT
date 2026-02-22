import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import styles from './JobPostDetails.module.scss'
import {
    MapPin,
    Clock,
    Briefcase,
    ChevronRight,
    GraduationCap,
    CircleCheck,
    Star,
    Share2,
    Printer,
    Building,
    Info
} from 'lucide-react'

const JobPostDetails = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    const BASE_URL = 'http://localhost:8000'

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosInstance.get(`/api/posts/${id}`)
                setPost(response.data.data)
            } catch (error) {
                console.error('Błąd pobierania postu:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [id])

    if (loading) return <div className={styles.loader}>Ładowanie szczegółów...</div>
    if (!post) return <div className={styles.error}>Nie znaleziono ogłoszenia.</div>

    return (
        <div className={styles.wrapper}>
            {/* HEADER SECTION */}
            <div
                className={styles.topBanner}
                style={{ backgroundImage: `url(${BASE_URL}${post.company?.background_path || '/default-bg.jpg'})` }}>
                <div className={styles.bannerOverlay} />
            </div>

            <div className={styles.contentContainer}>
                {/* MAIN HERO CARD */}
                <div className={styles.heroCard}>
                    <div className={styles.heroLayout}>
                        <div className={styles.logoWrapper}>
                            <img src={`${post.company?.company_logo_url}`} alt={post.company?.company_name} />
                        </div>

                        <div className={styles.mainTitleArea}>
                            <h1 className={styles.jobTitle}>{post.job_title}</h1>
                            <div className={styles.companyInfo}>
                                <span className={styles.companyName}>{post.company?.company_name}</span>
                                <span className={styles.separator}>•</span>
                                <span className={styles.location}>
                                    <MapPin size={18} />
                                    {post.company.address.street} {post.company.address?.address_line2} - {post.company.address.city.city}
                                </span>
                            </div>

                            <div className={styles.badgeRow}>
                                <span className={styles.badge}>{post.work_mode?.name}</span>
                                <span className={styles.badge}>{post.contract_type?.name}</span>
                                <span className={styles.badge}>{post.work_dimension?.name}</span>
                            </div>
                        </div>

                        <div className={styles.ctaArea}>
                            <div className={styles.actionIcons}>
                                <button title='Zapisz'>
                                    <Star size={22} />
                                </button>
                                <button title='Udostępnij'>
                                    <Share2 size={22} />
                                </button>
                                <button title='Drukuj'>
                                    <Printer size={22} />
                                </button>
                            </div>
                            <button className={styles.primaryApplyBtn}>Aplikuj teraz</button>
                            <p className={styles.publishedDate}>Dodano: {new Date(post.created_at).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.mainGrid}>
                    <div className={styles.jobContent}>
                        {post.job_description && (
                            <section className={styles.infoSection}>
                                <h2 className={styles.sectionTitle}>Opis stanowiska</h2>
                                <p className={styles.descriptionText}>{post.job_description}</p>
                            </section>
                        )}

                        <section className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Technologie, których używamy</h2>
                            <div className={styles.techBadges}>
                                {post.abilities?.map(ability => (
                                    <span key={ability.id} className={styles.techBadge}>
                                        {ability.ability_name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Twoje zadania</h2>
                            <ul className={styles.responsibilitiesList}>
                                {post.job_responsibilities?.map(res => (
                                    <li key={res.id}>
                                        <CircleCheck className={styles.checkIcon} size={24} />
                                        <span>{res.responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.infoSection}>
                            <h2 className={styles.sectionTitle}>Nasze wymagania</h2>
                            <ul className={styles.requirementsList}>
                                {post.job_requirements?.map(req => (
                                    <li key={req.id}>
                                        <CircleCheck className={styles.checkIcon} size={24} />
                                        <span>{req.requirement}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* SEKCJA: O FIRMIE */}
                        <section className={`${styles.infoSection} ${styles.companySection}`}>
                            <h2 className={styles.sectionTitle}>O firmie: {post.company?.company_name}</h2>
                            <div className={styles.companyAbout}>
                                <div className={styles.companyHeader}>
                                    <Building size={32} className={styles.companyIcon} />
                                    <div>
                                        <p className={styles.companyMeta}>Branża: IT / Software</p>
                                        <p className={styles.companyMeta}>Kontakt: {post.company?.email}</p>
                                    </div>
                                </div>
                                <p className={styles.companyInfoText}>
                                    {post.company?.company_info || "Brak dodatkowych informacji o firmie."}
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT SIDE: SIDEBAR DETAILS */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarSticky}>
                            <h3 className={styles.sidebarHeader}>Parametry oferty</h3>

                            <div className={styles.parameterItem}>
                                <div className={styles.paramIcon}>
                                    <GraduationCap size={24} />
                                </div>
                                <div className={styles.paramText}>
                                    <label>Poziom stanowiska</label>
                                    <p>{post.level?.name}</p>
                                </div>
                            </div>

                            <div className={styles.parameterItem}>
                                <div className={styles.paramIcon}>
                                    <Briefcase size={24} />
                                </div>
                                <div className={styles.paramText}>
                                    <label>Rodzaj umowy</label>
                                    <p>{post.contract_type?.name}</p>
                                </div>
                            </div>

                            <div className={styles.parameterItem}>
                                <div className={styles.paramIcon}>
                                    <Clock size={24} />
                                </div>
                                <div className={styles.paramText}>
                                    <label>Wymiar pracy</label>
                                    <p>{post.work_dimension?.name}</p>
                                </div>
                            </div>

                            <hr className={styles.divider} />

                            <div className={styles.specsContainer}>
                                <label className={styles.specsLabel}>Specjalizacje</label>
                                <div className={styles.specsList}>
                                    {post.specializations?.map(spec => (
                                        <span key={spec.id} className={styles.specItem}>
                                            {spec.specialization}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default JobPostDetails