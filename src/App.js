import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import CreatePost from "./containers/CreatePost";
import AuthContextProvider from "./contexts/auth.context";

const Routing = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/createpost" component={CreatePost} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </div>
  );
}

export default App;
