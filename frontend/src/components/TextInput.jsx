export const TextInput = ({
  onTextChange,
  placeholder,
  type,
  value,
  inputStyle,
  error,
}) => {
  return (
    <>
      <div style={{ display: "flex", flex: 1 }}>
        <input
          type={type}
          placeholder={placeholder}
          style={{ ...styles.input, ...inputStyle }}
          onChange={(e) => onTextChange(e.target.value)}
          value={value}
        />
      </div>
      {error && <p style={{ color: "black" }}>{error}</p>}
    </>
  );
};

const styles = {
  input: {
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    width: "100%",
  },
};
