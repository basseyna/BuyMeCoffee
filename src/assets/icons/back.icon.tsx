

interface BackIconProps extends React.ComponentPropsWithoutRef<'svg'> {

}

export default function Back({ ...otherProps }: BackIconProps) {
    return (
        <svg {...otherProps} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7H1M1 7L7 13M1 7L7 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}