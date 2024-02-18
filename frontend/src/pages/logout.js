// import { React } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { Redirect } from "react-router";

// const Logout = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(Logout());
//   }, [dispatch]);
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   if (!isLoggedIn) {
//     return <Redirect to="/logoutconfirmation" />;
//   }
//   return <div>Error in logging out!</div>;
// };

// export default Logout;
