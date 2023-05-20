import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
    const[carsData,setCrasData]=useState([])
    const[categorie,setCategorie]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:5000/carsCard/${categorie}`)
        .then(res=>res.json())
        .then(data=>setCrasData(data))
    },[categorie])

  return (
    <div className="text-center mt-5 px-10">
      <Tabs>
        <TabList>
          <Tab onClick={()=>setCategorie('engineeringKits')}>Title 1</Tab>
          <Tab onClick={()=>setCategorie('mathToys')}>Title 2</Tab>
          <Tab onClick={()=>setCategorie('Trucktoys')}>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>{carsData.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>{carsData.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>{carsData.length}</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
