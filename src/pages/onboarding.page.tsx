import { AppWrapper, Navbar, Input, Button } from '../components';
import styled from 'styled-components';
import { Select } from '../components/Input.component';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.h2<{ size?: string, weight?: number }>`
    font-size: ${props => props.size || '24px'};
    color: #000;
    font-weight: ${props => props.weight || 600 };
`

// interface AccountCreation {
//     bank: string;
//     accountNumber: string;
//     accountName: string;
// }

export default function Onboarding() {
    const navigate = useNavigate();
    return (
        <AppWrapper>
            <Navbar />
            
            <h1 className='hidden lg:block mt-6 text-center font-semibold text-2xl'>Buy Me Coffee</h1>
            <div className="block lg:flex lg:mt-10 lg:gap-x-10">
                <div className='bg-ha-shem-gray-200 w-100ha hidden lg:block'></div>
                <div className="page-title lg:w-100ha white lg:bg-ha-shem-gray-100 lg:p-20">
                    <StyledHeader className='mt-5'>
                        Create your Account
                    </StyledHeader>

                    <StyledHeader size={'14px'} weight={400}>
                        Add your Account Details to continue
                    </StyledHeader>

                    <form className='flex flex-col gap-y-3 mt-10' >
                        <Select placeholder='Bank' className='mr-4'> 
                            <option selected disabled>Select a Bank</option>
                        </Select>
                        <Input type="text" placeholder='Account Number'/>
                        <Input type="text" placeholder='Account Name'/>

                        <Input type="password" placeholder='Transaction Passkey'/>


                        <Button className="mt-8" onClick={() => navigate('/dashboard')}>Create Account</Button>
                    </form>
                </div>
            </div>
        </AppWrapper>
    )
}