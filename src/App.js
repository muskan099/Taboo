import { useEffect, useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Link,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Homepage from "./pages/Homepage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
