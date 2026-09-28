import { useState } from "react"


function MyCarList() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel }
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
         setCars(cars.filter((_, i) => i !== index))
    }
    
    function handleYearChange(event) {
        setCarYear(event.target.value)
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }

    function handleModelChange(event) {
        setCarModel(event.target.value)
    }



  return (
    <div>
      <h1>List of Cars Object</h1>
      <ul>
        {cars.map((car, index) => (
          <>
                <li key={index}>{car.year} {car.make} {car.model}</li>
            <button onClick={() => handleRemoveCar(index)}>Remove</button>
          </>
        ))}
      </ul>
      <input type="number" onChange={handleYearChange} placeholder="year" value={carYear}/>
      <input
        type="text"
        onChange={handleMakeChange}
        placeholder="enter car make"
      />
      <input
        type="text"
        onChange={handleModelChange}
        placeholder="enter the model of the car"
      />
      <button onClick={() => handleAddCar()}>Add Car</button>
    </div>
  );
}

export default MyCarList
