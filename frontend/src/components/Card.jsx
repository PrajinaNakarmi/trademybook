import React from "react";

export const Card = ({ title, description, price, onClick }) => {
  return (
    <div style={styles.cardStyle} onClick={onClick}>
      <div style={styles.titleStyle}>{title}</div>
      <div style={styles.descriptionStyle}>{description}</div>
      <div style={styles.priceStyle}>Rs.{price}</div>
    </div>
  );
};

const styles = {
  cardStyle: {
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: 250,
    cursor: "pointer",
  },
  titleStyle: {
    color: "#6315eb",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  descriptionStyle: {
    color: "#333",
    fontSize: "16px",
    marginBottom: "5px",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
  },
  priceStyle: {
    color: "#6315eb",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Card;
