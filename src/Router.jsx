import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Menswear from "./Components/Menswear";
import Womenswear from "./Components/Womenswear";
import Jewellery from "./Components/Jewellery";
import Electronics from "./Components/Electronics";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "mens",
      element: <Menswear />,
    },
    {
      path: "womens",
      element: <Womenswear />,
    },
    {
      path: "jewellery",
      element: <Jewellery />,
    },
    {
      path: "electronics",
      element: <Electronics />,
    },
  ]);
  return <RouterProvider router={router} />;
}
