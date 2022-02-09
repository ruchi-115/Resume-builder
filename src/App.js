import Template1 from "./Components/Template1/Template1";
import Template2 from "./Components/Template2/Template2";
import Template3 from "./Components/Template3/Template3";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav
        className="nav d-flex ps-4 align-items-center"
        style={{ height: "8vh", background: "#6D4Fc4" }}
      >
        <Link className="navbar-brand fs-1 text-white" to="/">
          <i
            class="bi bi-file-earmark-break-fill"
            style={{ fontSize: "40px" }}
          ></i>
          ResumeBuilder
        </Link>
        <Link className="nav-link fs-4 text-white" to="/template">
          Tempaltes
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
            </div>
          </div>
        </Route>
        <Route exact path="/template/1" component={Template1} />
        <Route exact path="/template/2" component={Template2} />
        <Route exact path="/template/3" component={Template3} />
      </Switch>
    </Router>
  );
}

export default App;
