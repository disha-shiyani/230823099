import React, { useRef, useState, useEffect } from "react";
import './Form.css'; // Import the CSS file

function Form() {
  const inputCityRef = useRef(null);  
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${name}, ${city}`);
    console.log(`Name: ${name}, ${city}`);
  }

  useEffect(() => {  
    if (name.includes("1")) {
      alert("You can not write numbers into name... please understand..!!!");
      setName("");
    }
    console.log(name);
  }, [name]);

  useEffect(() => {
    if (city.includes("*") || city.includes("$")) {
      alert("You can not use special symbol... please understand..!!!");
      setCity("");
    }
  }, [city]);

  useEffect(() => {
    const databaseInstance = {
      name: "",
      city: ""
    };
    setName(databaseInstance.name);
    setCity(databaseInstance.city);
    console.log("Page Load and data initialize from database");
  }, []);

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            ref={inputCityRef}
            value={city}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </>
  );
}

export default Form;
