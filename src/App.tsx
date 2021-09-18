import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
function App() {
  return (
    //<Login></Login>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/pages/UpdatePriceList" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
