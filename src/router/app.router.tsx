import { createBrowserRouter, Navigate } from "react-router";
import { About } from '../pages/about/About';
import { SellTickets } from "@/pages/sellTickets/SellTickets";
import { Home } from "@/pages/home/Home";
import { SignIn } from "@/pages/signIn/SignIn";
import { SignUp } from "@/pages/signUp/SignUp";

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
    element: <SignIn />
  },
  {
    path: "/register",
    element: <SignUp />
  },
  {
    path: "/discoverevents",
    element: <></>
  },
  {
    path: "*",
    element: <Navigate to = "/"/>
  }
]);


