import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
const About = lazy(() => import("./components/About"));

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Contact from "./components/Contact";
import RestarantMenu from "./components/RestarantMenu";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// createBrowserRouter(will takes a list of paths)
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restarunts/:resId",
        element: <RestarantMenu />
      }
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
