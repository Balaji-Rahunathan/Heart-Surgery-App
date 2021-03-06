import React from 'react'
import './managing_your_risk_factors.screen.scss'
import DiabetesImage from "../../assets/images/managing_your_risk_factors/Group 2.svg";
import GlucoseImage from '../../assets/images/managing_your_risk_factors/Group 3.svg'
import BloodPressureImage from '../../assets/images/managing_your_risk_factors/Group 4.svg'
import PressureCheckImage from '../../assets/images/managing_your_risk_factors/Group 5.svg'
import HowToImage from '../../assets/images/managing_your_risk_factors/Group 6.svg'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const ManagingYourRiskFactors = () => {
    return (
        <div className="myrf_screen">
            <div className="myrf_container">
                <div className="myrf_wrapper">
                    <div className="myrf_head_container">
                        <p className="myrf_head_text">
                            Managing your Risk Factors
                        </p>
                    </div>

                    <div className="myrf_title_container">
                        <p className="myrf_title_text">Diabetes</p>
                    </div>
                    <div className="myrf_image_container">
                        <img src={DiabetesImage} className="myrf_image"></img>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text">
                            Diabetes is a condition where blood
                            sugar levels rise above normal. You have
                            an increased chance of getting diabetes if
                            you have excess body fat around the
                            middle of your body and are physically
                            inactive. People with diabetes are three to
                            four times more likely to develop heart
                            disease than people without diabetes.
                            If you have diabetes, reduce your risk of
                            heart disease by:
                        </p>
                        <p className="myrf_content_text">
                            <FiberManualRecordIcon className="myrf_points" /> Getting your blood sugar under control,and keeping it under control.
                        </p>
                        <p className="myrf_content_text">
                            <FiberManualRecordIcon className="myrf_points" /> Making the dietary changes advised.
                        </p>
                        <p className="myrf_content_text">
                            <FiberManualRecordIcon className="myrf_points" /> Keeping your cholesterol under control.
                        </p>
                        <p className="myrf_content_text">
                            <FiberManualRecordIcon className="myrf_points" /> Getting moving. Discuss any planned
                            new exercise or physical activity with your
                            medical team.
                        </p>
                        <p className="myrf_content_text">
                            <FiberManualRecordIcon className="myrf_points" /> Achieving and maintaining a healthy body weight and a slim waistline.
                        </p>
                        <p className="myrf_content_text">
                            <FiberManualRecordIcon className="myrf_points" /> Keeping your blood pressure less than 140/85, unless advised otherwise.
                        </p>
                        <p className="myrf_content_text"><FiberManualRecordIcon className="myrf_points" /> Stopping smoking.</p>
                    </div>




                    <div className="myrf_content_container">
                        <p className="myrf_content_text">
                            Drinking more than the recommended
                            amounts of alcohol (see page 35) when
                            you are on insulin can cause your blood
                            sugars to go to low (hypo). This can
                            happen even 10 to 16 hours after you
                            have stopped drinking. Talk to your
                            doctor about the precautions to be taken
                            with alcohol.
                            If you are not being followed up yearly at
                            a specialist diabetes centre and would
                            like to be, please talk with your GP.
                    </p>
                    </div>

                    <div className="myrf_title_container">
                        <p className="myrf_title_text">Impaired Glucose Tolerance</p>
                    </div>
                    <div className="myrf_image_container">
                        <img src={GlucoseImage} className="myrf_image"></img>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text">
                            If your sugars are above normal, but not
                            high enough to be called diabetes, you
                            have Impaired Glucose Tolerance (IGT) or
                            “ pre-diabetes” . With this condition, you
                            are also at increased risk of heart disease
                            and should follow all of the advice above.
                            You will need to have a glucose tolerance
                            test repeated yearly by your GP.
                    </p>
                    </div>

                    <div className="myrf_title_container">
                        <p className="myrf_title_text">High Blood Pressure</p>
                    </div>
                    <div className="myrf_image_container">
                        <img src={BloodPressureImage} className="myrf_image"></img>
                    </div>
                    <div className="myrf_sub_title_container">
                        <p className="myrf_sub_title_text">High blood pressure explained</p>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text">
                            Blood pressure is the pressure against
                            which your heart must pump to get blood
                            out of your heart. If your blood pressure is
                            too high, it makes your heart work harder
                            and causes it to enlarge and weaken over
                            time. The high pressure also damages the
                            smooth lining of your arteries, allowing
                            plaque to build up easily. If you have high
                            blood pressure, you have an increased
                            risk of heart attacks, strokes, kidney failure
                            and heart failure.
                    </p>
                    </div>

                    <div className="myrf_sub_title_container">
                        <p className="myrf_sub_title_text">How do i know if i have high blood pressure?</p>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text">
                            You don’t unless you get it checked, as
                            people with high blood pressure feel and
                            look normal.
                    </p>
                    </div>

                    <div className="myrf_sub_title_container">
                        <p className="myrf_sub_title_text">what should my blood pressure reading be?</p>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text">
                            Talk to your doctor about what is a normal
                            blood pressure for you. As a rule people
                            with heart disease or diabetes should aim
                            for the targets in the box opposite.
                    </p>
                    </div>

                    <div className="myrf_sub_title_container">
                        <p className="myrf_sub_title_text">How often should I have my blood pressure checked?</p>
                    </div>
                    <div className="myrf_image_container">
                        <img src={PressureCheckImage} className="myrf_image"></img>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text">
                            If your blood pressure is high, you will
                            need medication and you should have
                            your blood presure checked by your
                            doctor until it reaches the target in the
                            box opposite. Then it should be checked
                            every three months or whenever you are
                            renewing your prescription. even if you
                            do not have high blood pressure, it is wise
                            to have it checked at least once a year.
                    </p>
                    </div>

                    <div className="myrf_sub_title_container">
                        <p className="myrf_sub_title_text">How to reduce high blood pressure</p>
                    </div>
                    <div className="myrf_image_container">
                        <img src={HowToImage} className="myrf_image"></img>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text"><FiberManualRecordIcon className="myrf_points" /> Lose weight if you are overweight.</p>
                        <p className="myrf_content_text"><FiberManualRecordIcon className="myrf_points" /> Be physically active and eat healthily (see pages 21, 34 and 36).</p>
                        <p className="myrf_content_text"><FiberManualRecordIcon className="myrf_points" /> Do not add salt at the table or in cooking.</p>
                        <p className="myrf_content_text"><FiberManualRecordIcon className="myrf_points" /> Take it easy on alcohol, avoid binge drinking completely.</p>
                        <p className="myrf_content_text"><FiberManualRecordIcon className="myrf_points" /> Take your medications regularly as advised. These are usually prescribed for life.</p>
                        <p className="myrf_content_text"><FiberManualRecordIcon className="myrf_points" /> Stop smoking.</p>
                    </div>

                    <div className="myrf_sub_title_container">
                        <p className="myrf_sub_title_text">What is the normal blood pressure reading?</p>
                    </div>
                    <div className="myrf_content_container">
                        <p className="myrf_content_text">Top number: 140 or less</p>
                        <p className="myrf_content_text">Bottom number: 90 or less</p>
                        <p className="myrf_content_text">85 or less (if diabetic)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagingYourRiskFactors
