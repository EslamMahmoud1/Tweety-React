import { Outlet } from "react-router-dom";
import MainHeader from "./Components/Header/MainHaeder/MainHeader";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="main-layout">
      <MainHeader />
      <main className="main-layout__main">
        <div className="main-layout__container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
