import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { HashRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import Load from "./components/Load";
import Home from "./components/Home";
import CO2 from "./components/Co2";
import FlowRate from "./components/FlowRate";
import Temp from "./components/Temp";
import Humidity from "./components/Humidity";
import Contacts from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(false);
  const navbarCollapse = useRef(null);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     document.getElementById("loader").classList.add("fadeout");
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 500);
  //   }, 5000);
  // }, []);

  const handleNavLinkClick = () => {
    const navbar = navbarCollapse.current;
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <>
      {loading ? (
        <div
          id="loader"
          className="load d-flex justify-content-center align-items-center"
        >
          <Load />
        </div>
      ) : (
        <Router>
          <div className="App1 d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light w-100">
              <div className="container-fluid px-4">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand" to="/">
                  <div className="glitch" data-text="Hydroponic Dashboard">
                    Hydroponic Dashboard
                  </div>
                </NavLink>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarTogglerDemo03"
                  ref={navbarCollapse}
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-NavLink Clink mx-3 p-3"
                        to="/"
                        onClick={handleNavLinkClick}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-NavLink mx-3 p-3"
                        to="/Temp"
                        onClick={handleNavLinkClick}
                      >
                        Temperature
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-NavLink mx-3 p-3"
                        to="/Humidity"
                        onClick={handleNavLinkClick}
                      >
                        Humidity
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-NavLink mx-3 p-3"
                        to="/CO2"
                        onClick={handleNavLinkClick}
                      >
                        CO2_Levels
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-NavLink mx-3 p-3"
                        to="/FlowRate"
                        onClick={handleNavLinkClick}
                      >
                        Flow_Rate
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-NavLink mx-3 p-3"
                        to="/Contacts"
                        onClick={handleNavLinkClick}
                      >
                        Contact_Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CO2" element={<CO2 />} />
            <Route exact path="/FlowRate" element={<FlowRate />} />
            <Route exact path="/Temp" element={<Temp />} />
            <Route exact path="/Humidity" element={<Humidity />} />
            <Route exact path="/Contacts" element={<Contacts />} />
          </Routes>
        </Router>
      )}
      <div className="Footer vanishIn d-flex justify-content-center">
        Design By: <p className="Footer-text">Abdul Rahman </p>
      </div>
    </>
  );
}

export default App;
