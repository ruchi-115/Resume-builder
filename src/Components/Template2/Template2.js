import React, { useState } from "react";
import Header from "../Left/Header";
import Right2 from "./Right2";
import Skills from "../Left/Skills";
import WorkExperience from "../Left/WorkExperience";
import Education from "../Left/Education";
import Organization from "../Left/Organization";
import Style from "../Left/Style";

function Template2() {
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
    skill9: "",
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
  const [header, setHeader] = useState("flex");
  const [skill, setSkill] = useState("none");
  const [workExperience, setWorkExperience] = useState("none");
  const [education, setEducation] = useState("none");
  const [organization, setOrganization] = useState("none");
  const [style, setStyle] = useState("none");
  const [addCompanyTag, setAddCompanyTag] = useState("none");
  const [addCompanyText, setAddCompanytext] = useState("none");
  const [addCompanyButton, setAddCompanyButton] = useState("flex");
  const [removeCompanyButton, setRemoveCompanyButton] = useState("none");
  const display = (e) => {
    switch (e) {
      case "header":
        if (header === "flex") {
          setHeader("none");
          setSkill("flex");
        } else {
          setHeader("flex");
          setSkill("none");
        }
        break;
      case "skills":
        if (skill === "flex") {
          setSkill("none");
          setWorkExperience("flex");
        } else {
          setSkill("flex");
          setWorkExperience("none");
        }
        break;
      case "workExperience":
        if (workExperience === "flex") {
          setWorkExperience("none");
          setEducation("flex");
        } else {
          setWorkExperience("flex");
          setEducation("none");
        }
        break;
      case "education":
        if (education === "flex") {
          setEducation("none");
          setOrganization("flex");
        } else {
          setEducation("flex");
          setOrganization("none");
        }
        break;
      case "organization":
        if (organization === "flex") {
          setOrganization("none");
          setStyle("flex");
        } else {
          setOrganization("flex");
          setStyle("none");
        }
        break;
      case "print":
        var printContents = document.getElementById("template").innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        break;
      case "showHide":
        if (addCompanyTag === "block" || addCompanyText === "block") {
          setAddCompanyTag("none");
          setAddCompanytext("none");
          setAddCompanyButton("flex");
          setRemoveCompanyButton("none");
        } else {
          setAddCompanyTag("block");
          setAddCompanytext("block");
          setAddCompanyButton("none");
          setRemoveCompanyButton("flex");
        }
        break;
      default:
        console.log("Error");
    }
  };

  const [color, setColor] = useState("success");
  let buttonColor = (e) => {
    setColor(e);
  };

  return (
    <div className="d-flex text-dark justify-content-around align-items-start">
      <div
        className="d-flex flex-column justify-content-center"
        style={{ width: "600px", height: "100%" }}
      >
        <Header
          onChange={onChange}
          fname={target.fname}
          lname={target.lname}
          profession={target.profession}
          profession_description={target.profession_description}
          email={target.email}
          phone={target.phone}
          city={target.city}
          country={target.country}
          linkedIn={target.linkedIn}
          github={target.github}
          header={header}
          display={display}
        />
        <Skills
          onChange={onChange}
          skill1={target.skill1}
          skill2={target.skill2}
          skill3={target.skill3}
          skill4={target.skill4}
          skill5={target.skill5}
          skill6={target.skill6}
          skill7={target.skill7}
          skill8={target.skill8}
          skill9={target.skill9}
          skill={skill}
          display={display}
        />

        <WorkExperience
          onChange={onChange}
          company1={target.company1}
          company2={target.company2}
          title1={target.title1}
          title2={target.title2}
          datefrom1={target.datefrom1}
          datefrom2={target.datefrom2}
          dateto1={target.dateto1}
          dateto2={target.dateto2}
          city1={target.city1}
          city2={target.city2}
          country1={target.country1}
          country2={target.country2}
          description11={target.description11}
          description12={target.description12}
          description13={target.description13}
          description14={target.description14}
          description21={target.description21}
          description22={target.description22}
          description23={target.description23}
          description24={target.description24}
          workExperience={workExperience}
          display={display}
          addCompanyTag={addCompanyTag}
          addCompanyButton={addCompanyButton}
          removeCompanyButton={removeCompanyButton}
        />
        <Education
          onChange={onChange}
          degree={target.degree}
          university={target.university}
          datefrom3={target.datefrom3}
          dateto3={target.dateto3}
          education={education}
          display={display}
        />
        <Organization
          onChange={onChange}
          description31={target.description31}
          description32={target.description32}
          description33={target.description33}
          description34={target.description34}
          organization={organization}
          display={display}
        />
        <Style style={style} display={display} buttonColor={buttonColor} />
      </div>
      <Right2
        fname={target.fname}
        lname={target.lname}
        profession={target.profession}
        profession_description={target.profession_description}
        email={target.email}
        phone={target.phone}
        city={target.city}
        country={target.country}
        linkedIn={target.linkedIn}
        github={target.github}
        skill1={target.skill1}
        skill2={target.skill2}
        skill3={target.skill3}
        skill4={target.skill4}
        skill5={target.skill5}
        skill6={target.skill6}
        skill7={target.skill7}
        skill8={target.skill8}
        skill9={target.skill9}
        company1={target.company1}
        company2={target.company2}
        title1={target.title1}
        title2={target.title2}
        city1={target.city1}
        city2={target.city2}
        country1={target.country1}
        country2={target.country2}
        datefrom1={target.datefrom1}
        datefrom2={target.datefrom2}
        datefrom3={target.datefrom3}
        dateto1={target.dateto1}
        dateto2={target.dateto2}
        dateto3={target.dateto3}
        degree={target.degree}
        university={target.university}
        description11={target.description11}
        description12={target.description12}
        description13={target.description13}
        description14={target.description14}
        description21={target.description21}
        description22={target.description22}
        description23={target.description23}
        description24={target.description24}
        description31={target.description31}
        description32={target.description32}
        description33={target.description33}
        description34={target.description34}
        addCompanyText={addCompanyText}
        color={color}
      />
    </div>
  );
}

export default Template2;
