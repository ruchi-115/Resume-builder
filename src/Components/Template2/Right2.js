import React from "react";
function Right2(props) {
  return (
    <div className="bg-white mx-2 mt-4 text-dark d-flex justify-content-center align-items-center">
      <div className="shadow-lg" id="template" style={{ width: "800px" }}>
        <section className="d-flex p-5 pb-2 m-0">
          <div className="p-0 m-0 ">
            <h1 className={`d-flex text-${props.color} mb-4 m-0 p-0 fw-bolder`}>
              {props.fname === "" ? "John" : props.fname}{" "}
              {props.lname === "" ? "Doe" : props.lname}
            </h1>
            <h5 className="m-0 my-1 fw-bold ">
              {props.profession === ""
                ? "Business Develpment Manager"
                : props.profession}
            </h5>
            <div className="m-0 mb-1">
              {props.profession_description === ""
                ? " Professional Lorem ipsum dolor sit amet, consectetur adipisicingelit Nesciunt porro consectetur libero"
                : props.profession_description}
            </div>
          </div>
          <div className="d-flex justify-content-end flex-column">
            <div className=" my-2 p-0 d-flex flex-row-reverse fw-lighter">
              <div className={`text-${props.color} mx-1`}>
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div>
                {props.email === "" ? "jhon.doe@gmail.com" : props.email}
              </div>
            </div>
            <div className=" my-2  p-0 d-flex flex-row-reverse fw-lighter">
              <div className={`text-${props.color} mx-1`}>
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div>{props.phone === "" ? "202-555-0166" : props.phone}</div>
            </div>
            <div className=" d-flex my-2 flex-row-reverse  p-0 fw-lighter">
              <div className={`text-${props.color} mx-1`}>
                <ion-icon name="location-outline"></ion-icon>
              </div>
              {props.city === "" ? "New York" : props.city},
              {props.country === "" ? "USA" : props.country}
            </div>
            <div className=" my-2 p-0 d-flex  flex-row-reverse fw-lighter">
              <div className={`text-${props.color} mx-1`}>
                <ion-icon name="logo-linkedIn"></ion-icon>
              </div>
              <div>
                {props.linkedIn === "" ? "linkedin.com" : props.linkedIn}
              </div>
            </div>
            <div className=" my-2  p-0 d-flex  flex-row-reverse fw-lighter">
              <div className={`text-${props.color} mx-1`}>
                <ion-icon name="logo-github"></ion-icon>
              </div>
              <div> {props.github === "" ? "github.com" : props.github}</div>
            </div>
          </div>
        </section>
        <section className="px-5">
          <div className="m-0 ">
            <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <h5
              className={`text-${props.color} text-center fst-italic fw-bold`}
            >
              SKILLS
            </h5>
            <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <div className="d-flex my-3 ">
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill1 === "" ? "SEO" : props.skill1}
              </button>
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill2 === "" ? "Public Speaking" : props.skill2}
              </button>
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill3 === "" ? "Negotiation" : props.skill3}
              </button>
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill4 === "" ? "Decision Making" : props.skill4}
              </button>
            </div>
            <div className="d-flex my-1">
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill5 === "" ? "Research & Strategy" : props.skill5}
              </button>
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill6 === "" ? "Emotional Intelligence" : props.skill6}
              </button>
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill7 === "" ? "Outbound Marketing" : props.skill7}
              </button>
              <button
                className={`btn btn-${props.color} text-white m-1 btn-sm`}
              >
                {props.skill8 === "" ? "Email Marketing" : props.skill8}
              </button>
            </div>
          </div>
          <div className="my-3">
            <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <h5
              className={`text-${props.color} text-center fst-italic fw-bold`}
            >
              WORK EXPERINCE
            </h5>
            <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <div className="my-3">
              <h5 className="m-0 mb-1 p-0 fw-bold">
                {props.company1 === ""
                  ? "Business Development Manager"
                  : props.company1}
              </h5>
              <h6 className="m-0 p-0">
                {props.title1 === "" ? "AirState Solutions" : props.title1}
              </h6>
              <div className="d-flex justify-content-between m-0 p-0">
                <div className="fw-lighter d-flex">
                  {props.datefrom1 === "" ? "2014-09" : props.datefrom1} /{" "}
                  {props.dateto1 === "" ? "2017-06" : props.dateto1}
                </div>
                <div className="fw-lighter d-flex">
                  {props.city1 === "" ? "New York" : props.city1},
                  {props.country1 === "" ? "USA" : props.country1}
                </div>
              </div>
              <div className="m-0 p-0">
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description11 === ""
                      ? "Successfully Managed."
                      : props.description11}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description12 === ""
                      ? "Developed and Implemented new Marketing."
                      : props.description12}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description13 === ""
                      ? "Improve the processes and customer service."
                      : props.description13}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description14 === ""
                      ? "Implementing a new Loyalty program."
                      : props.description14}
                  </div>
                </div>
              </div>
            </div>
            <div className={`my-3 d-${props.addCompanyText}`}>
              <h5 className="m-0 mb-1 p-0 fw-bold">
                {props.company2 === ""
                  ? "Business Development Manager"
                  : props.company2}
              </h5>
              <h6 className="m-0 p-0">
                {props.title2 === "" ? "AirState Solutions" : props.title2}
              </h6>
              <div className="d-flex justify-content-between m-0 p-0">
                <div className="fw-lighter d-flex">
                  <div>
                    {props.datefrom2 === "" ? "2014-09" : props.datefrom2}
                  </div>
                  &#xa0;/&#xa0;
                  <div>{props.dateto2 === "" ? "2017-06" : props.dateto2}</div>
                </div>
                <div className="fw-lighter d-flex">
                  <div>{props.city2 === "" ? "Chicago" : props.city2}</div>,
                  <div>{props.country2 === "" ? "USA" : props.country2}</div>
                </div>
              </div>
              <div className="m-0 p-0">
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description21 === ""
                      ? "Successfully Managed."
                      : props.description21}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description22 === ""
                      ? "Developed and Implemented new Marketing."
                      : props.description22}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description23 === ""
                      ? "Improve the processes and customer service."
                      : props.description23}
                  </div>
                </div>
                <div className="m-0 p-0 d-flex">
                  <code className="fs-5 m-0 p-0">&#x2015;</code>
                  &#xa0;&#xa0;
                  <div>
                    {props.description24 === ""
                      ? "Implementing a new Loyalty program."
                      : props.description24}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3">
          <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <h5 className={`text-${props.color} fst-italic text-center fw-bold`}>
              EDUCATION
            </h5>
            <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <div className='my-3'>
              <h5 className="m-0 mb-1 p-0 fw-bold">
                {props.degree === ""
                  ? "MSc in Economics and Business Administration"
                  : props.degree}
              </h5>
              <h6 className="m-0 p-0">
                {props.university === ""
                  ? "The University of Chicago"
                  : props.university}
              </h6>
              <div className="fw-lighter m-0 p-0 d-flex">
                <div>
                  {props.datefrom3 === "" ? "2008-09" : props.datefrom3}
                </div>{" "}
                &#xa0;/&#xa0;
                <div>{props.dateto3 === "" ? "2010-06" : props.dateto3}</div>
              </div>
            </div>
          </div>
          <div className="my-3 pb-4">
          <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <h5 className={`text-${props.color} fst-italic text-center fw-bold`}>
              ORGANIZATION
            </h5>
            <hr className={`m-0 text-${props.color}`} />
            <hr className={`m-0 text-${props.color}`} />
            <div className="my-3 p-0">
              <div className="m-0 p-0 d-flex">
                <code className="fs-5 m-0 p-0">&#x2015;</code>
                &#xa0;&#xa0;
                <div>
                  {props.description31 === ""
                    ? "Successfully Managed."
                    : props.description31}
                </div>
              </div>
              <div className="m-0 p-0 d-flex">
                <code className="fs-5 m-0 p-0">&#x2015;</code>
                &#xa0;&#xa0;
                <div>
                  {props.description32 === ""
                    ? "Developed and Implemented new Marketing."
                    : props.description32}
                </div>
              </div>
              <div className="m-0 p-0 d-flex">
                <code className="fs-5 m-0 p-0">&#x2015;</code>
                &#xa0;&#xa0;
                <div>
                  {props.description33 === ""
                    ? "Improve the processes and customer service."
                    : props.description33}
                </div>
              </div>
              <div className="m-0 p-0 d-flex">
                <code className="fs-5 m-0 p-0">&#x2015;</code>
                &#xa0;&#xa0;
                <div>
                  {props.description34 === ""
                    ? "Implementing a new Loyalty program."
                    : props.description34}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Right2;
