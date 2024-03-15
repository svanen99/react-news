import styles from './RecentNews.module.css'
import ShortArticle from '../Articles/ShortArticle';

const RecentNews = ({articlesArray}) => {
    return (
        <div className={styles.recent}>
            <h3>Recent News</h3>
            {articlesArray.map((article, index) => <ShortArticle key={index}{...article}/>)}
            <ShortArticle />
            <ShortArticle />
            <ShortArticle />
            <ShortArticle />

        </div>
    )
}

export default RecentNews;