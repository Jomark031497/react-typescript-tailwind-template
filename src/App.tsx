import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <>Homepage</>,
      },
      {
        path: '/about',
        element: <>about</>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
