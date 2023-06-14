import { useNavigate } from "react-router-dom";
import Eye from "../assets/icons/eye.icon";
import Fund from "../assets/icons/fund.icon";
import Send from "../assets/icons/send.icon";
import Withdraw from "../assets/icons/withdraw.icon";
import { AppWrapper, Button  } from "../components"
import styled from 'styled-components';

const StyledHeader = styled.h2<{ size?: string, weight?: number }>`
    font-size: ${props => props.size || '24px'};
    color: #000;
    font-weight: ${props => props.weight || 600 };
`


const Balance = styled.div`
    background: #ECECEC;
`

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <AppWrapper>
            <div className="lg:px-24">
                <div className="mt-3 flex gap-x-4">
                    <div className="rounded-full w-12 h-12 mt-2 bg-gray-500">
                    </div>

                    <div className="flex flex-col mt-2">
                        <StyledHeader size={'12px'} weight={400}>Good Morning</StyledHeader>
                        <StyledHeader size={'20px'}>Bassey A. Akan</StyledHeader>
                    </div>
                </div>
                <div className="mt-5 lg:flex lg:justify-center">
                    <Balance className="balance w-full h-20 bg-slate-700 rounded-md flex flex-col justify-center items-center lg:w-96">
                        <StyledHeader className="flex gap-x-2" size={'12px'} weight={400}>
                            Total Balance
                            <Eye className="mt-1"/>
                        </StyledHeader>
                        <StyledHeader size={'20px'}>₦ 10,000.00</StyledHeader>
                    </Balance>
                </div>

                <div className="mt-8 flex flex-col gap-y-6 lg:flex-row lg:gap-y-0 lg:gap-x-8">
                    <Button className="flex justify-center items-center gap-x-2 lg:w-96 " bg={'#ECECEC'} color={'#000000'} weight={500} onClick={() => navigate('/send-gift')}>
                        <Send />
                        Send Gift
                    </Button>
                    <Button className="flex justify-center items-center gap-x-2" bg={'#ECECEC'} color={'#000000'}  weight={500} onClick={() => navigate('/fund')}>
                        <Fund />
                        Fund Account
                    </Button>
                    <Button className="flex justify-center items-center gap-x-2" bg={'#ECECEC'} color={'#000000'}  weight={500} onClick={() => navigate('/withdraw')}>
                        <Withdraw />
                        Withdraw Funds
                    </Button>
                </div>

                <div className="flex justify-center">

                    <div className="lg:w-200ha w-full">
                        <Button className="mt-10 ">Logout</Button>
                    </div>

                </div>

            </div>
        </AppWrapper>
    )
}