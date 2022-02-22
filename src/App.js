import Template from "./Components/Template";
import Features from "./features";
import Aboutpg from "./Aboutpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import homepg_img1 from "./assets/home_img1.png"
import homepg_img2 from "./assets/home_img2.png"
import "./App.css";
import React, { useState, useEffect } from "react";
import Userdata from "./Components/Userdata";

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
      link: ["4", "5", "6"],
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
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);
  console.log(user);
  return (
    <Router>
      <nav
        className="nav d-flex ps-5 align-items-center homepage"
        style={{ height: "8vh", background: "#6D4Fc4" }}
      >
        <Link className="navbar-brand fs-3 text-white" to="/">
          <i
            className="bi bi-file-earmark-break-fill"
            style={{ fontSize: "40px" }}
          ></i>
          ResumeB
        </Link>
        <Link className="nav-link fs-5 text-white pb-0 rounded" to="/">
          Home
        </Link>
        <Link className="nav-link fs-5 text-white pb-0 rounded" to="/template">
          Templates
        </Link>
        <Link className="nav-link fs-4 text-white" to="/template/q">
          Data
        </Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <section
            className="font"
          >
            <div className="container-fluid d-flex justify-content-between rounded my-3 mx-5 shadow-lg" style={{ width: "auto", height: "auto" }}>
              <div className="pt-5 ">
                <img src={homepg_img1} width="450px" height="200px" className="home-img img-fluid" alt="home img" />
              </div>
              <div className=" my-5" style={{ padding: "8rem 4rem" }}>
                <h1 className="bold fs-1">Online Resume Builder</h1>
                <p className="fs-3">Effortlessly make a job-worthy resume <p>and get hired faster</p></p>
                <Link
                  to="/template"
                  className="btn btn-lg fw-bold text-white my-3 shadow-lg start-now"
                >
                  Start Now
                </Link>
              </div>
              <div style={{ padding: "0rem 0rem 0rem 0rem" }}>
                <img src={homepg_img2} width="250px" height="300px" className="home-img img-fluid" alt="home img" />
              </div>

            </div>
          </section>
          <Aboutpg />
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
        <Route exact path="/template/q">
          <Userdata user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
