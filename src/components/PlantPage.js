import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [plantSearch, setPlantSearch] = useState("")

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(plantSearch.toLowerCase())
  })

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
  }, [])

  function handleAddPlant(newPlant){
    const newPlantList = ([...plants, newPlant])
    setPlants(newPlantList)
  }

  function handleRemovePlant(id){
    const newPlantList = plants.filter((plant) => plant.id !== id)
    setPlants(newPlantList)
  }
  function handleUpdatePlant(updatedPlant){
    const updatedPriceList = plants.map((plant) => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plant; 
      }
    });
    setPlants(updatedPriceList);
  }

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search plantSearch={plantSearch} setPlantSearch={setPlantSearch}/>
      <PlantList plants={filteredPlants} onRemovePlant={handleRemovePlant} onUpdatePlant={handleUpdatePlant}/>
    </main>
  );
}

export default PlantPage;