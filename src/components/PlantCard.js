import React, {useState} from "react";

function PlantCard({ plant, onRemovePlant, onUpdatePlant }) {

  const [inStock, setInStock] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState("");

  function handleStockClick(){
    setInStock(inStock => !inStock);
  }

  function handleDelete(id){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    });
        
    onRemovePlant(plant.id);
  }
  function handlePriceFormSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: updatedPrice }),
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
      });
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockClick}>In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}> Remove Listing</button>
      <form onSubmit={handlePriceFormSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          value={updatedPrice}
          onChange={(event) => setUpdatedPrice(parseFloat(event.target.value))}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;