import React, { useState } from "react";
import LoginImage from "../assets/svgs/login.png";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { login } from "../apis/login";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onLogin = async () => {
    if (!email) {
      setError("Please fill in all the fields");
      return;
    }
    if (!password) {
      setError("Please fill in all the fields");
      return;
    }
    const resp = await login({ email, password });
    if (resp.success) {
      document.cookie = `x-access-token=${resp.data.token}; path=/;`;
      navigate("/");
    } else {
      alert(resp.error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextInput
              type="text"
              placeholder="Email"
              value={email}
              error={error?.email}
              onTextChange={(text) => setEmail(text)}
            />

            <TextInput
              type="password"
              placeholder="Password"
              error={error?.password}
              onTextChange={(text) => {
                setPassword(text);
              }}
              value={password}
            />
            <Button style={styles.button} onClick={onLogin} label={"Login"} />
            <div style={{ marginTop: 20 }}>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                Don't have an account?
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 10,
                  textDecoration: "underline",
                  textDecorationColor: "#6315eb",
                  color: "#6315eb",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/signup")}
              >
                Signup
              </div>
            </div>
          </div>
        </div>
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
    backgroundColor: "#f2e9e4",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#edd9ce",
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
