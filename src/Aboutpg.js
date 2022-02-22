import React from 'react'
import build_img from "./assets/team2.png"
import "./App.css";

function Aboutpg() {
    return (
        <div>
            <section>
                <div className=" d-flex justify-content-between my-5" style={{ width: "auto", height: "92vh" }}>
                    <div className=" my-3 rounded shadow-lg text-white" style={{ padding: "8rem 4rem", background: "#6D4Fc4" }} >
                        <h1 className="bold fs-1">Professional templates</h1>
                        <p className="fs-5">Pick one from our many attractive templates, fill in your skills and experiences
                            <p>and you are all set to go. Our completely customizable designs allow you to
                                <p>change font, colors, layout and images, making it a reflection of you,
                                    with great ease.</p></p></p>
                        <h1 className="bold fs-1 pt-5">Completely secure</h1>
                        <p className="fs-5">Create your resume without any of the usual hassle of signing up and creating an account.
                            <p>We do not save your data and your privacy is absolutely guaranteed.
                            </p></p>
                    </div>
                    <div className="pt-5">
                        <img src={build_img} width="550px" height="300px" className="home-img img-fluid py-5" alt="home img" />
                    </div>

                </div>
            </section></div>
    )
}

export default Aboutpg