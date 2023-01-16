import { Montserrat } from "@next/font/google";
import Image from "next/image";
import { HeaderWrapper, LogoWrapper } from "./styled";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Header() {
  return (
    <HeaderWrapper>
      <h1 className={`title ${montserrat.className}`}>Igor Shop</h1>
      <LogoWrapper>
        <Image src="/logo.svg" alt="logo.svg" fill />
      </LogoWrapper>
    </HeaderWrapper>
  );
}
