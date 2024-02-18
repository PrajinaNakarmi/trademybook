export const TextArea = ({
  onTextChange,
  placeholder,
  type,
  value,
  inputStyle,
}) => {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <textarea
        type={type}
        placeholder={placeholder}
        style={{ ...styles.input, ...inputStyle }}
        onChange={(e) => onTextChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

const styles = {
  input: {
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1.5,
    width: "100%",
  },
};
