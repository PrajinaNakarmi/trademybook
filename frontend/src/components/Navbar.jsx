import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import isTokenValid from "../helpers/isTokenValid";

import logo from "../assets/svgs/logo2.png";

import { Cookies } from "react-cookie";

export const Navbar = () => {
  const location = useLocation();

  const isLoggedIn = isTokenValid();

  const navigate = useNavigate();

  const cookies = new Cookies();

  const onButtonClick = () => {
    if (isLoggedIn) {
      cookies.remove("x-access-token", { path: "/" });
      return navigate("/");
    }
    return navigate("/login");
  };
  const isLinkActive = (link) => {
    return location.pathname === link;
  };

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <nav style={styles.navbarStyle}>
      <div style={styles.navbarLeftStyle} onClick={() => navigate("/")}>
        <img src={logo} alt="" height="80px"/>
      </div>
      <div>
        <ul style={styles.navbarRightStyle}>
          {isLoggedIn && (
            <li style={styles.navbarItemStyle}>
              <div
                onClick={() => navigate("/book/add")}
                style={
                  isLinkActive("/book/add")
                    ? styles.activeLinkStyle
                    : styles.linkStyle
                }
              >
                Add Book
              </div>
            </li>
          )}
          <li style={styles.navbarItemStyle}>
            <div
              onClick={() => navigate("/")}
              style={
                isLinkActive("/") ? styles.activeLinkStyle : styles.linkStyle
              }
            >
              Home
            </div>
            </li>
          
          <li style={styles.navbarmidStyle}>
            <div
            onClick={()=> navigate("/")}
            style={
              isLinkActive("/")? styles.activeLinkStyle : styles.linkStyle
            }
          >
            Contact Us
          </div>
          </li>
          <li style={styles.navbarItemStyle}>
            <div
              onClick={onButtonClick}
              style={
                isLinkActive("/login")
                  ? styles.activeLinkStyle
                  : styles.linkStyle
              }
            >
              {isLoggedIn ? "Logout" : "Login"}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbarStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    position: "sticky",
    top: 0,
    backgroundColor: "#dbc2b4",
  },

  navbarLeftStyle: {
    display: "block",
    alignItems: "center",
    cursor: "pointer",
  },
  
  navbarmidStyle:{
    order:"1",
    justifyContent: "space-around",
  },

  navbarRightStyle: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },

  navbarItemStyle: {
    marginLeft: "50px",
  },

  activeLinkStyle: {
    fontWeight:"bolder",
    fontSize:"19px",
    color: "#703311",
    cursor: "pointer",
  },
  linkStyle: {
    color: "#5c5858",
    fontSize:"19px",
    textDecoration: "none",
    cursor: "pointer",
  },
};
