import React from "react";
import { useHistory } from "react-router-dom";

function Cards() {
  const data = [
    {
      title: "Student Section",
      Description: "No experience? No problem!",
      link: ["1", "2", "3"],
    },
    {
      title: "Experince Section",
      Description: "No experience? No problem!",
      link: ["4", "5", "6", "7", "8"],
    },
  ];
  let history = useHistory();

  const alertData = (i) => {
    let target = JSON.parse(localStorage.getItem("template"));
    if (target.npcounts !== 0 || target.wcounts !== 0) {
      if (target.fname === "") {
        localStorage.removeItem("template");
      }
    }
    if (target.fname !== "") {
      if (
        window.confirm(
          "You want to continue with the Previous Resume.\nIf yes, Please Click Ok"
        ) !== true
      ) {
        localStorage.removeItem("template");
      }
    }
    history.push(`/template/${i}`);
  };
  return (
    <div className="rect1">
      {data.map((e) => {
        return (
          <div className="pt-5" key={e.title}>
            <div className="container font">
              <h2>{e.title}</h2>
              <p>{e.Description}</p>
            </div>
            <div className="pb-3 d-flex container justify-content-around align-items-start">
              {e.link.map((i) => {
                return (
                  <button
                    type="button"
                    className="btn shadow mx-2 p-0 rounded"
                    style={{ width: "20vw" }}
                    onClick={() => {
                      alertData(i);
                    }}
                    key={i}
                  >
                    <img
                      src={`${i}.jpg`}
                      className="card-img rounded"
                      alt="..."
                    />
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
