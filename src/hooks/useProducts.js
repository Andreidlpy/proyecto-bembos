import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

import { useState } from "react";
import { useEffect } from "react";

export const useProducts = () => {
  const [productList, setProductList] = useState([]);
  const [productMenuList, setProductMenuList] = useState([]);
  const [loading, setLoading] = useState(false);

  const productsCollectionRef = collection(db, "bembos-db");
  const productsMenuCollectionRef = collection(db, "bembos-db-menu");

  const getProductList = async () => {
    setLoading(true);
    try {
      const data = await getDocs(productsCollectionRef);
      const filteredDAta = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductList(filteredDAta);
      return filteredDAta;
      setLoading(false);
      console.log(filteredDAta);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  const getProductMenuList = async () => {
    setLoading(true);
    try {
      const data = await getDocs(productsMenuCollectionRef);
      const filteredDAta = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProductMenuList(filteredDAta);
      return filteredDAta;
      setLoading(false);
      console.log(filteredDAta);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  const getData = async () => {
    try {
      const {p1, p2} = await Promise.allSettled([
        
        getProductMenuList,
        getProductList,
      ]);
      console.log(p1.value);
      console.log(p2.value);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    productList,
  };
};
