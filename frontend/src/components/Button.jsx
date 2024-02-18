export const Button = ({ label, onClick, color, ...props }) => {
  return (
    <button
      style={{
        ...buttonStyles.container,
        backgroundColor: color === "secondary" ? "#30788a" : "#7a4ec7",
      }}
      onClick={onClick}
      {...props}
    >
      <div style={{ textAlign: "center" }}>{label}</div>
    </button>
  );
};

const buttonStyles = {
  container: {
    border: "1px solid #627fd9",
    borderRadius: "5px",
    padding: "20px",
    backgroundColor: "#7a4ec7",
    color: "#ffffff",
  },
};
