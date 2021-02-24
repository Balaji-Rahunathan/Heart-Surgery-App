import './App.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import intro from './screens/about_your_heart/intro/intro.screen';
import Exercise from './screens/exercise/exercise-intro/exercise-intro.screen';
import ExerciseNeck from './screens/exercise/exercise-neck/exercise-neck.screen';
import ExerciseHarm from './screens/exercise/harm-ecercise/harm-exercise.screen';
import HomeSurgery from './screens/preparing_for_your_surgery/home_surgery.screen';
import ReturningHome from './screens/returning_home/returning_home.screen';
import Preparing_for_your_surgery from './screens/preparing_for_your_surgery/preparing_for_your_surgery';
import ResumingHome from './screens/resuming_home/resuming_home.screen';
import HomExerciseAfterSurgery from './screens/home_exercise_after_surgery/home_exercise_after_surgery';
import ExerciseTargetForLife from './screens/exercise_target_for_life/exercise_target_for_life.screen';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/heart-surgery/">
        <Switch>
          <Route exact path="/" component={intro} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/neck" component={ExerciseNeck} />
          <Route path="/harm" component={ExerciseHarm} />
          <Route path="/preparing_for_surgery_home" component={HomeSurgery} />
          <Route path="/preparing_for_surgery" component={Preparing_for_your_surgery} />
          <Route path="/resuming_home" component={ResumingHome} />
          <Route path="/returning_home" component={ReturningHome} />
          <Route path="/home_exercise_after_surgery" component={HomExerciseAfterSurgery} />
          <Route path="/exercise_target_for_life" component={ExerciseTargetForLife} />
          <Route  path="/" />          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
