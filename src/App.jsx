import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
}

export default App;
