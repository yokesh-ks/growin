import react from "react";

import {
  HeroContainer,
  CauroselItem,
  CauroselContainer,
  Content,
  Title,
  Description,
  Button
} from "./HeroStyles";

const Hero = () => (
  <HeroContainer>
    <CauroselItem>
      <CauroselContainer>
        <Content>
          <Title>Grow Your Business</Title>
          <Description>
            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est
            quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
            Similique ea voluptatem. Esse doloremque accusamus repellendus
            deleniti vel. Minus et tempore modi architecto.
          </Description>
          <Button>See More</Button>
        </Content>
      </CauroselContainer>
    </CauroselItem>
  </HeroContainer>
);

export default Hero;
