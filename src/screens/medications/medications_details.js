import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Medications } from "../../helpers/content";
import Tablets from "../../assets/images/MedicationsImg/Tablets.svg";
import GenericName from "../../assets/images/MedicationsImg/GenericName.svg";
import MedicationUses from "../../assets/images/MedicationsImg/MedicationUses.svg";
import Comments from "../../assets/images/MedicationsImg/Comments.svg";
import "../medications/medications_details.scss";

import ArrowLeft from "../../assets/images/MedicationsImg/ArrowLeft.svg";
// import ArrowRight from "../../assets/images/MedicationsImg/ArrowRight.svg";

const MedicationDetailsPage = () => {
  const { groupName } = useParams();

  const modifiedGroupName = groupName.replace(/[\s()]/g, "");

  const matchedGroup = Medications.data.find(
    (group) => group.group.replace(/[\s()]/g, "") === modifiedGroupName
  );

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="medication_container">
      <div className="medication_inner_container">
        <div className="group_name_div">
          <img src={Tablets} alt="Tablets" />
          <div>
            <span>Group Name</span>
          </div>
          <h1>{matchedGroup.group}</h1>
        </div>
        <div className="generic_name_div div_border">
          <div className="flex">
            <img src={GenericName} alt="GenericNames" />

            <h4>Generic Name</h4>
          </div>
          <h5>{matchedGroup.content[0].genericName}</h5>
        </div>
        <div className="generic_name_div div_border">
          <div className="flex">
            <img src={MedicationUses} alt="MedicationUses" />

            <h4>Medication Uses</h4>
          </div>
          {matchedGroup.content[0].medicationUse.map(
            (medication, index) => (
              <h5 key={index}>{medication}</h5>
            )
          )}
        </div>
        <div className="generic_name_div div_border">
          <div className="flex">
            <img src={Comments} alt="Comments" />
            <h4>Comments</h4>
          </div>
          <h5>
            <ul>
              {matchedGroup.content[0].comments.map((comment, index) => (
                <li key={index}>• {comment}</li>
              ))}
            </ul>
          </h5>
        </div>
        {/* <div className="button-container">
          <button className="pre-btn" onClick={pre}>
            <img src={ArrowLeft} />
          </button>
          <button className="next-btn" onClick={next}>
            <img src={ArrowRight} />
          </button>
        </div> */}
        <div className="button-container">
          <button className="pre-btn" onClick={handleGoBack}>
            <img src={ArrowLeft} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicationDetailsPage;
