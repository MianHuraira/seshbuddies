import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "../pages/AuthContext";

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
const ForgetPass = lazy(() => import("../pages/Registration/ForgetPass"));
// for test

const Test = lazy(() => import("../pages/Registration/PassCode"));
const Router = () => {
  const { isAuthenticated } = useAuth();
  const isAgeVerified = localStorage.getItem("isAgeVerified") === "true";
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
          element: isAuthenticated ? <Home /> : <Navigate to="/" />,
        },
        {
          path: "/users",
          element: isAuthenticated ? <Users /> : <Navigate to="/" />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signUp",
          element: isAgeVerified ? <SignUp /> : <Navigate to="/age_varifi" />,
        },
        {
          path: "/buddies",
          element: isAuthenticated ? <YourBuddies /> : <Navigate to="/" />,
        },
        {
          path: "/age_varifi",
          element: <Age />,
        },

        {
          path: "/foryou",
          element: isAuthenticated ? <ForYou /> : <Navigate to="/" />,
        },
        {
          path: "/pending",
          element: isAuthenticated ? <Pending /> : <Navigate to="/" />,
        },
        {
          path: "/Foubuddiespending",
          element: isAuthenticated ? (
            <FourBuddiesPending />
          ) : (
            <Navigate to="/" />
          ),
        },
        {
          path: "/profile",
          element: isAuthenticated ? <Profile /> : <Navigate to="/" />,
        },
        {
          path: "/account",
          element: isAuthenticated ? <Account /> : <Navigate to="/" />,
        },
        {
          path: "/notification",
          element: isAuthenticated ? <Notification /> : <Navigate to="/" />,
        },
        {
          path: "/search",
          element: isAuthenticated ? <Search /> : <Navigate to="/" />,
        },
        {
          path: "/chat",
          element: isAuthenticated ? <Chat /> : <Navigate to="/" />,
        },
        {
          path: "/reels",
          element: isAuthenticated ? <Reels /> : <Navigate to="/" />,
        },
        {
          path: "/sessions",
          element: isAuthenticated ? <Sessions /> : <Navigate to="/" />,
        },
        {
          path: "/live_stream",
          element: isAuthenticated ? <LiveStream /> : <Navigate to="/" />,
        },
        {
          path: "/privacy",
          element: isAuthenticated ? <Privacy /> : <Navigate to="/" />,
        },
        {
          path: "/acountNoti",
          element: isAuthenticated ? (
            <AcountNotification />
          ) : (
            <Navigate to="/" />
          ),
        },
        {
          path: "/acountSuport",
          element: isAuthenticated ? <AcountSuport /> : <Navigate to="/" />,
        },
        {
          path: "/acountAbout",
          element: isAuthenticated ? <AcountAbout /> : <Navigate to="/" />,
        },
        {
          path: "/forget_pass",
          element: <ForgetPass />,
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
