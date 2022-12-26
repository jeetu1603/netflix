import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  const user = true;

  const ProtectedRoute = ({ children }) => {
    if (!user) return <Navigate to="/login" />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/movies",
          element: (
            <ProtectedRoute>
              <Home type="movies" />
            </ProtectedRoute>
          ),
        },
        {
          path: "/series",
          element: (
            <ProtectedRoute>
              <Home type="series" />
            </ProtectedRoute>
          ),
        },
        {
          path: "/watch",
          element: (
            <ProtectedRoute>
              <Watch />
            </ProtectedRoute>
          ),
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
