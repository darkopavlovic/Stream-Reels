import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <AppProvider>
            <Route path="/app" component={Home} />
          </AppProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
