import React, { useState } from "react";
import Book from "../assets/jpg/addbook.png";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { TextArea } from "../components/TextArea";
import { addBook } from "../apis/addBook";
import { toast } from "react-toastify";
import { COLORS } from "../helpers/constants";

export const AddBook = () => {
  const [bookData, setBookData] = useState({
    bookTitle: "",
    author: "",
    price: "",
    description: "",
    images: "",
  });

  const handleChange = ({ field, value }) => {
    setBookData(() => ({
      ...bookData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitted book data:", bookData);
    try {
      const resp = await addBook({
        ...bookData,
        images: [bookData.images],
      });
      toast("Book added succefully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        progressStyle: {
          background: COLORS.primary,
        },
      });
      setBookData({
        bookTitle: "",
        author: "",
        price: "",
        description: "",
        publishdate: "",
        image: "",
      });
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}>
          <h1 style={{ textAlign: "center" }}>Add New Book</h1>
          <TextInput
            placeholder="Book"
            onTextChange={(text) => {
              handleChange({ field: "bookTitle", value: text });
            }}
            value={bookData.bookTitle}
          />
          <TextInput
            placeholder="Author"
            onTextChange={(text) => {
              handleChange({ field: "author", value: text });
            }}
            value={bookData.author}
          />
          <TextInput
            placeholder="Price"
            onTextChange={(text) => {
              handleChange({ field: "price", value: text });
            }}
            value={bookData.price}
          />
          <TextInput
            placeholder="Published Date"
            onTextChange={(text) => {
              handleChange({ field: "publishdate", value: text });
            }}
            value={bookData.publishdate}
          />
          <div>
            <TextArea
              placeholder="Description"
              value={bookData.description}
              onTextChange={(text) =>
                handleChange({ field: "description", value: text })
              }
            />
            <TextArea
              placeholder="Cover Image Link"
              value={bookData.image}
              onTextChange={(text) =>
                handleChange({ field: "image", value: text })
              }
            />
          </div>
          <Button
            style={styles.button}
            label={"Submit"}
            onClick={handleSubmit}
          />
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={Book} alt="React Logo" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormContainer: {
    display: "flex",
    flex: 1,
    padding: "20px",
    height: "100%",
    backgroundColor: "#f2e9e4",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#edd9ce",
    width: "50%",
    padding: 20,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    font: "lato",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#786154",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "60%",
  },
};
