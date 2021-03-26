import React, { useEffect, Suspense, lazy } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../src/redux/auth/auth-operations";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const HomeView = lazy(() => import("../src/views/HomeView"));
const ContactsView = lazy(() => import("../src/views/ContactsView"));
const RegisterView = lazy(() => import("../src/views/RegisterView"));
const LoginView = lazy(() => import("../src/views/LoginView"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            component={RegisterView}
            restricted
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            component={LoginView}
            restricted
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
