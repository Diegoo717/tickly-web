import { createBrowserRouter, Navigate } from "react-router";
import { About } from '../pages/about/About';
import { SellTickets } from "@/pages/sellTickets/SellTickets";
import { Home } from "@/pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Register } from "@/pages/register/Register";
import { FindEvents } from "@/pages/findEvents/FindEvents";
import { Settings } from "@/pages/settings/Settings";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Profile } from '../pages/profile/Profile';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/selltickets",
    element: <SellTickets />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/discoverevents",
    element: <FindEvents />
  },
  {
    path: "/settings",
    element: <ProtectedRoute><Settings /></ProtectedRoute>
  },
  {
    path: "/profile",
    element: <ProtectedRoute><Profile /></ProtectedRoute>
  },
  {
    path: "*",
    element: <Navigate to = "/"/>
  }
]);


