import React from "react";
import "./Hire.scss";

const Hire = () => {
  return (
    <div className="hire">
      <div className="hire__container">
        <div className="hire__background"></div>
        
        <div className="hire__content">
          <div className="hire__text-content">
            <h2 className="hire__title">Ready for your next hire?</h2>
            <p className="hire__subtitle">
              Along with conventional advertising and below the line activities, organizations and 
              corporate bodies have come to realize that they need to invest.
            </p>
          </div>
          
          <button className="hire__button">
            Apply and Start Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;