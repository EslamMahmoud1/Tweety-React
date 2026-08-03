import "../Header/HeaderFooter.css";

const Footer = () => {
  return (
    <footer className="main-layout__footer">
      <p>&copy; {new Date().getFullYear()} Tweety. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
