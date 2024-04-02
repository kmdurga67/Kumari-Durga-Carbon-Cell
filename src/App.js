import React from "react";
import SideNav from "./components/SideNavigation/index";
import { sideNavItem } from "./utils/constants";
import GraphPopulation from "./components/GraphPopulation";
import CryptoCard from "./components/CryptoCard";

function App() {
  return (
    <div className="flex">
      <div>
        <SideNav navItems={sideNavItem} />
      </div>
      <div className="flex flex-col lg:ml-40 md:ml-40 sm:ml-4 sm:mt-20">
        <div>
          <GraphPopulation />
        </div>
        <div className="md:ml-40 lg:ml-40 flex sm:ml-4">
          <CryptoCard currency="USD" />
          <CryptoCard currency="EUR" />
          <CryptoCard currency="GBP" />
        </div>
      </div>
    </div>
  );
}

export default App;
