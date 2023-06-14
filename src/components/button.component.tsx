import styled from 'styled-components';

interface ButtonStyleProps {
    color?: string;
    bg?: string;
    weight?: number;
}

const StyledButton = styled.button<ButtonStyleProps>`
    color: ${props => props.color || '#fff'};
    background-color: ${props => props.bg || '#1F1F1F'};
    width: 100%;
    height: 50px;
    border-radius: 5px;
    font-weight: ${ props => props.weight || 600};
    font-size: 16px;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
`

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>, ButtonStyleProps {

}




export default function Button({ children, ...otherProps }: ButtonProps, ref: any) {
    return (
        <StyledButton {...otherProps}>
            {children}
        </StyledButton>
    )
}