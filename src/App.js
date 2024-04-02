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
      <div className="flex flex-col lg:ml-6 md:ml-0 sm:ml-4 sm:mt-10">
        <div>
          <h1 className="text-2xl font-semibold text-center mb-2">Population Nation Overview</h1>
          <GraphPopulation />
        </div>
        <h1 className="text-2xl font-semibold text-center mt-2">Assets</h1>
        <div className="md:ml-0 lg:ml-4 flex sm:ml-4">
          <CryptoCard currency="USD" />
          <CryptoCard currency="EUR" />
          <CryptoCard currency="GBP" />
        </div>
      </div>
    </div>
  );
}

export default App;
