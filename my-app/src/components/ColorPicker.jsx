import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")
  const handleColorChange = (e) => {
    setColor(e.event.change);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color }}>Selected Color: {color};</div>
      <label>Select a Color:</label>
      <input type="color" onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
