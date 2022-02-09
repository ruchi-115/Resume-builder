import React from "react";

function Organization(props) {
  return (
    <section className={`d-${props.organization} flex-column  p-5 m-0`}>
      <h1 className="text-center pb-5">Organization</h1>
      <form className="form-row m-2">
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description31"
            value={props.description31}
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description32"
            value={props.description32}
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description33"
            value={props.description33}
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <textarea
            type="text"
            className="form-control my-2"
            name="description34"
            value={props.description34}
            placeholder="e.g."
            onChange={props.onChange}
          />
        </div>
      </form>
      
      <div className="d-flex justify-content-between align-items-center pt-5">
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('education')}}
        >
          Back
        </button>
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('organization')}}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Organization;
