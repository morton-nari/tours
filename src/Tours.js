import React from "react";
import Tour from "./pages/Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="container">
        <div className="d-flex flex-column align-items-center ">
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Tours;
