import { useEffect, useRef, useState } from 'react'
import './App.css'
import {initSocket} from './socket'
import { Toaster } from 'react-hot-toast'
import ACTIONS from './Actions'

import {
  useLocation,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Navigate,
  useParams,
} from 'react-router-dom';
import Home from './pages/Home'
import EditorPage from './pages/EditorPage'

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>,
      },
      {
        path : "/editor/:roomId",
        element : <EditorPage />
      }
    ]);
  

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
      ></Toaster>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
                <Routes>
                    <Route
                        path="/editor/:roomId"
                        element={<Editor />}
                    ></Route>
                </Routes>
            </BrowserRouter> */}
    </>
  )
}

export default App
