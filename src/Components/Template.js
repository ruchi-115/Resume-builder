import React, { useState } from "react";
import Header from "./Left/Header";
import Skills from "./Left/Skills";
import WorkExperience from "./Left/WorkExperience";
import Education from "./Left/Education";
import Organization from "./Left/Organization";
import Style from "./Left/Style";
import { useParams } from "react-router-dom";
import * as Right from "./Right/Right";
import Context from "../Context";

function Template() {
  const params = useParams();
  const [target, setTarget] = useState({
    fname: "",
    lname: "",
    profession: "",
    profession_description: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    linkedIn: "",
    github: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
    company1: "",
    company2: "",
    title1: "",
    title2: "",
    city1: "",
    city2: "",
    country1: "",
    country2: "",
    datefrom1: "",
    datefrom2: "",
    datefrom3: "",
    dateto1: "",
    dateto2: "",
    dateto3: "",
    degree: "",
    university: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description21: "",
    description22: "",
    description23: "",
    description24: "",
    description31: "",
    description32: "",
    description33: "",
    description34: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setTarget(() => {
      return {
        ...target,
        [name]: value,
      };
    });
  };
  const [color, setColor] = useState("primary");
  const buttonColor = (e) => {
    setColor(e);
  };
  const template = (e) => {
    const Card = Right[`Right${e}`];
    return <Card />;
  };
  const [npcounts, setNpcounts] = useState(0);
  const Next = () => {
    setNpcounts(npcounts + 1);
  };
  const Previous = () => {
    setNpcounts(npcounts - 1);
  };
  const [wcounts, setWcounts] = useState(0);
  const Wadd = () => {
    setWcounts(1);
  };
  const Wremove = () => {
    setWcounts(0);
  };
  const Print = () => {
    var printContents = document.getElementById("template").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <Context.Provider
      value={[target, onChange, color, buttonColor, wcounts, { Wadd, Wremove }]}
    >
      <div className="d-flex text-dark justify-content-around align-items-start">
        <div
          className="d-flex flex-column justify-content-center p-5 m-0"
          style={{ width: "600px", height: "100%" }}
        >
          {npcounts === 0 && <Header />}
          {npcounts === 1 && <Skills />}
          {npcounts === 2 && <WorkExperience />}
          {npcounts === 3 && <Education />}
          {npcounts === 4 && <Organization />}
          {npcounts === 5 && <Style />}
          <div className="d-flex justify-content-between align-items-center pt-5">
            <button
              className="btn bg-dark text-white fs-5 btn-lg shadow"
              disabled={npcounts === 0}
              onClick={Previous}
            >
              Back
            </button>
            {npcounts !== 5 && (
              <button
                className="btn bg-dark text-white fs-5 btn-lg shadow "
                onClick={Next}
              >
                Next
              </button>
            )}
            {npcounts === 5 && (
              <button
                className="btn bg-dark text-white fs-5 btn-lg shadow"
                onClick={Print}
              >
                Print
              </button>
            )}
          </div>
        </div>
        {template(params.id)}
      </div>
    </Context.Provider>
  );
}

export default Template;
