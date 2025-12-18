import { useState } from 'react'
import './App.css'
import ColorBar from './components/ColorBar'

const COLORS = [
  {name:"Red", value:"bg-red-600"},
  {name:"Green", value:"bg-green-600"},
  {name:"Blue", value:"bg-blue-600"},
  {name:"Olive", value:"bg-lime-800"},
  {name:"Gray", value:"bg-gray-500"},
]
function App() {
const [bgColor,setBgColor] = useState("bg-lime-800")

  return (
    <div className={` h-screen w-screen ${bgColor}`}>
      <ColorBar colors={COLORS} selectedColor={bgColor} onColorChange={setBgColor} />
    </div>
  )
}

export default App
