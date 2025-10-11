import React from "react";
import { Hero } from "../../components/home/hero/Hero";
import styles from "./Home.module.css";
import { NavBar } from "../../components/common/navigation/navbar/NavBar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
};
