import './App.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import intro from './screens/about_your_heart/intro/intro.screen';
import Error from './screens/error/error.screen';
import Exercise from './screens/exercise/exercise-intro/exercise-intro.screen';
import ExerciseNeck from './screens/exercise/exercise-neck/exercise-neck.screen';
import ExerciseHarm from './screens/exercise/harm-ecercise/harm-exercise.screen';
import HomeSurgery from './screens/preparing_for_your_surgery/home_surgery.screen';
import ReturningHome from './screens/returning_home/returning_home.screen';
import Preparing_for_your_surgery from './screens/preparing_for_your_surgery/preparing_for_your_surgery';
import ResumingHome from './screens/resuming_home/resuming_home.screen';
import HomExerciseAfterSurgery from './screens/home_exercise_after_surgery/home_exercise_after_surgery';
import ExerciseTargetForLife from './screens/exercise_target_for_life/exercise_target_for_life.screen';
import ForYouAndYourPartner from './screens/for_you_and_your_partner/for_you_and_your_partner.screen';
import ManagingYourRiskFactors from './screens/managing_your_risk_factors/managing_your_risk_factors.screen';
import YourHeartSurgeryGuide from './screens/your_heart_surgery_guide/your_heart_surgery_guide.screen';
import ExerciseFoot from './screens/exercise/exercise-foot/exercise-foot.screen';
import ExerciseUpperBody from './screens/exercise/exercise-upper-body/exercise-upper-body';
import ExerciseLeg from './screens/exercise/exercise-leg/exercise-leg';
import ExerciseSquat from './screens/exercise/exercise-squat/exercise-squat.screen';
import { Screen } from './helpers/functions'
import { useState, useEffect } from 'react';
import { toInteger } from 'lodash';


let App = props => {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  if ((toInteger(useWindowDimensions().width) / toInteger(useWindowDimensions().height)) > 1) {
    return (
      <div className="App">
        <BrowserRouter basename="/heart-surgery/">
          <Error/>
        </BrowserRouter>
      </div>
    )
  } else {
    return (
      <div className="App">
        <BrowserRouter basename="/heart-surgery/">
          <Switch>
            <Route exact path="/" component={YourHeartSurgeryGuide} />
            <Route path="/about_your_heart" component={intro} />
            <Route path="/exercise" component={Exercise} />
            <Route path="/neck" component={ExerciseNeck} />
            <Route path="/harm" component={ExerciseHarm} />
            <Route path="/foot" component={ExerciseFoot} />
            <Route path="/upper_body" component={ExerciseUpperBody} />
            <Route path="/squat" component={ExerciseSquat} />
            <Route path="/leg" component={ExerciseLeg} />
            <Route path="/preparing_for_surgery_home" component={HomeSurgery} />
            <Route path="/preparing_for_surgery" component={Preparing_for_your_surgery} />
            <Route path="/resuming_home" component={ResumingHome} />
            <Route path="/returning_home" component={ReturningHome} />
            <Route path="/home_exercise_after_surgery" component={HomExerciseAfterSurgery} />
            <Route path="/exercise_target_for_life" component={ExerciseTargetForLife} />
            <Route path="/for_you_and_your_partner" component={ForYouAndYourPartner} />
            <Route path="/managing_your_risk_factors" component={ManagingYourRiskFactors} />
            <Route path="/your_heart_surgery_guide" component={YourHeartSurgeryGuide} />
            <Route path="/ex" component={ExerciseFoot} />
            <Route path="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
