import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import SpinnerComponent from "../components/Spinner";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(user);

  if (loading) {
    return <SpinnerComponent />;
  }

  // if user logged in then go to the children component
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}
