import React from 'react'
import '.././App.css'
const ColorBar = ({colors, selectedColor, onColorChange}) => {
    console.log(colors);
    console.log(selectedColor)
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 
                 bg-white px-4 py-3 rounded-full shadow-lg
                 flex gap-3 flex-wrap justify-center">
        {colors.map((color) =>(
            <button
            key={color.name}
            onClick={() => onColorChange(color.value)}
            style={{ backgroundColor: color.value }}
            className={`bg-red-500 px-4 py-1 rounded-full text-sm font-medium shadow
            ${selectedColor === color.value 
              ? "ring-4 ring-black scale-105" 
              : ""}`} >{color.name}</button>
        ))}
    </div>
  )
}

export default ColorBar