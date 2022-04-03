import Template from "./Components/Template";
import Features from "./features";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Alert from "./Alert";

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
    let target = JSON.parse(localStorage.getItem("template"));
    if (!(target.fname === "")) {
      // const ans = alert("your data");
      // console.log(ans);
      // return <Alert />;
    }
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);
  return (
    <Router>
      <Alert />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
          <About />
          <Features />
        </Route>
        <Route exact path="/template">
          <div className="position-relative rect1">
            {/* <div
              className="position-absolute "
              style={{ zIndex: -1, height: "100vh", top: "0px", right: "0px" }}
            >
              <svg
                width="100vw"
                height="100vh"
                viewBox="0 0 100vw 100vh"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="1099"
                  width="200vw"
                  height="150"
                  transform="rotate(-34.9659 0 987.447)"
                  fill="#6C63FF"
                  fill-opacity="0.68"
                />
              </svg>
            </div> */}

            {data.map((e) => {
              return (
                <div className="pt-5">
                  <div className="container font">
                    <h2>{e.title}</h2>
                    <p>{e.Description}</p>
                  </div>
                  <div className="pb-3 d-flex container justify-content-around align-items-start">
                    {e.link.map((i) => {
                      return (
                        <button
                          type="button"
                          className="btn shadow mx-2 p-0"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          style={{ width: "20vw" }}
                          onClick={alertData}
                          // to={`/template/${i}`}
                        >
                          <img
                            src={`${i}.jpg`}
                            className="card-img"
                            alt="..."
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Route>
        <Route exact path="/template/:id">
          <Template Print={Print} />
        </Route>
      </Switch>
      {/* <footer
        className="text-center py-3 text-light"
        style={{ backgroundColor: "#6d4fc4" }}
      >
        © 2022 Copyright RB
      </footer> */}
    </Router>
  );
}

export default App;
