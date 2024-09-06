import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "./styles.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const picture = () => {
  const [art, setArt] = useState();
  const router = useRouter();

  const fetchArt = async (id) => {
    const fetchedArt = await axios.get(
      `https://66d04e47181d059277de0dae.mockapi.io/art/${id}`
    );

    setArt(fetchedArt.data);
  };

  useEffect(() => {
    router.query.id && fetchArt(router.query.id);
  }, [router.query]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <>
          <div className={styles.main}>
            {art && (
              <>
                <div className={styles.text}>{art.title}</div>
                <img src={art.imgUrl} />
                <div className={styles.text}>{art.category}</div>
              </>
            )}
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default picture;
