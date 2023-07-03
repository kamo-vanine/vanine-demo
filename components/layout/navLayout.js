import navLayoutStyles from "../../styles/layout/navLayout.module.css";
import Navigation from "../../components/ui_elements/Navigation";
import Header from "../../components/ui_elements/Header";
const NavLayout = ({ children }) => {
  return (
    <div className={navLayoutStyles.main}>
      <Header />
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default NavLayout;
