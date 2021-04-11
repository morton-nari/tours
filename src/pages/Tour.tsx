import React from "react";

interface TourList {
  id:number,
  name:string,
  startDate:string,
  endDate:string,
  destinations:string,
  image:string,
  status:string,
}

const Tour = (props: TourList):any => {
  return (
    <div className="card w-50 mb-5">
      <img src={props.image} alt={props.name} />
      <div className={props.status ==="NOT_STARTED" ? " bg-warning card-body" : "card-body"}>
        <div>
          <a href="yahoo.com" className="stretched-link">
            <h4>{props.name}</h4>
          </a>
          <h4 className="tour-price">{props.destinations + ""}</h4>
        </div>
      </div>
    </div>
  );
};
export default Tour;
