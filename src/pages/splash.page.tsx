import { AppWrapper, Button } from '../components';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AD from '../assets/coffee-logo.png';

const AdWrapper = styled.div`
    width: 100%;
    background-color: transparent;
    height: 40rem;

`

const StyledHeader = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #000;
`

export default function Splash() {
    const navigate = useNavigate();


    return (
        <AppWrapper>
            <div className='lg:px-24'>
                <StyledHeader className='text-center my-5'>Buy Me Coffee</StyledHeader>

                <AdWrapper className="h-96 lg:h-40 flex justify-center pt-24">
                    <img src={AD} alt="coffee-ad"  className="object-contain h-96"/>
                 </AdWrapper>


                 <div className="flex justify-center">
                    <div className="w-full lg:w-1/2">
                        <Button className="w-60" onClick={() => navigate('/onboarding')}>
                            Continue
                        </Button>
                    </div>
                 </div>

            </div>
        </AppWrapper>
    )
}