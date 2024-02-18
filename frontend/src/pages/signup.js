import React, { useState } from "react";
import SignupImage from "../assets/svgs/signup1.png";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";
import { signup } from "../apis/signup";

export const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({password:"",email:"",firstName:"",lastName:""});
  const [signupFields, setSignupFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const checkPasswordsMatch = () => {
    if (signupFields.password !== signupFields.confirmPassword) {
      setError({...error, 'password':'Passwords didnot match'}); 
      return false;
      // return alert("Passwords didnot match!");
    }
    return true;
  };
   const onSubmit = async () => {
    if (!signupFields.email){
      setError({...error,'email':'Email cannot be empty.'});
     
    }
    if (!signupFields.firstName){
      setError({...error,'firstName':'First Name cannot be empty.'});
     
    }
    if (!signupFields.lastName){
      setError({...error,'lastName':'Last Name cannot be empty.'});
     
    }
    if (checkPasswordsMatch()) {
     
      const response = await signup(signupFields);
      if (response && response.success) {
        alert("User registered successfully!");
      } else {
        response && response.error.map((err, index)=>{
          console.log(response.error);
          return(
          setError({...error, password:err.message})
          
          // console.log(err.context.key, err.message)
        )})
      }
    }
  };
  
    
  return (
    <div style={styles.container}>
      <div style={styles.loginFormContainer}>
        <div style={styles.loginForm}>
          <h1 style={{ textAlign: "center" }}>Signup</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextInput
              type="text"
              placeholder="FirstName"
              error={error?.firstName}
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, firstName: text })
              }
            />
            <TextInput
              type="text"
              placeholder="LastName"
              error={error?.lastName}
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, lastName: text })
              }
            />

            <TextInput
              type="text"
              placeholder="Email"
              error={error?.email}
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, email: text })
              }
            />
            <TextInput
              type="password"
              placeholder="Password"
              error={error?.password}
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, password: text })
              }
            />
            <TextInput
              type="password"
              placeholder="Confirm Password"
              onTextChange={(text) =>
                setSignupFields({ ...signupFields, confirmPassword: text })
              }
            />
            <button style={styles.button} onClick={onSubmit}>
              Signup
            </button>
            <div style={{ marginTop: 20 }}>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                Already have an account?
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
                onClick={() => navigate("/login")}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src={SignupImage} alt="React Logo" style={styles.image} />
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
    flexDirection: "column",
    flex: 1,
    padding: "40px",
    height: "100%",
  
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#edd9ce",
    width: "45%",
    padding: 20,
    borderRadius: 10,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
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
    flexDirection: "column",
  },
  image: {
    width: "80%",
    height: "60%",
  },
};
