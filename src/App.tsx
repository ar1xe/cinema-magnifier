import React from "react";
import { Route, Switch } from "react-router-dom";
import PeoplePage from "./pages/peoplePage/PeoplePage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import SerialsPage from "./pages/serialsPage/SerialsPage";
import SignInPage from "./pages/signInPage/SignInPage";
import StartPage from "./pages/startPage/StartPage";
import YetPage from "./pages/yetPage/YetPage";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/serials" exact component={SerialsPage} />
        <Route path="/people" exact component={PeoplePage} />
        <Route path="/yet" exact component={YetPage} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/registration" exact component={RegistrationPage} />
      </Switch>
    </>
  );
}

export default App;
