import styles from "./styles.module.css";
import Link from "next/link";

const ArtCard = ({ id, imgUrl, title, category }) => {
  return (
    <Link href={`/picture/${id}`}>
      <div
        onClick={() => {
          console.log(title);
        }}
        className={styles.main}
      >
        <img src={imgUrl} alt="art photo" />
        <h2>{title}</h2>
        <h3>{category}</h3>
      </div>
    </Link>
  );
};

export default ArtCard;
