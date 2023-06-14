import Eye from "../assets/icons/eye.icon";
import { AppWrapper, Button, Navbar, Input } from "../components";
import styled from 'styled-components';


const Balance = styled.div`
    background: #ECECEC;
`

const StyledHeader = styled.h2<{ size?: string, weight?: number }>`
    font-size: ${props => props.size || '24px'};
    color: #000;
    font-weight: ${props => props.weight || 600 };
`

const StyledTextArea = styled.textarea`
    border: 2px solid #ececec;
    height: 15rem;
    border-radius: 5px;
    width: 100%;
    padding: 8px 13px 3px 13px;
    font-size: 12px;

    &::placeholder {
        font-weight: 500;
        font-size: 12px;
        color: #808080;
    }
`

export default function FundAccount() {
    return (
        <AppWrapper>

            <div className="lg:px-24">

                <Navbar title="Fund Account"/>

                <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:mt-16 lg:gap-x-10">
                    <div className="mt-5 lg:w-100ha lg:h-44">
                        <Balance className="balance w-full h-20 lg:h-full bg-slate-700 rounded-md flex flex-col justify-center items-center">
                            <StyledHeader className="flex gap-x-2" size={'12px'} weight={400}>
                                Total Balance
                                <Eye className="mt-1"/>
                            </StyledHeader>
                            <StyledHeader size={'20px'}>₦ 10,000.00</StyledHeader>
                        </Balance>
                    </div>

                    
                    <form className="my-6 flex flex-col gap-y-5 lg:w-100ha">
                        <Input type='number' bg={'#fff'} borderColor={"#ECECEC"} placeholder="Amount"/>

                        <StyledTextArea placeholder="Description"></StyledTextArea>

                        <Input type="password" placeholder='Transaction Passkey' bg={'#fff'} borderColor={"#ECECEC"}/>

                        <Button className="mt-8">Fund Account</Button>
                    </form>
                </div>


            </div>
        </AppWrapper>
    )
}