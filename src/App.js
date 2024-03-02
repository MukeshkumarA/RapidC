import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import { ThemeProvider, UserProvider } from "./utils/ContextProvider";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <ThemeProvider>
          <Header />
          <Outlet /> {/* filled by children configuration */}
          <Footer />
        </ThemeProvider>
      </UserProvider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body />, errorElement: <Error /> },
      { path: "/about", element: <About />, errorElement: <Error /> },
      { path: "/contact", element: <Contact />, errorElement: <Error /> },
      { path: "/restaurant/:restaurantId", element: <RestaurantMenu />, errorElement: <Error /> },
      { path: "/login", element: <Login />, errorElement: <Error /> },
      { path: "/cart", element: <Cart />, errorElement: <Error />}
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

