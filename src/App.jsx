import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/'
import Shows from './pages/Shows/'
import Error from './pages/Error/'
import ID from './pages/ID/'
import ShowsID from './pages/ShowsID'
import Person from './pages/Person'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
          <Router>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/shows' element={<Shows />} />
                <Route path='/Movie/:id' element={<ID />} />
                <Route path='/Show/:id' element={<ShowsID />} />
                <Route path='/person/:id' element={<Person />} />
              </Route>
              <Route path='/*' element={<Error />} />
            </Routes>
          </Router>
        </SkeletonTheme>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
