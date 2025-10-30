import { createBrowserRouter, Navigate } from "react-router";
import { About } from '../pages/about/About';
import { SellTickets } from "@/pages/sellTickets/SellTickets";
import { Home } from "@/pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Register } from "@/pages/register/Register";
import { FindEvents } from "@/pages/findEvents/FindEvents";

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
    path: "*",
    element: <Navigate to = "/"/>
  }
]);


