import { useState } from "react"



function FoodComponents() {

    const [foods, setFoods] = useState(["Mango", "Banana", "Pawpaw"]);
    function handleAddFood() {
        const newFood = document.getElementById("inputFood").value;
        document.getElementById("inputFood").value = "";

        setFoods(f => [...f, newFood]);
    } 
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }
  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {foods.map((food, index) => (
          <>
            <li key={index}>{food}</li>
            <button onClick={()=> handleRemoveFood(index)}>Remove</button>
          </>
        ))}
      </ul>
      <input type="text " placeholder="enter your fruits" id="inputFood" />
      <button onClick={handleAddFood}>Add fruit</button>
    </div>
  );
}

export default FoodComponents
