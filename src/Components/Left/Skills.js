import React from "react";

function Skills(props) {
  return (
    <section className={`d-${props.skill} flex-column p-5 m-0`}>
      <h1 className="text-center pb-5">Skills</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="1" className="form-label">
            Skill-1
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill1"
            value={props.skill1}
            id="1"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="2" className="form-label">
            Skill-2
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill2"
            value={props.skill2}
            id="2"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="3" className="form-label">
            Skill-3
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill3"
            value={props.skill3}
            id="3"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="4" className="form-label">
            Skill-4
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill4"
            value={props.skill4}
            id="4"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="5" className="form-label">
            Skill-5
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill5"
            value={props.skill5}
            id="5"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="6" className="form-label">
            Skill-6
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill6"
            value={props.skill6}
            id="6"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="7" className="form-label">
            Skill-7
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill7"
            value={props.skill7}
            id="7"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className=" col-md-6">
          <label htmlFor="8" className="form-label">
            Skill-8
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="skill8"
            value={props.skill8}
            id="8"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
      </form>
      <div className="d-flex justify-content-between align-items-center pt-5">
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('header')}}
        >
          Back
        </button>
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('skills')}}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Skills;
