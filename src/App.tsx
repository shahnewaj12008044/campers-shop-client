import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar></Navbar>
     <div className="min-h-screen">
     <Outlet></Outlet>
     </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
