import React from "react";

function WorkExperience(props) {
  return (
    <section className={`d-${props.workExperience} flex-column  p-5 m-0`}>
      <h1 className="text-center pb-5">Work Expeience</h1>
      <div>
        <h3>Company 1</h3>
        <form className="row g-3 py-4">
          <div className="col-md-6">
            <label htmlFor="company1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="company1"
              value={props.company1}
              id="company1"
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="title1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="title1"
              value={props.title1}
              id="title1"
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="month"
              className="form-control my-2"
              name="datefrom1"
              value={props.datefrom1}
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">&#xa0;</label>
            <input
              type="month"
              className="form-control my-2"
              name="dateto1"
              value={props.dateto1}
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city1" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="city1"
              value={props.city1}
              id="city1"
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="country1" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="country1"
              value={props.country1}
              id="country1"
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">Description</div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description11"
              value={props.description11}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description12"
              value={props.description12}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description13"
              value={props.description13}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description14"
              value={props.description14}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
        </form>
      </div>
      <div className={`d-${props.addCompanyTag}`}>
        <h3>Company 2</h3>
        <form className="row g-3 py-4">
          <div className="col-md-6">
            <label htmlFor="company2" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="company2"
              value={props.company2}
              id="company2"
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="title2" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="title2"
              value={props.title2}
              id="title2"
              placeholder="Tittle"
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date</label>
            <input
              type="month"
              className="form-control my-2"
              name="datefrom2"
              value={props.datefrom2}
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">&#xa0;</label>
            <input
              type="month"
              className="form-control my-2"
              name="dateto2"
              value={props.dateto2}
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city2" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="city2"
              value={props.city2}
              id="city2"
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="country2" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control my-2"
              name="country2"
              value={props.country2}
              id="country2"
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">Description</div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description21"
              value={props.description21}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description22"
              value={props.description22}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description23"
              value={props.description23}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
          <div className="col-md-12">
            <textarea
              type="text"
              className="form-control my-2"
              name="description24"
              value={props.description24}
              placeholder="e.g."
              onChange={props.onChange}
            />
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className={`btn text-white d-${props.addCompanyButton} bg-dark justify-content-center fs-4 align-items-center btn-sm  px-2 py-0 shadow`}
          onClick={() => {
            props.display("showHide");
          }}
        >
          <ion-icon name="add-outline"></ion-icon>
        </button>
        <button
          className={`btn text-white d-${props.removeCompanyButton} bg-dark justify-content-center fs-4 align-items-center btn-sm  px-2 py-0 shadow`}
          onClick={() => {
            props.display("showHide");
          }}
        >
          <ion-icon name="remove-outline"></ion-icon>
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center pt-5">
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={() => {
            props.display("skills");
          }}
        >
          Back
        </button>
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={() => {
            props.display("workExperience");
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default WorkExperience;
