import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Medications } from "../../helpers/content";
import Tablets from "../../assets/images/MedicationsImg/Tablets.svg";
import GenericName from "../../assets/images/MedicationsImg/GenericName.svg";
import MedicationUses from "../../assets/images/MedicationsImg/MedicationUses.svg";
import Comments from "../../assets/images/MedicationsImg/Comments.svg";
import Cancel from "../../assets/images/MedicationsImg/X.svg";
import "../medications/medications_details.scss";

const MedicationDetailsPage = () => {
  const { groupName } = useParams();

  const modifiedGroupName = groupName.replace(/[\s()]/g, "");

  const matchedGroup = Medications.data.find(
    (group) => group.group.replace(/[\s()]/g, "") === modifiedGroupName
  );

  const history = useHistory();

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <div className="medication_container">
      <div className="medication_inner_container">
        <div className="group_name_div">
          <div className="img_div">
            <img src={Tablets} alt="Tablets" className="tablets_img" />
            <button className="pre-btn" onClick={handleCancel}>
              <img src={Cancel} alt="Cancel" className="cancel_img" />
            </button>
          </div>
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
          {matchedGroup.content[0].medicationUse.map((medication, index) => (
            <h5 key={index}>{medication}</h5>
          ))}
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
      </div>
    </div>
  );
};

export default MedicationDetailsPage;
