import React, { useState } from 'react'
import './bmi_calculator.component.scss'

const BmiCalculator = () => {
    const [weight, setweight] = useState(0)
    const [height, setheight] = useState(0)
    const [result, setresult] = useState(0)
    
    const handleHeightInputChange = (e) => {
        setheight(e.target.value)
        const bmi = weight / (e.target.value/100)
        setresult(bmi)
    }
    const handleWeightInputChange = (e) => {
        setweight(e.target.value)
        const bmi = (e.target.value / (height / 100))
        setresult(bmi)
    }
    return (
        <div className="bmi_container">
            <div className="bmi_weight_container">
                <div className="bmi_weight_label">
                    My Weight:
                </div>
                <div className="bmi_weight_input">
                    <input name="weight" className="bmi_input" value={weight} onChange={handleWeightInputChange} type="number" />
                </div>
            </div>
            <div className="bmi_height_container">
                <div className="bmi_height_label">
                    My Height:
                </div>
                <div className="bmi_height_input">
                    <input name="height" className="bmi_input" value={height} onChange={handleHeightInputChange} type="number" />
                </div>
            </div>
            <div className="bmi_result_container">
                <div className="bmi_result_label">
                    My BMI:
                </div>
                <div className="bmi_result">
                    {result.toFixed(1)}
                </div>
            </div>
        </div>
    )
}

export default BmiCalculator
