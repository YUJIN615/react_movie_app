import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        [
          { path: "/", element: <Home /> },
          { path: "/detail", element: <Detail /> },
        ]
      )}
    />
  );
}

export default App;
