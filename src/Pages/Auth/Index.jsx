import AuthHeader from "../../Components/Header/AuthHeader/AuthHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Index = () => {
  return (
    <div className="main-layout">
      <AuthHeader />
      <main className="main-layout__main">
        <div className="main-layout__container main-layout__container--narrow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
