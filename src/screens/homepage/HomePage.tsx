import React from "react";
import { Todos } from "../../features/homepage/components/Todos";
import { HomePageProps } from "./HomePageType";

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <Todos />
    </div>
  );
};

export default HomePage;
