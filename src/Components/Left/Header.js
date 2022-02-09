import React from "react";

function Header(props) {
  return (
    <section className={`d-${props.header} flex-column  p-5 m-0`}>
      <h1 className="text-center pb-5">Header</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="heading_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="fname"
            value={props.fname}
            id="heading_name"
            placeholder="e.g. Jhon"
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="lname"
            value={props.lname}
            id="heading_name"
            placeholder="e.g. Doe"
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="heading_profession" className="form-label">
            Profession
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="profession"
            value={props.profession}
            id="heading_profession"
            placeholder="e.g. Business Develpment Manager"
            onChange={props.onChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="heading_description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control my-2"
            name="profession_description"
            value={props.profession_description}
            id="heading_description"
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control my-2"
            name="email"
            value={props.email}
            id="heading_email"
            placeholder="e.g. jhon.doe@gmail.com"
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="phone"
            value={props.phone}
            id="heading_phone"
            placeholder="e.g. 202-555-0166"
            onChange={props.onChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="heading_city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="city"
            value={props.city}
            id="heading_city"
            placeholder="e.g. New York"
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="heading_country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="country"
            value={props.country}
            id="heading_country"
            placeholder="e.g. USA"
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="heading_linkedIn" className="form-label">
            LinkedIn
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="linkedIn"
            value={props.linkedIn}
            id="heading_linkedIn"
            placeholder="e.g. linkedin.com"
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="heading_github" className="form-label">
            Github
          </label>
          <input
            type="text"
            className="form-control my-2"
            name="github"
            value={props.github}
            id="heading_github"
            placeholder="e.g. github.com"
            onChange={props.onChange}
          />
        </div>
      </form>
      <div className="d-flex justify-content-end pt-5">
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('header')}}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Header;
