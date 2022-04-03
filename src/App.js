import Template from "./Components/Template";
import Features from "./features";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

function App() {
  const data = [
    {
      title: "Student Resume Template",
      Description: "No experience? No problem!",
      link: ["1", "2", "3"],
    },
    {
      title: "Experince Resume Template",
      Description: "No experience? No problem!",
      link: ["4", "5", "6", "7", "8"],
    },
  ];
  const [user, setUser] = useState(() => {
    let savedData = localStorage.getItem("data");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });
  const Print = (e) => {
    setUser(() => {
      return [...user, e];
    });
  };
  const alertData = () => {
    if (!user.fname === "") {
      console.log("hii");
    }
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
          <About />
          <Features />
        </Route>
        <Route exact path="/template">
          {data.map((e) => {
            return (
              <div className="mt-5">
                <div className="container font">
                  <h2>{e.title}</h2>
                  <p>{e.Description}</p>
                </div>
                <div className="pb-3 d-flex container justify-content-around align-items-start">
                  {e.link.map((i) => {
                    return (
                      <Link
                        className="shadow mx-2"
                        to={`/template/${i}`}
                        style={{ width: "20vw" }}
                        onClick={alertData}
                      >
                        <img src={`${i}.jpg`} className="card-img" alt="..." />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Route>
        <Route exact path="/template/:id">
          <Template Print={Print} />
        </Route>
      </Switch>
      <footer
        className="text-center py-3 text-light"
        style={{ backgroundColor: "#6d4fc4" }}
      >
        © 2022 Copyright RB
      </footer>
    </Router>
  );
}

export default App;
