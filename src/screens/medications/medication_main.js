import React, { useState, useEffect } from "react";
import { Medications } from "../../helpers/content";
import { useLocation, useHistory } from "react-router-dom";
import "../medications/medications.scss";

// Images
import Tablets from "../../assets/images/MedicationsImg/Tablets.svg";
import GenericName from "../../assets/images/MedicationsImg/GenericName.svg";
import MedicationUses from "../../assets/images/MedicationsImg/MedicationUses.svg";
import Comments from "../../assets/images/MedicationsImg/Comments.svg";
import ArrowLeft from "../../assets/images/MedicationsImg/ArrowLeft.svg";
import ArrowRight from "../../assets/images/MedicationsImg/ArrowRight.svg";

const MedicationPage = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const currentMedication = Medications.data[currentIndex];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const groupName = queryParams.get("groupName");

    if (groupName) {
      const matchingIndex = Medications.data.findIndex(
        (medication) =>
          encodeURIComponent(medication.group).replace(/[^A-Za-z]+/g, "") ===
          groupName
      );

      if (matchingIndex !== -1) {
        setCurrentIndex(matchingIndex);
      }
    }
  }, [location.search]);

  const updateGroupNameInUrl = (newIndex) => {
    const searchParams = new URLSearchParams();
    searchParams.set(
      "groupName",
      encodeURIComponent(Medications.data[newIndex].group).replace(
        /[^A-Za-z]+/g,
        ""
      )
    );

    history.replace({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  const next = () => {
    if (currentIndex < Medications.data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      updateGroupNameInUrl(currentIndex + 1);
    }
  };

  const pre = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      updateGroupNameInUrl(currentIndex - 1);
    }
  };

  return (
    <div className="medication_container">
      <div className="medication_inner_container">
        <div className="group_name_div">
          <img src={Tablets} alt="Tablets" />
          <div>
            <span>Group Name</span>
          </div>
          <h1>{currentMedication.group}</h1>
        </div>
        <div className="generic_name_div div_border">
          <div className="flex">
            <img src={GenericName} alt="GenericNames" />

            <h4>Generic Name</h4>
          </div>
          <h5>{currentMedication.content[0].genericName}</h5>
        </div>
        <div className="generic_name_div div_border">
          <div className="flex">
            <img src={MedicationUses} alt="MedicationUses" />

            <h4>Medication Uses</h4>
          </div>
          {currentMedication.content[0].medicationUse.map(
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
              {currentMedication.content[0].comments.map((comment, index) => (
                <li key={index}>• {comment}</li>
              ))}
            </ul>
          </h5>
        </div>
        <div className="button-container">
          <button className="pre-btn" onClick={pre}>
            <img src={ArrowLeft} />
          </button>
          <button className="next-btn" onClick={next}>
            <img src={ArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicationPage;
