import Image from "next/image";
import headerStyles from "../../styles/ui_elements/header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <Image src="/images/logo.svg" width={75} height={50} />
      <span>Playground</span>
    </div>
  );
};

export default Header;
