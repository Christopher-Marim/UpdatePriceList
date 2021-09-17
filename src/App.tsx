import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
function App() {
  return (
    //<Login></Login>
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/pages/UpdatePriceList" component={Home} />
    </BrowserRouter>
  );
}
export default App;
