import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
    path: '/onboarding',
    element: <Onboarding />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
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
