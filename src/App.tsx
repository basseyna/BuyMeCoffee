import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard, Onboarding, Splash } from './pages';
import FundAccount from "./pages/fund.page";
import WithdrawFunds from "./pages/withdraw.page";
import SendGift from "./pages/send-gift.page";

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/home',
    element: <Dashboard />
  },
  {
    path: '/',
     element: <Navigate to="home"/>
  },
  {
    path: '/onboarding',
    element: <Onboarding />
  },
  
  {
    path: '/fund',
    element: <FundAccount />
  },
  {
    path: '/withdraw',
    element: <WithdrawFunds />
  },
  {
    path: '/send-gift',
    element: <SendGift />
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
