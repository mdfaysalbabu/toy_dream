import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  const [carsData, setCrasData] = useState([]);
  const [categorie, setCategorie] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/carsCard/${categorie}`)
      .then((res) => res.json())
      .then((data) => setCrasData(data));
  }, [categorie]);

  return (
    <div className="text-center mt-5 px-10">
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategorie("engineeringKits")}>Car-Toys</Tab>
          <Tab onClick={() => setCategorie("mathToys")}>SuperCar-Toys</Tab>
          <Tab onClick={() => setCategorie("Trucktoys")}>Truck-Toys</Tab>
        </TabList>

        <TabPanel>
          <h2>{carsData.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>{carsData.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>{carsData.length}</h2>
          {carsData.map((cars) => (
            <div className="card w-96 glass">
              <figure>
                <img
                  src={cars.
                    photo}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
            
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
