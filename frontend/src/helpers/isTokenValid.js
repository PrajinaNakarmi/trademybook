import jwtDecode from "jwt-decode";

function isTokenValid() {
  // extract the token value from the cookie
  const token = document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("x-access-token="))
    ?.split("=")[1];

  // if there is no token, or it's an empty string, consider it invalid
  if (!token) {
    return false;
  }

  // decode the token and extract its payload
  const decodedToken = jwtDecode(token);

  // check if the token has expired
  const currentTime = Date.now() / 1000; // divide by 1000 to convert to seconds
  if (decodedToken.exp < currentTime) {
    return false;
  }

  // if the token is valid and not expired, return true
  return true;
}

export default isTokenValid;
