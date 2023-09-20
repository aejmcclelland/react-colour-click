
import './App.css'

import ColourBoxGrid from './ColourBoxGrid'

const colours = [
  "orange",
  "red",
  "yellow",
  "greenyellow",
  "aqua",
  "blueviolet",
  "darkmagenta",
  "darkturquoise",
  "deeppink",
  "limegreen",
  "navy",
  "plum",
  "skyblue",
  "orangered",
  "mediumseagreen",
]


function App() {
  return <div>
    <ColourBoxGrid colours={colours} />
  </div>

}
export default App
