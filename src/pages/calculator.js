import React from "react";
import "./calculator.css";
import FoodPicker from "../components/FoodPicker";

function calculator() {
  return (
    <div>
      <h1>Here you can calculate the emissions of your foods and drinks!</h1>
      <div>
        <div className="flex-container">
          <div className="row">
            <FoodPicker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default calculator;
