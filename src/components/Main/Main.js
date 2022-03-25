import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Img } from '../Projects/ProjectsStyles';
import { LeftSection } from './MainStyles';
import { RightSection } from './MainStyles';

const Main = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        Full-Stack Web Developer
      </SectionText>
      <Button href="#timeline" onClick={() => window.location = "#timeline"}> 
        More About Me
      </Button>
    </LeftSection>
    <RightSection className="col ml-2">
      
        <Img src="./public/images/johns head picture.png" />
      
    </RightSection>
  </Section>
);

export default Main;