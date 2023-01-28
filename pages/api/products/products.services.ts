// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { database } from "../firebase/initFirebase";
import {
  doc,
  getDoc,
  collection,
  DocumentData,
  QueryDocumentSnapshot,
  getDocs,
} from "firebase/firestore";

type Products = {
  name: string;
  price: number;
};

export function assignTypes<T extends object>() {
  return {
    toFirestore(doc: T): DocumentData {
      return doc;
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): T {
      return snapshot.data()! as T;
    },
  };
}

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(database, "products"));
  let data: Products[] = [];
  querySnapshot.forEach((doc) => data.push(doc.data() as Products));
  return data;
};
