import { Outlet } from "react-router-dom";
import MainHeader from "./Components/Header/MainHaeder/MainHeader";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
