import LoginPage from "./Dashboard/Login"
import DashboardLayoutBasic from './Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayoutBasic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
