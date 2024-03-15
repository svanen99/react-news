import styles from '../MainArticle/MainArticle.module.css'
import MyImage from '../../../assets/ashes.jpeg'
import { getImageURL } from '../../../utils/functions'

const MainArticle = ({headline, deck, story, category, image}) => {
    return (
        <div className={styles.mainArticle}>
            <img src={getImageURL(image)} alt={headline} width="100%"></img>
            <h2>{headline} {deck}</h2>
            <p className={styles.story}>{story.slice(0, 200)}...</p>
            <p><span className={styles.category}>Category: </span>{category}</p>
        </div>
    )
}

export default MainArticle;