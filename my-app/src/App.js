import "./App.css";
import "./SetTwo.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SetOne from "./Components/SetOne";
import MainContainer from "./Components/MainContainer";
import SetTwo from "./Components/SetTwo";

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
      {
        path: "/setTwo",
        element: <SetTwo />,
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
