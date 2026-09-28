import React, { useState } from 'react'


function MyCarDetails() {

    const [car, setCar] = useState({
        name: "Mustang",
        year: 2025,
        make: "Ford"
    });

    const handleYearChange = (event) => {
        setCar((c) => ({ ...c, year: event.target.value}))
    }

    const handleNameChange = (event) => {
        setCar(c => ({...c, name: event.target.value}))
    }

    const handleMakeChange = (event) => {
        setCar(c => ({...c, make: event.target.value}))
    }
  return (
    <div>
          <h2>This is a {car.name} {car.year} {car.make}</h2>
          <input type="number" onChange={handleYearChange} value={car.year} />
          <input type="text" value={car.name} onChange={handleNameChange} />
          <input type="text" value={car.make} onChange={handleMakeChange} />
    </div>
  )
}

export default MyCarDetails
