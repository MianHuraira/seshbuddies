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
const Reels = lazy(() => import("../pages/Reels"));
const Sessions = lazy(() => import("../pages/Sessions"));
const LiveStream = lazy(() => import("../pages/LiveStream"));
const Privacy = lazy(() => import("../pages/Privacy"));
const AcountNotification = lazy(() => import("../pages/AcountNotification"));
const AcountSuport = lazy(() => import("../pages/AcountSuport"));
const AcountAbout = lazy(() => import("../pages/AcountAbout"));
// for test

const Test = lazy(() => import("../pages/Registration/PassCode"));
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
          path: "/test",
          element: <Test />,
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
          path: "/reels",
          element: <Reels />,
        },
        {
          path: "/sessions",
          element: <Sessions />,
        },
        {
          path: "/live_stream",
          element: <LiveStream />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/acountNoti",
          element: <AcountNotification />,
        },
        {
          path: "/acountSuport",
          element: <AcountSuport />,
        },
        {
          path: "/acountAbout",
          element: <AcountAbout />,
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
