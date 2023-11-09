import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useDrawer = () => {

  const { pathname } = useLocation();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenDrawerBottom, setIsOpenDrawerBottom] = useState(false);
  
  const toggleDrawer = () => {
    setIsOpenCart((prevState) => !prevState);
  
    if ( isOpenCart && pathname === '/promotions' ) {
      setIsOpenDrawerBottom(true);
    } else {
      setIsOpenDrawerBottom(false);
    }
  };
  
  const openDrawer = () => {
    setIsOpenCart((prevState) => !prevState);
    setIsOpenDrawerBottom(false);
  }
  
  useEffect(() => {
    if (pathname !== '/promotions') {
      setIsOpenDrawerBottom(false);
    } else {
      setIsOpenDrawerBottom(true);
    }
  }, [pathname]);

  return {
    toggleDrawer,
    openDrawer,
    isOpenCart,
    isOpenDrawerBottom,
  }
}
