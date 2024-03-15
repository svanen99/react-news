import styles from './BreakingNews.module.css'

const BreakingNews = ({articlesArray}) => {
    return (
        <div className={styles.breaking}>
            <span className={styles.tile}>Breaking News</span>
            {articlesArray.map((article,index) => <span key = {index}className={styles.headline}>{article.headline}</span>)}
        </div>
    )
}

export default BreakingNews;