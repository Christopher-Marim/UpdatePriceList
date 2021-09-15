import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
function App() {
  return (
    //<Home></Home>
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/pages/UpdatePriceList" component={Home} />
    </BrowserRouter>
  );
}
export default App;
