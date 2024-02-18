import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import HomeBanner from "../assets/jpg/BooksBanner.jpg";
import { getBooks } from "../apis/getBooks";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllBooks = async () => {
    setLoading(true);
    try {
      const resp = await getBooks();
      setBooks(resp);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img height={"850px"} width={"100%"} src={HomeBanner} alt="Banner" style={styles.banner} />
      {books.map((card, index) => (
        <div
          key={index}
          style={{ display: "flex", marginBottom: "20px", marginRight: "30px" }}
        >
          <Card
            key={card._id}
            image={card?.images[0]}
            title={card.bookTitle}
            description={card.description}
            price={card.price}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  banner: {
    marginBottom: 20,
  },
};
