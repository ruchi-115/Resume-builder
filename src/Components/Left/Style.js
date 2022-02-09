import React from "react";

function Style(props) {
  return (
    <section className={`d-${props.style} flex-column  p-5 m-0`}>
      <h1 className="text-center pb-5">Style</h1>
      <div className="d-flex  justify-content-between">
        <button
          className="btn btn-info btn-lg shadow"
          onClick={() =>{props.buttonColor('info')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-dark btn-lg shadow"
          onClick={() =>{props.buttonColor('dark')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-danger btn-lg shadow"
          onClick={() =>{props.buttonColor('danger')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-success btn-lg shadow"
          onClick={() =>{props.buttonColor('success')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-secondary btn-lg shadow"
          onClick={() =>{props.buttonColor('secondary')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
        <button
          className="btn btn-primary btn-lg shadow"
          onClick={() =>{props.buttonColor('primary')}}
          style={{ width: "50px", height: "50px" }}
        ></button>
      </div>
      <div className="d-flex justify-content-between align-items-center pt-5">
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('organization')}}
        >
          Back
        </button>
        <button
          className="btn bg-dark text-white fs-5 btn-lg shadow"
          onClick={()=>{props.display('print')}}
        >
          Print
        </button>
      </div>
    </section>
  );
}

export default Style;
