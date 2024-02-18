import "./App.css";
import { Navbar } from "./components/Navbar";
import { AddBook } from "./pages/addBook";
import { BookDetails } from "./pages/bookDetail";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import  {Logout } from "./pages/logout";
import { Signup } from "./pages/signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<BookDetails />} />
        <Route path="/book/add" element={<AddBook />} />
        <Route path="/contactUs" element={<contactUs />} />
        <Route path="/logout" element ={ <Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
