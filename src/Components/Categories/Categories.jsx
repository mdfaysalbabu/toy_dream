import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Categoriycart from "./Categoriycart";

const Categories = () => {
  const [carsData, setCrasData] = useState([]);
  const [categorie, setCategorie] = useState("Cartoys");
  useEffect(() => {
    fetch(`http://localhost:5000/carsCard/${categorie}`)
      .then((res) => res.json())
      .then((data) => setCrasData(data));
  }, [categorie]);

  return (
    <div className="text-center mt-5 px-10">
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategorie("Sportcar")}>Sports-Car-Toys</Tab>
          <Tab onClick={() => setCategorie("Trucktoys")}>Trucks-Toys</Tab>
          <Tab onClick={() => setCategorie("Bustoys")}>Bus-Toys</Tab>
        </TabList>

        <TabPanel>
          <h2>{carsData.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
            {carsData.map((cars) => (
              <Categoriycart cars={cars}></Categoriycart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>{carsData.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
            {carsData.map((cars) => (
              <Categoriycart cars={cars}></Categoriycart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>{carsData.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
            {carsData.map((cars) => (
              <Categoriycart cars={cars}></Categoriycart>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
