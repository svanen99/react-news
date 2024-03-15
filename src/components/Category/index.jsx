import styles from './Category.module.css';
import { mockData } from '../../data/data';
import MyImage from '../../assets/hoga.jpeg'
import ImageArticle from '../Articles/ImageArticle';



const Category = ({title, articlesArray}) => {
    return (
        <div className={styles.category}>
            <h3>{title}</h3>
            <div className={styles.articles}>
                {articlesArray?.map((article, index) => <ImageArticle key={index}{...article}/> )}
            </div>

        </div>
    )
}

export default Category;