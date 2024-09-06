import styles from "./styles.module.css";
import ArtWrapper from "../ArtWrapper/ArtWrapper";

const Main = ({ art }) => {
  return (
    <main className={styles.main}>
      <ArtWrapper art={art} />
    </main>
  );
};

export default Main;
