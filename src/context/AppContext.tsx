import { User } from "firebase/auth";
import {
  useMemo,
  Dispatch,
  useState,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from "react";
import { Product } from "src/models/product.model";

interface AppContextType {
  shoppingCart: {
    total: number;
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
  };
  auth: {
    user?: User | null;
    token: string | undefined;
    setUser: Dispatch<SetStateAction<User | undefined>>;
    setToken: Dispatch<SetStateAction<string | undefined>>;
  };
}

const AppContextDefault: AppContextType = {
  shoppingCart: {
    total: 0,
    products: [],
    setProducts: () => {},
  },
  auth: {
    user: null,
    token: "",
    setUser: () => {},
    setToken: () => {},
  },
};
const AppContext = createContext<AppContextType>(AppContextDefault);

export const AppContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  const states = useMemo(
    () => ({
      shoppingCart: {
        products,
        total,
      },
      user: {
        user,
        token,
      },
    }),
    [products, total, user, token]
  );

  const setStates = useMemo(
    () => ({
      shoppingCart: { setProducts },
      user: { setUser, setToken },
    }),
    []
  );

  const values = useMemo(
    () => ({
      shoppingCart: { ...states.shoppingCart, ...setStates.shoppingCart },
      auth: { ...states.user, ...setStates.user },
    }),
    [states, setStates]
  );

  useEffect(() => {
    let total = 0;
    products?.forEach((item) => {
      total += item.price;
    });
    setTotal(total);
  }, [products]);

  useEffect(() => {
    const productsStore = sessionStorage.getItem("products");
    setProducts((JSON.parse(String(productsStore)) || []) as Product[]);
  }, []);
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
