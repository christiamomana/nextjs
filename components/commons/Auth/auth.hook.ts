import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAppContext } from "src/context/AppContext";
import { getProvider } from "src/utils/initFirebase";

export const useAuth = () => {
  const {
    auth: { setUser, setToken },
  } = useAppContext();

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const firebaseApp = getProvider();
      const data = await signInWithPopup(firebaseApp.auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      setUser(data.user);
      setToken(credential?.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};
