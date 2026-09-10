import { useState } from "react";


function MyComponent() {

    const [name, setName] = useState('Guest');
    let [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)
    
    const handleName = () => {
        setName("Andrew");
    };

    const handleAge = () => {
        setAge(age + 1);
    };

    const handleStatus = () => {
        setIsEmployed(!isEmployed)
    }

    
    return (
      <div>
        <h3>Name: {name}</h3>
        <button onClick={handleName}>Set name</button>

        <h3>Age: {age}</h3>
        <button onClick={handleAge}>Increment</button>

        <h3>Status: {isEmployed ? "Yes" : "No"}</h3>
        <button onClick={handleStatus}>Toggle Status</button>
      </div>
    );
}

export default MyComponent
