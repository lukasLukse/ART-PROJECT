import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [art, setArt] = useState([]);

  const fetchArt = async () => {
    const fetchedArt = await axios.get(
      "https://66d04e47181d059277de0dae.mockapi.io/art"
    );

    setArt(fetchedArt.data);
    console.log(fetchedArt);
  };

  useEffect(() => {
    fetchArt();
  }, []);

  return (
    <>
      <Header />
      <Main art={art} />
      <Footer />
    </>
  );
};

export default Gallery;
