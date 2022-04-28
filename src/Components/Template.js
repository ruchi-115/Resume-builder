import React, { useState, useEffect } from "react";
import Header from "./Left/Header";
import Skills from "./Left/Skills";
import WorkExperience from "./Left/WorkExperience";
import Education from "./Left/Education";
import Organization from "./Left/Organization";
import Style from "./Left/Style";
import { useParams } from "react-router-dom";
import * as Right from "./Right/Right";
import Context from "../Context";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function Template() {
  const [target, setTarget] = useState(() => {
    let savedTemplate = localStorage.getItem("template");
    if (savedTemplate) {
      return JSON.parse(savedTemplate);
    } else {
      return {
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
        color: "primary",
        npcounts: 0,
        wcounts: 0,
      };
    }
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
  useEffect(() => {
    localStorage.setItem("template", JSON.stringify(target));
  }, [target]);
  const params = useParams();
  const buttonColor = (e) => {
    setTarget(() => {
      return { ...target, color: e };
    });
  };

  const template = (e) => {
    const Card = Right[`Right${e}`];
    return <Card />;
  };
  const Next = () => {
    setTarget(() => {
      return { ...target, npcounts: target.npcounts + 1 };
    });
  };
  const Previous = () => {
    setTarget(() => {
      return { ...target, npcounts: target.npcounts - 1 };
    });
  };
  const Wadd = () => {
    setTarget(() => {
      return { ...target, wcounts: 1 };
    });
  };
  const Wremove = () => {
    setTarget(() => {
      return { ...target, wcounts: 0 };
    });
  };
  const Print = () => {
    var printContents = document.getElementById("template").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const downloadPdfDocument = () => {
    const template = document.getElementById("template");
    html2canvas(template).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "px",
        format: [700, 562],
        // format: [265, 300],
        // 233 350
      });
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`save.pdf`);
    });
  };
  return (
    <Context.Provider
      value={[target, onChange, buttonColor, { Wadd, Wremove }]}
    >
      <div className="d-flex text-dark justify-content-around align-items-start">
        <div
          className="d-flex flex-column justify-content-center py-5 m-0"
          style={{ maxWidth: "550px", height: "100%" }}
        >
          {target.npcounts === 0 && <Header />}
          {target.npcounts === 1 && <Skills />}
          {target.npcounts === 2 && <WorkExperience />}
          {target.npcounts === 3 && <Education />}
          {target.npcounts === 4 && <Organization />}
          {target.npcounts === 5 && <Style />}
          <div className="d-flex justify-content-between align-items-center pt-5">
            <button
              className="btn bg-dark text-white fs-5 btn-lg shadow"
              disabled={target.npcounts === 0}
              onClick={Previous}
            >
              Back
            </button>
            {target.npcounts !== 5 && (
              <button
                className="btn bg-dark text-white fs-5 btn-lg shadow "
                onClick={Next}
              >
                Next
              </button>
            )}
            {target.npcounts === 5 && (
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
