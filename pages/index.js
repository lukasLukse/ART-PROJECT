import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Main = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !imgUrl) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        "https://66d04e47181d059277de0dae.mockapi.io/art",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, category, imgUrl }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setTitle("");
      setCategory("");
      setImgUrl("");
      setError(null);
      setSuccess(true);
    } catch (error) {
      setError("Failed to add artwork. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to the Art Gallery</h1>
        <p>
          Explore our collection of exquisite artworks from renowned artists.
        </p>
        {error && <p className={styles.error}>{error}</p>}
        {success && (
          <p className={styles.success}>Artwork added successfully!</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Artwork Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <button type="submit">Add Artwork</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
