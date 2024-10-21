
// import './App.css'
import Index from './pages'
import Login from './pages/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      {/* <Test></Test>
      <Board />
      <DialogTest /> */}
      <Router>
        <Routes>
          <Route path='/' Component={Index} />
          <Route path='/login' Component={Login}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
