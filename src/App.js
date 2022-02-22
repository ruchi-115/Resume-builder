import Template from "./Components/Template";
import Features from "./features";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import homepg_img1 from "./assets/home_img1.png"
import homepg_img2 from "./assets/home_img2.png"
import build_img from "./assets/team2.png"
import "./App.css";

function App() {
  return (
    <Router>
      <nav
        className="nav d-flex ps-5 align-items-center homepage"
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
            className="homepage"
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
                  className="btn btn-lg fw-bold text-white my-3 shadow-lg"
                  style={{ background: "#5049C5" }}
                >
                  Start Now
                </Link>
              </div>
              <div style={{ padding: "0rem 0rem 0rem 0rem" }}>
                <img src={homepg_img2} width="250px" height="300px" className="home-img img-fluid" alt="home img" />
              </div>

            </div>
          </section>
          <section>
            <div className=" d-flex justify-content-between my-5" style={{ width: "auto", height: "auto" }}>
              <div className=" my-3 rounded shadow-lg text-white" style={{ padding: "8rem 4rem", background: "#6D4Fc4" }} >
                <h1 className="bold fs-1">Professional templates</h1>
                <p className="fs-5">Pick one from our many attractive templates, fill in your skills and experiences
                  <p>and you are all set to go. Our completely customizable designs allow you to
                    <p>change font, colors, layout and images, making it a reflection of you,
                      with great ease.</p></p></p>
              </div>
              <div style={{ padding: "0rem 0rem 0rem 0rem" }}>
                <img src={build_img} width="550px" height="300px" className="home-img img-fluid py-5" alt="home img" />
              </div>

            </div>
          </section>
          <Features />
        </Route>
        <Route exact path="/template">
          <div className="mt-5 homepage">
            <div className="container">
              <h2>Student Resume Template</h2>
              <p>No experience? No problem!</p>
            </div>
            <div
              className="d-flex container justify-content-around align-items-start flex-wrap mt-3"
              style={{ width: "100%", height: "92vh" }}
            >
              <Link
                className="shadow mx-2"
                to="/template/1"
                style={{ width: "350px" }}
              >
                <img src="1.jpg" className="card-img" alt="..." />
              </Link>
              <Link
                className="shadow mx-2"
                to="/template/2"
                style={{ width: "350px" }}
              >
                <img src="2.jpg" className="card-img" alt="..." />
              </Link>
              <Link
                className="shadow mx-2"
                to="/template/3"
                style={{ width: "350px" }}
              >
                <img src="3.jpg" className="card-img" alt="..." />
              </Link>
              <div className="container my-5">
                <h2>Professional Resume Template</h2>
                <p>No experience? No problem!</p>
              </div>
              <Link
                className="shadow mx-2"
                to="/template/4"
                style={{ width: "350px", height: "450px" }}
              >
                <img src="temp4.jpg" className="card-img" alt="..." />
              </Link>
              <Link
                className="shadow mx-2"
                to="/template/5"
                style={{ width: "350px", height: "450px" }}
              >
                <img src="temp5.jpg" className="card-img" alt="..." />
              </Link>
              <Link
                className="shadow mx-2"
                to="/template/5"
                style={{ width: "350px", height: "450px" }}
              >
                <img src="3.jpg" className="card-img" alt="..." />
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
