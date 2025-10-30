import { useAuth } from "../../../../contexts/AuthContext";
import { NavBar } from "./NavBar";
import { AuthenticatedNavBar } from "./AuthenticatedNavBar";

export const SmartNavBar = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <NavBar />;
  }

  if (session) {
    return <AuthenticatedNavBar />;
  }

  return <NavBar />;
};