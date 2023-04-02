import "./App.css";
import "./Styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import SetOne from "./Components/SetOne";
import SetTwo from "./Components/SetTwo";
import SetThree from "./Components/SetThree";

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
      {
        path: "/setThree",
        element: <SetThree />,
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
