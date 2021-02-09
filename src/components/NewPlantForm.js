import React, { useEffect, useState } from "react";

function NewPlantForm({handleAddPlant}) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const newPlant = {name: name, 
                    image: image, 
                    price: price}

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target)
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(newPlantData => {
        handleAddPlant(newPlantData);
      })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={e => setName(e.target.value)} />
        <input type="text"
          name="image"
          placeholder="Image URL"d
          value={image}
          onChange={e => setImage(e.target.value)} />
        <input type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(parseFloat(e.target.value))} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;