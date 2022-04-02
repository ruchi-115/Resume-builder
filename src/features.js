import React from "react";
import "./App.css";

function Features() {
  return (
    <section className="d-flex align-items-center justify-content-center my-5">
      <div
        className="row justify-content-center align-items-start my-5"
        style={{ fontFamily: "Nunito, sans-serif" }}
      >
        <div className="col-md-4">
          <div
            class="rounded border mx-3"
            style={{ width: "25rem", height: "26rem" }}
          >
            <img src="card1_opened.svg" class="card-img-top" alt="..." />
            <div class="">
              <h3 class="text-center mt-2 fw-bold" style={{ color: "#6d4fc4" }}>
                Choose the template
              </h3>
              <p class="text-center mt-3" style={{ fontSize: "1.1rem" }}>
                Pick any from our beautiful templates that are designed to
                impress. You can personalize it and give it your own unique
                touch.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            class="rounded border mx-3"
            style={{ width: "25rem", height: "26rem" }}
          >
            <img src="card2_opened.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="text-center mt-3 fw-bold" style={{ color: "#6d4fc4" }}>
                Fill in your details
              </h3>
              <p class="text-center mt-3" style={{ fontSize: "1.1rem" }}>
                Fill in your skills, previous experiences and educational
                qualifications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            class="rounded border mx-3"
            style={{ width: "25rem", height: "26rem" }}
          >
            <img src="card3_opened.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h3 class="text-center mt-3 fw-bold" style={{ color: "#6d4fc4" }}>
                Download pdf
              </h3>
              <p class="text-center mt-3" style={{ fontSize: "1.1rem" }}>
                Download the remarkable resume you have created and send it to
                your potential employers with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
