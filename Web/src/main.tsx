import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/Root.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import TestPage from './pages/Test/Page.tsx'
import ResultPage from './pages/Result/Page.tsx'
import VotesPage from './pages/Votes/Page.tsx'
import LandingPage from './pages/Landing/Page.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="partiernes-stemmer" element={<VotesPage/>}/>
        <Route path="test" element={<TestPage/>}/>
        <Route path="resultat" element={<ResultPage/>}/>
      </Route>
    </>
  )
)

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
