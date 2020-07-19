import React from "react";
import Card from "./Card";

const CardList = ({ Data }) => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {Data.length > 0 &&
            Data.map &&
            Data.map((item, key) => (
              <div className="col-md-4" key={key}>
                <Card Data={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
