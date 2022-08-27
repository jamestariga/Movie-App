import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/'
import Shows from './pages/Shows/'
import Error from './pages/Error/'
import ID from './pages/ID/'
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
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/shows' element={<Shows />} />
              <Route path='/:id' element={<ID />} />
            </Route>
            <Route path='/*' element={<Error />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
