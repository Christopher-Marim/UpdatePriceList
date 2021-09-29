import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { AuthProvider } from "./hooks/auth";
function App() {
  return (
    //<Login></Login>

    <BrowserRouter>
      <Switch>
      <AuthProvider>
        <Route path="/" exact component={Login} />
        <Route path="/pages/UpdatePriceList" component={Home} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
