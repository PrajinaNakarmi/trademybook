import React, { useEffect } from "react";
import LoginImage from "../assets/svgs/login-illustration.svg";
import { COLORS } from "../helpers/constants";
import { useLocation } from "react-router-dom";
import { getBookDetails } from "../apis/getBookDetails";

export const BookDetails = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get("id");

  const bookDetails = async () => {
    try {
      const response = await getBookDetails({ id: id });
      console.log(response);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    if (id) {
      bookDetails();
    }
  });
  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}></div>
      </div>
      <div style={styles.imageContainer}>
        <img src={LoginImage} alt="React Logo" style={styles.image} />
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
    padding: "40px",
    height: "100%",
    backgroundColor: "rgba(24, 92, 205, 0.31)",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    width: "60%",
    padding: 20,
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: COLORS.primary,
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
