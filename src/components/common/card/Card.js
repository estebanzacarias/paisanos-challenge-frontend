import React from "react";
import "./index.css";
const CardInfo = ({ frase }) => {
  return (
    <>
      <div className="card mb-5 p-2">
        <div className="row">
          <div
            className="col-lg-2 col-12 p-3 card-order" 
            style={{
              order: frase.characterDirection !== "Right" ? "1" : "2",
            }}
          >
            <img src={frase.image} className="card-image " />
          </div>
          <div
            className="card-body col-12 col-lg-10 mt-auto mb-auto ml-auto mr-auto card-align"
            style={{
              order: frase.characterDirection !== "Right" ? "2" : "1",
              textAlign: frase.characterDirection == "Right" ? "end" : "start",
            }}
          >
            <h1 className="card-text">{frase.quote}</h1>
            <p className="card-author">{frase.character}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
