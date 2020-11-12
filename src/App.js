import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import intro from './screens/about_your_heart/intro/intro.screen';
import Exercise from './screens/exercise/exercise-intro/exercise-intro.screen';
import ExerciseNeck from './screens/exercise/exercise-neck/exercise-neck.screen';
import ExerciseHarm from './screens/exercise/harm-ecercise/harm-exercise.screen';
import HomeSurgery from './screens/preparing_for_your_surgery/home_surgery.screen';
import Preparing_for_your_surgery from './screens/preparing_for_your_surgery/preparing_for_your_surgery';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/intro" component={intro} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/neck" component={ExerciseNeck} />
          <Route path="/harm" component={ExerciseHarm} />
          <Route path="/preparing_for_your_surgery_home" component={HomeSurgery} />
          <Route path="/preparing_for_your_surgery" component={Preparing_for_your_surgery} />
          <Route  path="/" />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
