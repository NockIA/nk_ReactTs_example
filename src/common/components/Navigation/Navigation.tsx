import React, { useEffect, useState } from 'react';

import DesktopNavbar from './Desktop/DesktopNav';
import MobileNavbar from './Mobile/MobileNav';

const NavigationBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
};

export default NavigationBar;
