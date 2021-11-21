import React, { Fragment } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles.css";
import BookHotel from "./pages/BookHotel";
import HotelDetail from "./pages/HotelDetail";
import AppReducer from "./reducers/AppReducer";
import { useCallback, useEffect, useReducer } from "react";
import AppContext from "./components/AppContext";
import axios from "axios";
import Settings from "./pages/Settings";
import BookRestaurant from "./pages/BookRestaurant";
import RestaurantDetail from "./pages/RestaurantDetail";
import CarDetail from "./pages/CarDetail";
import BookCar from "./pages/BookCar";

const theme = extendTheme();
function Hotel() {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      {/*  */}
      <Switch>
        <Route exact path={path}>
          <BookHotel />
        </Route>
        <Route path={`${path}/:id`}>
          <HotelDetail />
        </Route>
      </Switch>
      {/*  */}
    </Fragment>
  );
}
function Restaurant() {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      {/*  */}
      <Switch>
        <Route exact path={path}>
          <BookRestaurant />
        </Route>
        <Route path={`${path}/:id`}>
          <RestaurantDetail />
        </Route>
      </Switch>
      {/*  */}
    </Fragment>
  );
}
function Car() {
  let { path, url } = useRouteMatch();
  console.log(path);
  return (
    <Fragment>
      {/*  */}
      <Switch>
        <Route exact path={path}>
          <BookCar />
        </Route>
        <Route path={`${path}/:id`}>
          <CarDetail />
        </Route>
      </Switch>
      {/*  */}
    </Fragment>
  );
}
const App = () => {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const checkCurrentUser = useCallback(async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const option = {
  //       method: "get",
  //       url: "https://pbl6-travelapp.herokuapp.com/auth/login",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const response = await axios(option);
  //     if (response.data.data.user) {
  //       const { userName } = response.data.data.user.name;
  //       dispatch({ type: "CURRENT_USER", payload: { userName } });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   checkCurrentUser();
  // }, [checkCurrentUser]);
  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/restaurant">
            <Restaurant />
          </Route>
          <Route path="/hotel">
            <Hotel />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AppContext.Provider>
    </ChakraProvider>
  );
};

export default App;
