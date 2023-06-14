import styled from 'styled-components';


interface SelectStyleProps {
    bg?: string;
    borderColor?: string;
}

const StyledSelect = styled.select<SelectStyleProps>`
    background-color: ${props => props.bg || '#EBEBEBB2'};
    width: 100%;
    height: 40px;
    padding: 8px 5px 8px 12px;
    color: #000;
    font-weight: 500;
    font-size: 12px;
    border-radius: 5px;
    border: ${props => props.borderColor ?  `2px solid ${props.borderColor}`: 'none' };



    &::placeholder {
        color: #808080;
    }
`;

interface InputStyleProps {
    bg?: string;
    borderColor?: string;
    cheight?: string;
    padding?: string;
}


const StyledInput = styled.input<InputStyleProps>`
    background-color: ${props => props.bg || '#EBEBEBB2'};
    width: 100%;
    height: ${props => props.height || '40px'};
    padding: ${props => props.padding || '13px 0 13px 18px'};
    color: #000;
    font-weight: 500;
    font-size: 12px;
    border-radius: 5px;
    border: ${props => props.borderColor ?  `2px solid ${props.borderColor}`: 'none' };


    &::placeholder {
        color: #808080;
    }
`


interface InputProps extends React.ComponentPropsWithoutRef<'input'>, InputStyleProps {

}




interface SelectProps extends React.ComponentPropsWithoutRef<'select'>, SelectStyleProps {

}



export default function Input({...others}: InputProps) {
    return (
        <StyledInput  {...others}/>
    )

}


export  function Select({...others}: SelectProps) {
    return (
        <StyledSelect  {...others}/>
    )

}