import { Inter, Montserrat } from "@next/font/google"
import { HeaderWrapper } from "./styled"


const inter = Montserrat({ subsets: ['latin'] })

export default function Header(){
    return(
        <HeaderWrapper>
            <h1 className={`title ${inter.className}`}>Igor Shop</h1>

        </HeaderWrapper>
    )
}