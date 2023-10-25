import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const NotFound = lazy(() => import("../pages/PageNoteFound"));
const Profile = lazy(() => import("../pages/UserProfile"));
const StartUp = lazy(() => import("../pages/StartUp"));
const Home = lazy(() => import("../pages/Home"));
const Users = lazy(() => import("../pages/Users"));
const YourBuddies = lazy(() => import("../pages/YourBuddies"));
const Login = lazy(() => import("../pages/Registration/Login"));
const Age = lazy(() => import("../pages/Registration/AgeVarification"));
const SignUp = lazy(() => import("../pages/Registration/SignUp"));
const ForYou = lazy(() => import("../pages/ForYou"));
const Pending = lazy(() => import("../pages/Pending"));
const FourBuddiesPending = lazy(() => import("../pages/ForBuddiesPending"));
const Account = lazy(() => import("../pages/UserAccount"));
const Notification = lazy(() => import("../components/Notifications"));
const Search = lazy(() => import("../pages/Search"));
const Chat = lazy(() => import("../pages/messages/message2"));
const LiveStream = lazy(() => import("../pages/LiveStream"));
const Router = () => {
  return (
    <Suspense
      fallback={
        <div className="lazy_spiner">
          <Spinner animation="grow" variant="success" />
        </div>
      }
    >
      {useRoutes([
        {
          path: "/",
          element: <StartUp />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/buddies",
          element: <YourBuddies />,
        },
        {
          path: "/age_varifi",
          element: <Age />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },

        {
          path: "/foryou",
          element: <ForYou />,
        },
        {
          path: "/pending",
          element: <Pending />,
        },
        {
          path: "/Foubuddiespending",
          element: <FourBuddiesPending />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/notification",
          element: <Notification />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/live_stream",
          element: <LiveStream />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ])}
    </Suspense>
  );
};

export default Router;
