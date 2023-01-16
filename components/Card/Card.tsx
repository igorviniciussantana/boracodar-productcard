import { CardWrapper, Code, Price, Title } from "./styled";

import { Crimson_Pro, Lato } from "@next/font/google";

const crimsom_pro = Crimson_Pro({ weight: "600" });
const lato = Lato({ weight: ["400"] });

export default function Card() {
  return (
    <CardWrapper>
      <Code className={lato.className}>CÓDIGO: 42404</Code>

      <Title className={crimsom_pro.className}>Sofá Margot II - Rosé</Title>

      <Price className={lato.className}>R$ 4.000</Price>
    </CardWrapper>
  );
}
