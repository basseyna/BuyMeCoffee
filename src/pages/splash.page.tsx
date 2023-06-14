import { AppWrapper, Button } from '../components';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AdWrapper = styled.div`
    width: 100%;
    background-color: #D9D9D9;
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

                <AdWrapper className="h-96"></AdWrapper>

                <Button className="my-5" onClick={() => navigate('onboarding')}>
                    Continue
                </Button>
            </div>
        </AppWrapper>
    )
}