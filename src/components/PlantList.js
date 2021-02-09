import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onRemovePlant, onUpdatePlant}) {

  const mappedPlants = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} onRemovePlant={onRemovePlant} onUpdatePlant={onUpdatePlant}/>
  })
  
  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;