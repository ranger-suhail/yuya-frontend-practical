import { useContext } from "react";
import { Home } from "./pages/Home";
import { RoutingContext } from "./Router";
import "./App.css";
import { CustomerV1 } from "./pages/CustomerV1";
import { CustomerV2 } from "./pages/CustomerV2";
import { CustomerV3 } from "./pages/CustomerV3";
import { CustomerV4 } from "./pages/CustomerV4";
import { NotFound } from "./pages/404";

function App() {
  const { page } = useContext(RoutingContext);
  const Elem = {
    "": Home,
    "v1/customer": CustomerV1,
    "v2/customer": CustomerV2,
    "v3/customer": CustomerV3,
    "v4/customer": CustomerV4,
    "404": NotFound,
  }[page];
  return (
    <div className="App">
      <Elem />
    </div>
  );
}

export default App;
