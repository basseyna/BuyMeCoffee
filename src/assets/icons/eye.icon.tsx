

interface EyeIconProps extends React.ComponentPropsWithoutRef<'svg'> {

}

export default function Eye({ ...otherProps }: EyeIconProps) {
    return (
        <svg {...otherProps} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.79744 2.1624C6.02451 2.12902 6.25874 2.11111 6.5 2.11111C9.3522 2.11111 11.2238 4.6138 11.8526 5.60379C11.9287 5.72361 11.9667 5.78352 11.988 5.87593C12.004 5.94533 12.004 6.05481 11.988 6.12421C11.9667 6.21661 11.9284 6.27692 11.8517 6.39754C11.6842 6.66119 11.4288 7.03172 11.0904 7.43359M3.55221 3.06391C2.34425 3.87872 1.52418 5.01077 1.14798 5.60294C1.07153 5.72326 1.03331 5.78343 1.01201 5.87582C0.996004 5.94522 0.995997 6.05469 1.01199 6.12409C1.03329 6.21649 1.07134 6.2764 1.14743 6.39621C1.77621 7.3862 3.6478 9.88889 6.5 9.88889C7.65004 9.88889 8.64066 9.482 9.45466 8.93145M1.47164 1L11.5284 11M5.3148 4.82149C5.01149 5.1231 4.82388 5.53976 4.82388 6C4.82388 6.92047 5.5743 7.66667 6.5 7.66667C6.96285 7.66667 7.38188 7.48012 7.68519 7.17851" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}