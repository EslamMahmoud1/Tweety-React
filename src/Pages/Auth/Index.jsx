import AuthHeader from "../../Components/Header/AuthHeader/AuthHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Index = () => {
  return (
    <div>
      <AuthHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
