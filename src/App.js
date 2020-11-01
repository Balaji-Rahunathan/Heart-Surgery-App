import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import intro from './screens/intro/intro.screen';
import Exercise from './screens/exercise-intro/exercise-intro.screen';
import ExerciseNeck from './screens/exercise-neck/exercise-neck.screen';
import ExerciseHarm from './screens/harm-ecercise/harm-exercise.screen';



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={intro} />
          <Route path="/exercise" component={Exercise} />
          <Route path="/neck" component={ExerciseNeck} />
          <Route path="/harm" component={ExerciseHarm} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
