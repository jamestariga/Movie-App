import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home/'
import Shows from './pages/Shows/'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} exact></Route>
            <Route path='/shows' element={<Shows />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
