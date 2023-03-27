import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SetOne from "./Components/SetOne";
import MainContainer from "./Components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/setOne",
        element: <SetOne />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="text-lg">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
