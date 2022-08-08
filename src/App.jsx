import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home/'
import Shows from './pages/Shows/'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/shows' element={<Shows />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
