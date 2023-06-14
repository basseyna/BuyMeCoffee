
interface AppWrapperProps {
    children: any
}

export default function AppWrapper({ children }: AppWrapperProps) {
    return (
        <div className="py-8 px-4 ">
            {children}
        </div>
    )
}
   