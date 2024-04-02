import React from "react";
import SideNav from "./components/SideNavigation/index";
import { sideNavIcon, sideNavItem } from "./utils/constants";
import GraphPopulation from "./components/GraphPopulation";
import CryptoCard from "./components/CryptoCard";
import "./App.css"

function App() {
  return (
    <div className="flex">
      <div>
        <SideNav navItems={sideNavItem} />
      </div>
      <div className="flex flex-col lg:ml-6 md:ml-0 sm:ml-4">
      <div className="logocontainer">
      <p className="flex">
        Carbon Cell
        <span className="ml-24">
          {sideNavIcon}
        </span>
      </p>
      </div>
        <div>
          <h1 className="text-2xl font-semibold md:text-center sm:text-center mb-2">Population Nation Overview</h1>
          <GraphPopulation />
        </div>
        <h1 className="text-2xl font-semibold md:text-center mt-2 sm:text-left">Assets</h1>
        <div className="md:ml-0 lg:ml-4 md:flex sm:ml-4">
          <CryptoCard currency="USD"  symbol="$"/>
          <CryptoCard currency="EUR" symbol="€" />
          <CryptoCard currency="GBP" symbol="£" />
        </div>
      </div>
    </div>
  );
}

export default App;
