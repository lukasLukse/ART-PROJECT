import styles from "./styles.module.css";
import ArtCard from "../ArtCard/ArtCard";

const ArtWrapper = ({ art }) => {
  return (
    <div className={styles.main}>
      {art &&
        art.map((a) => {
          return (
            <ArtCard
              key={a.id}
              id={a.id}
              imgUrl={a.imgUrl}
              title={a.title}
              category={a.category}
            />
          );
        })}
    </div>
  );
};

export default ArtWrapper;
