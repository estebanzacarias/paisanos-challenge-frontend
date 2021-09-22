import React from "react";
import CardInfo from "./Card";
const ListCards = ({ data }) => {
  console.log(data);
  return (
    <div className="container-fluid container-list">
      <div className="row justify-content-center">
        {data &&
          data.map((frase) => (
            <div key={frase.quote} className="col-lg-11 col-12 m-0">
              <CardInfo key={frase.quote} frase={frase} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListCards;
