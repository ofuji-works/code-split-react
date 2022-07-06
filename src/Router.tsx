import { lazy, Suspense } from 'react'
import { useRoutes, RouteObject, Outlet, Navigate } from 'react-router-dom'

const AppRouter = () => {
  const Layout = () => (
    <Suspense fallback={<div>Page is loading...</div>}>
      <Outlet />
    </Suspense>
  )

  const Dashboard = lazy(() => import('page/Dashboard'))
  const PokeList = lazy(() => import('page/PokeList'))
  const PokeDetail = lazy(() => import('page/PokeDetail'))

  const route: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/poke',
          element: <PokeList />,
        },
        {
          path: '/poke/:id',
          element: <PokeDetail />,
        },
        {
          path: '*',
          element: <Navigate to="/dashboard" />,
        },
        {
          path: '',
          element: <Navigate to="/dashboard" />,
        },
      ],
    },
  ]
  const element = useRoutes(route)
  return element
}

export default AppRouter
