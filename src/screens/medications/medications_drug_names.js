import React from "react";
import { Link } from "react-router-dom";
import { Medications } from "../../helpers/content";
import "./medications_drug_names.scss";
import Tablets from "../../assets/images/MedicationsImg/Tablets.svg";
import CaretRight from "../../assets/images/MedicationsImg/CaretRight.svg";

const GroupNamePage = () => {
  const removeSpace = /[\s()]/g;

  return (
    <div className="medication_drug_names_container">
      <h1>My Prescription</h1>
      <ul>
        {Medications.data.map((groupName, index) => (
          <li key={index} className="border">
            <Link to={`/group/${groupName.group.replace(removeSpace, "")}`}>
              <div className="grp_name_div">
                <img src={Tablets} alt="Tablets" className="tablets_img" />
                <div className="text_div">
                  <h3>{groupName.group}</h3>
                  <p>{groupName.content[0].genericName.slice(0, 20)}...</p>
                </div>
                <img src={CaretRight} className="care_right_img" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupNamePage;
