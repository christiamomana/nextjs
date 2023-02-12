import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product } from "src/models/product.model";

interface AppContextType {
  shoppingCart: {
    products?: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
  };
}

const AppContextDefault = {
  shoppingCart: {
    products: [],
    setProducts: () => {},
  },
};

const AppContext = createContext<AppContextType>(AppContextDefault);

export const AppContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [products, setProducts] = useState<Product[]>([]);

  const states = useMemo(
    () => ({
      products,
    }),
    [products]
  );

  const setStates = useMemo(
    () => ({
      setProducts,
    }),
    []
  );

  const values = useMemo(
    () => ({
      shoppingCart: { ...states, ...setStates },
    }),
    [states, setStates]
  );

  useEffect(() => {}, [states]);
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
