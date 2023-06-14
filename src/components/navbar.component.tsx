import styled from 'styled-components';
import Back from '../assets/icons/back.icon';
import { useNavigate } from 'react-router-dom';

interface NavbarProps  {
    title?: string;
}

const StyledHeader = styled.h3`
    color: #000;
    font-weight: 600;
    font-size: 20px;
    margin: auto;
`

export default function Navbar({ title }: NavbarProps)  {
    const navigate = useNavigate();

    return (
        <nav className='w-full flex'>
            <Back className="w-4 h-4 cursor-pointer mt-2" onClick={() => navigate(-1)}/>
            {title && <StyledHeader className="self-center">{title}</StyledHeader>}
        </nav>
    )
}