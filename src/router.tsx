import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import NowPlaying from "./pages/NowPlaying";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "movies/:id",
        element: <Home />
      },
      {
        path: "coming-soon",
        element: <ComingSoon />
      },
      {
        path: "coming-soon/movies/:id",
        element: <ComingSoon />
      },
      {
        path: "now-playing",
        element: <NowPlaying />
      },
      {
        path: "now-playing/movies/:id",
        element: <NowPlaying />
      }
    ]
  }
]);
