import GetImages from "../../utils/getImage";
import styles from "./style.module.scss";

interface PropsItem {
  item: string;
}

const Cards: React.FC<PropsItem> = ({ item }) => {
  return (
    <div className={styles.container}>
      <img
        src={`${GetImages(item.poster_path)}`}
        alt={item.title}
        className={styles.image}
      />
      <h2 className={styles.title}>{item.original_title}</h2>
    </div>
  );
};

export default Cards;
