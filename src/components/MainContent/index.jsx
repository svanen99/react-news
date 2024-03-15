import styles from './MainContent.module.css'
import RecentNews from '../RecentNews';
import MainArticle from '../Articles/MainArticle';
import FeaturedArticles from '../FeaturedArticles';
import { mainArticle } from '../../data/data';
import { recentArticles } from '../../data/data';

const MainContent = () => {
    return (
        <section className={styles.mainContent}>
            <RecentNews articlesArray={recentArticles}/>
            <MainArticle {...mainArticle}/>
            <FeaturedArticles />
        </section> 
        
    )
}

export default MainContent;