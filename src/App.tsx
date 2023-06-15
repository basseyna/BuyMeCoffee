import { BrowserRouter, Routes, Route, Outlet  } from "react-router-dom";
import { Dashboard, Onboarding, Splash } from './pages';
import FundAccount from "./pages/fund.page";
import WithdrawFunds from "./pages/withdraw.page";
import SendGift from "./pages/send-gift.page";

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
