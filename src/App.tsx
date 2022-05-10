import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeAdmin } from "./pages/HomeAdmin";
import { Login } from "./pages/Login";

import { AuthProvider, useAuth } from "./hooks/auth";
import { HomeFinanceiro } from "./pages/HomeFinanceiro";
import { HomeEstoque } from "./pages/HomeEstoque";
import { Home } from "./pages/Home";
function App() {
  return (
    //<Login></Login>

    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route path="/" exact component={Login} />
          <Route path="/pages/HomeAdmin" component={HomeAdmin} />
          <Route path="/pages/HomeFinanceiro" component={HomeFinanceiro} />
          <Route path="/pages/HomeEstoque" component={HomeEstoque} />
          <Route path="/pages/Home" component={Home} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
