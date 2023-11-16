import { db } from "../config/firebase";
import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { fetchData } from "../api/getData";

export const useMenu = ( name ) => {
  const [menuData, setMenuData] = useState([])
  const [loading, setLoading] = useState(false)

  const productsCollectionRef = collection(db, name);

  const getMenuProducts = async (coleccionName) => {
    setLoading( true )
    try {
        const res = await fetchData(coleccionName);
        setMenuData(res);
    } catch (error) {
        console.log(error)
        setLoading( false )
    } finally{
        setLoading( false )
    }
  };
  
  useEffect(() => {
    getMenuProducts(productsCollectionRef)
  },[name]);

  return {
    menuData,
    loading
  };
};
