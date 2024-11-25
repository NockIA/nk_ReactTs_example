import React, { useEffect, useState } from "react";
import MobileNavbar from "./mobile/nav-mobile";
import DesktopNavbar from "./desktop/nav-desktop";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </>
  );
};

export default Navbar;
