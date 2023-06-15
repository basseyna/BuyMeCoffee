import { BrowserRouter, Routes, Route, Outlet  } from "react-router-dom";
import { Dashboard, Onboarding, Splash } from './pages';
import FundAccount from "./pages/fund.page";
import WithdrawFunds from "./pages/withdraw.page";
import SendGift from "./pages/send-gift.page";
import React from 'react';



// const router  = createBrowserRouter([
//   {
//     path: '/',
//     element: <Splash />,
//   },
//   {
//     path: '/home',
//     element: <Dashboard />
//   },
//   {
//     path: '/',
//      element: <Navigate to="home"/>
//   },
//   {
//     path: '/onboarding',
//     element: <Onboarding />
//   },
  
//   {
//     path: '/fund',
//     element: <FundAccount />
//   },
//   {
//     path: '/withdraw',
//     element: <WithdrawFunds />
//   },
//   {
//     path: '/send-gift',
//     element: <SendGift />
//   }

// ]);

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<><Outlet /></>}>
          <Route index element={<Splash />}/>
          <Route path="home" element={<Dashboard />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="fund" element={<FundAccount />} />
          <Route path="withdraw" element={<WithdrawFunds />} />
          <Route path="send-gift" element={<SendGift />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
