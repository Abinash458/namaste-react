import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"))
import Contact from "./components/Contact";
import RestarantMenu from "./components/RestarantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Abinash Mohapatra"
    }
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
