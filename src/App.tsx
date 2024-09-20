import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
