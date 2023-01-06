import { Route, Routes } from "react-router-dom"
import LandingPage from "./views/LandingPage"
import RegistrationPage from "./views/RegistrationPage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationPage/>}>  </Route>
        <Route path="/landingpage" element={<LandingPage/>}>  </Route>
      </Routes>
    </div>
  )
}



export default App
