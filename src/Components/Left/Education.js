import React from "react";

function Education(props) {
  return (
    <section className={`d-${props.education} flex-column  p-5 m-0`}>
      <h1 className="text-center pb-5">Education</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="degree"
            value={props.degree}
            id="degree"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="university" className="form-label">
            University
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="university"
            value={props.university}
            id="university"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date</label>
          <input
            type="month"
            className="form-control my-2"
            name="datefrom3"
            value={props.datefrom3}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">&#xa0;</label>
          <input
            type="month"
            className="form-control my-2"
            name="dateto3"
            value={props.dateto3}
            placeholder="Date to"
            onChange={props.onChange}
          />
        </div>
      </form>
      <div className="d-flex justify-content-between align-items-center pt-5">
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('workExperience')}}
        >
          Back
        </button>
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow "
          onClick={()=>{props.display('education')}}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Education;
