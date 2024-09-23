import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import useBeforeUnload from "./Hooks/useBeforeUnload";

function App() {
  useBeforeUnload({ message: 'You have items in your cart. If you leave, your items might be lost.' });

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
