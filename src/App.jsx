import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Error from "./ui/Error";
import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/logIn/Login";
import ForDesingers from "./pages/forPages/forDesigners/ForDesingers";
import ForDevs from "./pages/forPages/forDevs/ForDevs";
import ForProductManagers from "./pages/forPages/forProductManagers/ForProductManagers";
import ForComplianceManagers from "./pages/forPages/forComplianceManagers/ForComplianceManagers";
import Pricing from "./pages/pricing/Pricing";
import Support from "./pages/support/Support";
import Blog from "./pages/blog/Blog";
import Library from "./pages/library/Library";
import Thewe from "./pages/thewe/Thewe";
import Community from "./pages/community/Community";
import ReleaseNotes from "./pages/releaseNotes/ReleaseNotes";
import SlackCommunity from "./pages/slackCommunity/SlackCommunity";
import Suaf from "./pages/suaf/Suaf";
import Privacy from "./pages/support/privacy/Privacy";
import Tos from "./pages/tos/Tos";
import Contacts from "./pages/support/contactus/Contacts";
import FeatureRequest from "./pages/featureRequest/FeatureRequest";
import SecurityOverview from "./pages/securityOverview.jsx/SecurityOverview";
import CookiePolicy from "./pages/cookiePolicy/CookiePolicy";
import Gdpr from "./pages/gdpr/Gdpr";
import Status from "./pages/status/Status";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "sing-in",
        element: <Login />,
      },
      {
        path: "/for-designers",
        element: <ForDesingers />,
      },
      {
        path: "/for-developers",
        element: <ForDevs />,
      },
      {
        path: "/for-product-managers",
        element: <ForProductManagers />,
      },
      {
        path: "/for-compliance-managers",
        element: <ForComplianceManagers />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/wcag-explained",
        element: <Thewe />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/business-trial",
        element: <Login />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/release-notes",
        element: <ReleaseNotes />,
      },
      {
        path: "/slack",
        element: <SlackCommunity />,
      },
      {
        path: "/suaf",
        element: <Suaf />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/tos",
        element: <Tos />,
      },
      {
        path: "/support/contact-us",
        element: <Contacts />,
      },
      {
        path: "/feature-request",
        element: <FeatureRequest />,
      },
      {
        path: "/security",
        element: <SecurityOverview />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/cookies",
        element: <CookiePolicy />,
      },
      {
        path: "/gdpr",
        element: <Gdpr />,
      },
      {
        path: "/status",
        element: <Status />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
