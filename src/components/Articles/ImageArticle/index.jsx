import styles from './ImageArticles.module.css'
import { getImageURL } from '../../../utils/functions';

const ImageArticle = ({headline, image, deck}) => {
    return (
        <div className={styles.imageArticle}>
        <img src={getImageURL(image)} alt={headline} width="100%"></img>
            <div className={styles.image}>
            <h2>{headline}</h2>
            <p>{deck}</p>
        </div>
        </div>
    )
}

export default ImageArticle;