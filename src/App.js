import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Privacity from "./Components/Privacidade";
import Login from "./App/login";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página principal com todas as seções */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Work />
                <Testimonial />
                <Footer />
                <Analytics />
              </>
            }
            />
          {/* Página de login separada */}
          <Route path="/privacidade" element={<Privacity />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
