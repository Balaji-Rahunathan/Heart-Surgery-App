import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import intro from "./screens/about_your_heart/intro/intro.screen";
import Error from "./screens/error/error.screen";
import Exercise from "./screens/exercise/exercise-intro/exercise-intro.screen";
import HomeSurgery from "./screens/preparing_for_your_surgery/home_surgery.screen";
import ReturningHome from "./screens/returning_home/returning_home.screen";
import Preparing_for_your_surgery from "./screens/preparing_for_your_surgery/preparing_for_your_surgery";
import ResumingHome from "./screens/resuming_home/resuming_home.screen";
import HomExerciseAfterSurgery from "./screens/home_exercise_after_surgery/home_exercise_after_surgery";
import ExerciseTargetForLife from "./screens/exercise_target_for_life/exercise_target_for_life.screen";
import ForYouAndYourPartner from "./screens/for_you_and_your_partner/for_you_and_your_partner.screen";
import ManagingYourRiskFactors from "./screens/managing_your_risk_factors/managing_your_risk_factors.screen";
import YourHeartSurgeryGuide from "./screens/your_heart_surgery_guide/your_heart_surgery_guide.screen";
import { useState, useEffect } from "react";
import { toInteger } from "lodash";
import shoulderMovement from "./screens/exercise/shoulder_movement/shoulder_movement.screen";
import MedicationsForYourHeart from "./screens/medications_for_your_heart/medications_for_your_heart";
import UsefulAddresses from "./screens/useful_addresses/useful_addresses";
import RelaxationTechniques from "./screens/relaxation_techniques/relaxation_techniques.screen";
import Smoking from "./screens/looking_forward_healthier_future/smoking.screen";
import HighCholesterol from "./screens/looking_forward_healthier_future/high_cholesterol";
import Alcohol from "./screens/looking_forward_healthier_future/alcohol";
import BeingOverweight from "./screens/looking_forward_healthier_future/being_overweight";
import HealthyEatingForHealthyHeart from "./screens/looking_forward_healthier_future/healthy_eating_for_ahealthy_heart";
import PhysicalInactivity from "./screens/looking_forward_healthier_future/physical_inactivity";
import AfterSurgery from "./screens/after_surgery/after_surgery.screen";
import WoundedHeartDoesHeal from "./screens/preparing_for_your_surgery/wounded_heart_does_heal";
import Excercise from "./components/excercise/excersise.component";
import { excerciseContent } from "./helpers/content";
import HomeWalking from "./screens/home_walking/home_walking.screen";
import LittleAboutYourHeart from "./screens/about_your_heart/little_about_your_heart/little_about_your_heart.screen";
import RangeofMovementExercises from "./screens/range_of_movement_exercises/range_of_movement_exercises.screen";
import GettingBacktoNormal from "./screens/getting_back_to_normal/getting_back_to_normal.screen";
import HomeWalkingProgramme from "./screens/home_walking/home_walking_programme.screen";
import HighBloodPressure from "./screens/looking_forward_healthier_future/high_blood_pressure";
import PreparingForSurgeryMain from "./screens/preparing_for_your_surgery/preparing_for_your_surgery_main";

let App = (props) => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };

  if (
    toInteger(useWindowDimensions().width) /
    toInteger(useWindowDimensions().height) >
    1
  ) {
    return (
      <div className="App">
        <BrowserRouter basename="/heart-surgery/">
          <Error />
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter basename="/heart-surgery/">
          <Switch>
            <Route exact path="/test" component={HomeWalking} />
            <Route exact path="/" component={YourHeartSurgeryGuide} />
            <Route exact path="/about_your_heart" component={intro} />
            <Route
              exact
              path="/little_about_your_heart"
              component={LittleAboutYourHeart}
            />
            <Route exact path="/after_surgery" component={AfterSurgery} />
            <Route
              exact
              path="/range_of_movement_exercises"
              component={RangeofMovementExercises}
            />
            {/* <Route
              exact
              path="/wounded_heart_does_heal"
              component={WoundedHeartDoesHeal}
            /> */}
            <Route exact path="/exercise" component={Exercise} />
            <Route exact path="/neck_mobilisation">
              {(props) => <Excercise {...excerciseContent[0]} {...props} />}
            </Route>
            <Route exact path="/shoulder_girdle">
              {(props) => <Excercise {...excerciseContent[1]} {...props} />}
            </Route>
            <Route exact path="/arm_raising">
              {(props) => <Excercise {...excerciseContent[2]} {...props} />}
            </Route>
            <Route exact path="/trunk_twists">
              {(props) => <Excercise {...excerciseContent[3]} {...props} />}
            </Route>
            <Route exact path="/side_bending">
              {(props) => <Excercise {...excerciseContent[4]} {...props} />}
            </Route>
            <Route exact path="/leg_swings">
              {(props) => <Excercise {...excerciseContent[5]} {...props} />}
            </Route>
            <Route exact path="/knee_bends">
              {(props) => <Excercise {...excerciseContent[6]} {...props} />}
            </Route>
            <Route exact path="/heel_raises">
              {(props) => <Excercise {...excerciseContent[7]} {...props} />}
            </Route>

            <Route exact path="/arm_raise">
              {(props) => <Excercise {...excerciseContent[8]} {...props} />}
            </Route>

            <Route
              exact
              path="/shoulder_movement"
              component={shoulderMovement}
            />
            <Route
              exact
              path="/preparing_for_surgery_home"
              component={HomeSurgery}
            />
            <Route
              exact
              path="/preparing_for_surgery_main"
              component={PreparingForSurgeryMain}
            />
            <Route
              exact
              path="/preparing_for_surgery"
              component={Preparing_for_your_surgery}
            />

            {/* Returning Home           */}
            <Route exact path="/returning_home" component={ReturningHome} />
            <Route
              exact
              path="/returning_home/resuming_home"
              component={ResumingHome}
            />
            <Route
              exact
              path="/returning_home/getting_back_to_normal"
              component={GettingBacktoNormal}
            />
            <Route
              exact
              path="/returning_home/home_exercise_after_surgery"
              component={HomExerciseAfterSurgery}
            />
            <Route
              exact
              path="/returning_home/home_walking_programme"
              component={HomeWalkingProgramme}
            />
            <Route
              exact
              path="/returning_home/home_walking"
              component={HomeWalking}
            />
            <Route
              exact
              path="/returning_home/exercise_target_for_life"
              component={ExerciseTargetForLife}
            />
            <Route
              exact
              path="/returning_home/for_you_and_your_partner"
              component={ForYouAndYourPartner}
            />
            <Route
              exact
              path="/returning_home/relaxation_techniques"
              component={RelaxationTechniques}
            />

            <Route
              exact
              path="/managing_your_risk_factors"
              component={ManagingYourRiskFactors}
            />
            <Route
              exact
              path="/your_heart_surgery_guide"
              component={YourHeartSurgeryGuide}
            />

            {/* Looking forward to a healthier future */}
            <Route
              exact
              path="/looking_forward_healthier_future"
              component={ManagingYourRiskFactors}
            />
            <Route
              exact
              path="/looking_forward_healthier_future/high_blood_pressure"
              component={HighBloodPressure}
            />
            <Route
              exact
              path="/looking_forward_healthier_future/smoking"
              component={Smoking}
            />
            <Route
              exact
              path="/looking_forward_healthier_future/high_cholesterol"
              component={HighCholesterol}
            />
            <Route
              exact
              path="/looking_forward_healthier_future/being_overweight"
              component={BeingOverweight}
            />
            <Route
              exact
              path="/looking_forward_healthier_future/healthy_eating_for_a_healthy_heart"
              component={HealthyEatingForHealthyHeart}
            />
            <Route
              exact
              path="/looking_forward_healthier_future/alcohol"
              component={Alcohol}
            />
            <Route
              exact
              path="/looking_forward_healthier_future/physical_inactivity"
              component={PhysicalInactivity}
            />
            <Route
              exact
              path="/medications_for_your_heart"
              component={MedicationsForYourHeart}
            />
            <Route
              exact
              path="/useful_addressess"
              component={UsefulAddresses}
            />
            <Route exact path="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
