import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeAdmin } from "./pages/HomeAdmin";
import { Login } from "./pages/Login";

import { AuthProvider, useAuth } from "./hooks/auth";
import { HomeFinanceiro } from "./pages/HomeFinanceiro";
function App() {
  return (
    //<Login></Login>

    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route path="/" exact component={Login} />
          <Route path="/pages/HomeAdmin" component={HomeAdmin} />
          <Route path="/pages/HomeFinanceiro" component={HomeFinanceiro} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
