import { getDocs } from "@firebase/firestore";

export const fetchData = async (collectionRef) => {
  try {
    const data = await getDocs(collectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    throw new Error(err);
  }
};
