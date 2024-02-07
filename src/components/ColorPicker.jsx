import React, { useState } from "react";

function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };


  return (
    <div className="flex flex-col justify-around items-center border-2 border-black w-[20%] h-[36vh] rounded-md">
      <h1 className="text-xl font-bold border-b-2 pb-2 text-center border-black w-full">My Color Picker</h1>
      <div className="color-display w-full flex justify-center items-center border border-black p-4"
      style={{backgroundColor: color}}>
        <p className="text-xl w-full border-black">Selected Color: {color}</p>
      </div>
      <label htmlFor="">Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
