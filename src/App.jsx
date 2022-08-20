import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SideNavigation from './components/SideNavigation'
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
          <SideNavigation />
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
