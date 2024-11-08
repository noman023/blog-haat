import { useContext } from "react";
import { AuthContext } from "../provider/AuthContextProvider";

export default function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
