import FacialExpression from "./components/FaceExpression";
import MoodSongs from "./components/MoodSongs";
import { useState } from "react"
const App = () => {
  const [Songs, setSongs] = useState([
    

  ])
  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </>
  )
}

export default App;