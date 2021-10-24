import React from "react";
import { Route, Switch } from "react-router-dom";
import PeoplePage from "./pages/peoplePage/PeoplePage";
import SerialsPage from "./pages/serialsPage/SerialsPage";
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
      </Switch>
    </>
  );
}

export default App;
