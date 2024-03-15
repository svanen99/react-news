import styles from './FeaturedArticles.module.css'
import ImageArticle from '../Articles/ImageArticle'
import { sportArticles } from '../../data/data'

const FeaturedArticles = () => {
    return (
        <div className={styles.featured}>
            {sportArticles.map((article, index) => <ImageArticle key={index}{...article}/>

            )}
        </div>
        
    )
}


export default FeaturedArticles;