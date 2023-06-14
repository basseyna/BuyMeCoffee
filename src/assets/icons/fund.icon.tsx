interface FundProps extends React.ComponentPropsWithoutRef<'svg'> {

}

export default function Fund({ ...otherProps }: FundProps) {
    return (
        <svg {...otherProps} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6 15V9.75M12.2 12.375H17M17 5.375H1M17 7.125V3.8C17 2.81991 17 2.32986 16.8256 1.95552C16.6722 1.62623 16.4274 1.35852 16.1264 1.19074C15.7841 1 15.3361 1 14.44 1H3.56C2.66392 1 2.21587 1 1.87362 1.19074C1.57256 1.35852 1.32779 1.62623 1.17439 1.95552C1 2.32986 1 2.81991 1 3.8V10.45C1 11.4301 1 11.9201 1.17439 12.2945C1.32779 12.6238 1.57256 12.8915 1.87362 13.0593C2.21587 13.25 2.66392 13.25 3.56 13.25H9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


    )
}