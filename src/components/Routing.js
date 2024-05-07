import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import Alert from "./Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  const [mode, setMode] = useState("light"); // Whether the dark is Enabled or Not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "SetInterval Effect";
      }, 2000);
      setInterval(() => {
        document.title = "Repeated";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} activeStyle={{ color: "#0D6EFD" }} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="Enter the text to analyze below" mode={mode} />} />
          <Route exact path="/about" element={<About showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
