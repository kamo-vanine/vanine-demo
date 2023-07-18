// Importing the necessary CSS module for styling the component.
import navLayoutStyles from "../../styles/layout/navLayout.module.css";
// Importing other required components.
import Navigation from "../../components/ui_elements/Navigation";
import Header from "../../components/ui_elements/Header";
/**
 * NavLayout Component
 * @param {Object} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} - Returns a React component representing the main layout with navigation and header.
 */
const NavLayout = ({ children }) => {
  return (
    <div className={navLayoutStyles.main}>
      <Header />
      <Navigation />
      {children}
    </div>
  );
};

export default NavLayout;
