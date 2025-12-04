import { useAuth } from "../../../../contexts/AuthContext";
import { NavBar } from "./NavBar";
import { AuthenticatedNavBar } from "./AuthenticatedNavBar";

interface SmartNavBarProps {
  activePage?: string;
}

export const SmartNavBar = ({ activePage = "" }: SmartNavBarProps) => {
  const { session, loading } = useAuth();

  if (loading) {
    return <NavBar activePage={activePage} />;
  }

  if (session) {
    return <AuthenticatedNavBar activePage={activePage} />;
  }

  return <NavBar activePage={activePage} />;
};