
// import './App.css'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom"
import Index from "./pages/index"
import Manage from "./pages/manage"
import Navigator from "./components/navigator"
function App() {
  return (
    <>
      <Router>
        <Navigator
          Children={
            <Routes>
              <Route path="/" element={<Index/>} />
              <Route path="/manage" element={<Manage />} />
            </Routes>
        }
        />
     </Router>
    </>
  )
}

export default App
