import styles from "../ShortArticle/ShortArticle.module.css"
import { mockData } from '../../../data/data';
import Category from "../../Category";

const ShortArticle = () => {
    return (
        <div className={styles.shortArticle}>
            <h4>{mockData.headline} {mockData.deck}</h4>
            <p className={styles.category}>{mockData.category}</p>
        </div>
    )
}

export default ShortArticle;