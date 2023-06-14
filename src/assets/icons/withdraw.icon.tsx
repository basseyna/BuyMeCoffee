interface WithdrawProps extends React.ComponentPropsWithoutRef<'svg'> {

}

export default function Withdraw({ ...otherProps }: WithdrawProps) {
    return (
        <svg {...otherProps} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2 14H17M17 6H1M17 9.5V4.2C17 3.0799 17 2.51984 16.8256 2.09202C16.6722 1.7157 16.4274 1.40974 16.1264 1.21799C15.7841 1 15.3361 1 14.44 1H3.56C2.66392 1 2.21587 1 1.87362 1.21799C1.57256 1.40973 1.32779 1.71569 1.17439 2.09202C1 2.51984 1 3.0799 1 4.2V11.8C1 12.9201 1 13.4802 1.17439 13.908C1.32779 14.2843 1.57256 14.5903 1.87362 14.782C2.21587 15 2.66392 15 3.56 15H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}