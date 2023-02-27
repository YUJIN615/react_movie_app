import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        [
          { path: `${process.env.PUBLIC_URL}/`, element: <Home /> },
          { path: `${process.env.PUBLIC_URL}/movie/:id`, element: <Detail /> },
        ]
      )}
    />
  );
}

export default App;
