import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        Full-Stack Web Developer
      </SectionText>
      <Button href="#aboutMe" onClick={() => window.location = "#aboutMe"}> 
        More About Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;