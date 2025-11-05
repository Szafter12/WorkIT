import styles from './FilterBox.module.scss'

export const FilterBox = ({ filterContent, onChange, activeCategories, isMobile }) => {
    const styledClass = isMobile ? styles.filterBoxMobile : styles.filterBox

    return (
        <div className={styledClass}>
            {filterContent.map(el => {
                return (
                    <button onClick={() => onChange(el.id, el.name)} key={el.name} className={styles.filterBox__content}>
                        <input
                            type='checkbox'
                            id={el.name}
                            value={el.id}
                            checked={activeCategories.includes(el.name)}
                            readOnly
                        />
                        <label htmlFor={el.name}>{el.name}</label>
                    </button>
                )
            })}
        </div>
    )
}