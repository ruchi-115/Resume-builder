import Template from "./Components/Template";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <nav
        className="nav d-flex ps-5 align-items-center"
        style={{ height: "8vh", background: "#6D4Fc4" }}
      >
        <Link className="navbar-brand fs-3 text-white" to="/">
          <i
            class="bi bi-file-earmark-break-fill pb-2"
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
      </nav>
      <Switch>
        <Route exact path="/">
          <section
            className=""
          >
            <div className="container-fluid d-flex justify-content-between rounded my-3 mx-5 shadow-lg" style={{ width: "auto", height: "auto" }}>
              <div className="pt-5 ">
                <img src="assets/img1.png" width="450px" height="200px" className="home-img img-fluid" alt="home img"/>
              </div>
              <div className=" my-5" style={{padding: "8rem 4rem"}}>
                <h1 className="bold fs-1">Online Resume Builder</h1>
                  <p className="fs-3">Effortlessly make a job-worthy resume <p>and get hired faster</p></p>
                <Link
                  to="/template"
                  className="btn btn-lg fw-bold text-white my-3 shadow-lg"
                  style={{ background: "#5049C5" }}
                >
                  Start Now
                </Link>
              </div>
              <div style={{padding: "0rem 0rem 0rem 0rem"}}>
                <img src="assets/img2(1).png" width="250px" height="300px" className="home-img img-fluid" alt="home img" />
              </div>
              
            </div>
          </section>

        </Route>
        <Route exact path="/template">
          <div className="mt-5">
            <div className="container">
              <h2>Student Resume Template</h2>
              <p>No experience? No problem!</p>
            </div>
            <div
              className="d-flex container justify-content-around align-items-start"
              style={{ width: "100%", height: "92vh" }}
            >
              <Link
                className="shadow mx-2"
                to="/template/1"
                style={{ width: "350px" }}
              >
                <img src="assets/1.jpg" className="card-img" alt="..." />
              </Link>
              <Link
                className="shadow mx-2"
                to="/template/2"
                style={{ width: "350px" }}
              >
                <img src="assets/2.jpg" className="card-img" alt="..." />
              </Link>
              <Link
                className="shadow mx-2"
                to="/template/3"
                style={{ width: "350px" }}
              >
                <img src="assets/3.jpg" className="card-img" alt="..." />
              </Link>
            </div>
          </div>
        </Route>
        <Route exact path="/template/:id" component={Template} />
      </Switch>
    </Router>
  );
}

export default App;
