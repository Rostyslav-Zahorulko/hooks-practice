import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Counter from './components/Counter';
import SignupForm from './components/SignupForm';
import Clock from './components/Clock';

const App = () => {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <h1>Hooks Practice</h1>
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/form">
          <SignupForm />
        </Route>

        <Route path="/clock">
          <Clock />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
