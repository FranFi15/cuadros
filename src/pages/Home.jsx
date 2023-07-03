import React from "react";
import { Banner } from "../components/Banner/Banner/Banner";
import { Menu } from "../components/Banner/Menu/Menu";

const Home = () => {
  return (
    <>
      <Banner>
        <h2>Transforma tus paredes en obras de arte</h2>
      </Banner>
      <Menu />
    </>
  );
};

export default Home;
