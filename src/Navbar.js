import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="nav d-flex ps-5 align-items-center"
      style={{ height: "10vh", background: "#6D4Fc4" }}
    >
      <h1 className="navbar-brand fs-1 text-white">
        {/* <i
          className="bi bi-file-earmark-break-fill"
          style={{ fontSize: "40px" }}
        ></i> */}
        ResumeB
      </h1>
      <Link className="nav-link fs-4 text-white p-0 ms-5 px-2 rounded" to="/">
        Home
      </Link>
      <Link
        className="nav-link fs-4 text-white p-0 ms-4 px-2 rounded"
        to="/template"
      >
        Templates
      </Link>
    </nav>
  );
}

export default Navbar;
