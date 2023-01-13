import { Route, Routes } from "react-router-dom"
import Dashboard from "./views/Dashboard"
import LandingPage from "./views/LandingPage"
import RegistrationPage from "./views/RegistrationPage"
import Governance from "./views/Governance";
import Stake from "./views/Stake";
import Market from "./views/Market";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationPage/>}>  </Route>
        <Route path="/landingpage" element={<LandingPage/>}>  </Route>
        <Route path="/dashboard" element={<Dashboard/>}>  </Route>
        <Route path="/stake" element={<Stake/>}>  </Route>
        <Route path="/market" element={<Market/>}>  </Route>
        <Route path="/governance" element={<Governance/>}></Route>
      </Routes>
    </div>
  )
}



export default App
