import GetImages from "../../utils/getImage";
import styles from "./style.module.scss";

interface PropsItem {
  item: string;
}

const Cards: React.FC<PropsItem> = ({ item }) => {
  return (
    <div className={styles.container}>
      <img
        src={`${GetImages(item.poster_path || item.profile_path)}`}
        alt={item.title}
        className={styles.image}
      />
      <h2 className={styles.title}>{item.title || item.name}</h2>
    </div>
  );
};

export default Cards;
