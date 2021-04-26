import React, { useState } from "react";
import "./bmi_calculator.component.scss";

const BmiCalculator = () => {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [result, setresult] = useState(0);

  const handleHeightInputChange = (e) => {
    setheight(e.target.value);
    let heightInM = e.target.value / 100;
    let heightInM2 = heightInM * heightInM;
    console.log(heightInM2);
    const bmi = weight / heightInM2;
    setresult(bmi);
  };
  const handleWeightInputChange = (e) => {
    setweight(e.target.value);
    let heightInM = height / 100;
    let heightInM2 = heightInM * heightInM;
    const bmi = e.target.value / heightInM2;
    setresult(bmi);
  };
  return (
    <div className="bmi_container">
      <div className="bmi_weight_container">
        <div className="bmi_weight_label">My Weight:</div>
        <div className="bmi_weight_input">
          <input
            name="weight"
            className="bmi_input"
            value={weight}
            onChange={handleWeightInputChange}
            type="number"
          />
        </div>
      </div>
      <div className="bmi_height_container">
        <div className="bmi_height_label">My Height:</div>
        <div className="bmi_height_input">
          <input
            name="height"
            className="bmi_input"
            value={height}
            onChange={handleHeightInputChange}
            type="number"
          />
        </div>
      </div>
      <div className="bmi_result_container">
        <div className="bmi_result_label">My BMI:</div>
        <div className="bmi_result">{result.toFixed(1)}</div>
      </div>
    </div>
  );
};

export default BmiCalculator;
