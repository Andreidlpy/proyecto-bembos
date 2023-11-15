import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

const fetchData = async (collectionRef) => {
  try {
    const data = await getDocs(collectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    throw new Error(err);
  }
};

export const usePromotions = () => {
  const [productList, setProductList] = useState([]);
  const [productMenuList, setProductMenuList] = useState([]);

  const [productListLoading, setProductListLoading] = useState(false);
  const [productMenuLoading, setProductMenuLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const productsCollectionRef = collection(db, "bembos-db");
  const productsMenuCollectionRef = collection(db, "bembos-db-menu");

  const fetchProductList = async () => {
    try {
      setProductListLoading(true);
      const data = await fetchData(productsCollectionRef);
      setProductList(data);
    } catch (err) {
      console.error("Error fetching products list:", err);
    } finally {
      setProductListLoading(false);
    }
  };

  const fetchProductMenuList = async () => {
    try {
      setProductMenuLoading(true);
      const data = await fetchData(productsMenuCollectionRef);
      setProductMenuList(data);
    } catch (err) {
      console.error("Error fetching products menu:", err);
    } finally {
      setProductMenuLoading(false);
    }
  };

  const getData = async () => {
    setLoading(true);
    try {
      const [resultMenu, resultProducts] = await Promise.allSettled([
        fetchProductMenuList(),
        fetchProductList(),
      ]);
      if (resultMenu.status === "rejected") {
        console.error("Error fetching products menu:", resultMenu.reason);
      }

      if (resultProducts.status === "rejected") {
        console.error("Error fetching products list:", resultProducts.reason);
      }
    } catch (err) {
      console.error("Unexpected error", err);
    } finally {
      setLoading(productListLoading || productMenuLoading);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    productList,
    productMenuList,
    loading,
    productListLoading,
    productMenuLoading,
  };
};
