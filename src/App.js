import Template from "./Components/Template";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Userdata from "./Components/Userdata";

function App() {
  const data = [
    {
      title: "Student Resume Template",
      Description: "No experience? No problem!",
      link: ["1", "2", "3","1"],
    },
    {
      title: "Experince Resume Template",
      Description: "No experience? No problem!",
      link: ["1", "2", "3"],
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
        className="nav d-flex ps-4 align-items-center"
        style={{ height: "8vh", background: "#6D4Fc4" }}
      >
        <Link className="navbar-brand fs-1 text-white" to="/">
          <i
            className="bi bi-file-earmark-break-fill"
            style={{ fontSize: "40px" }}
          ></i>
          ResumeBuilder
        </Link>
        <Link className="nav-link fs-4 text-white" to="/template">
          Tempaltes
        </Link>
        <Link className="nav-link fs-4 text-white" to="/template/q">
          Data
        </Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <section
            className="d-flex  justify-content-around flex-column align-items-center container p-3"
            style={{ width: "100%", height: "92vh" }}
          >
            <h1 className="">Welcome to our Resume Website</h1>
            <div className="text-center">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </div>
            <Link
              to="/template"
              className="btn btn-lg  fw-bold text-white my-5 shadow"
              style={{ background: "#6D4Fc4" }}
            >
              Create Resume
            </Link>
          </section>
        </Route>
        <Route exact path="/template">
          {data.map((e) => {
            return (
              <div className="mt-5">
                <div className="container">
                  <h2>{e.title}</h2>
                  <p>{e.Description}</p>
                </div>
                <div className="d-flex container justify-content-around align-items-start">
                  {e.link.map((i) => {
                    return (
                      <Link
                        className="shadow mx-2"
                        to={`/template/${i}`}
                        style={{ width: "15vw" }}
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
