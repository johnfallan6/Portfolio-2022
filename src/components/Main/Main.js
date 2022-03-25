import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Img } from '../Projects/ProjectsStyles';
import { LeftSection } from './MainStyles';
import { RightSection } from './MainStyles';
import { FadeTransform } from 'react-animation-components';
import {Spring} from 'react-spring';

const Main = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        <h1>John Allan</h1> 
        <h2>Full-Stack Web Developer</h2>
      </SectionText>
      <Button href="#timeline" onClick={() => window.location = "#timeline"}> 
        More About Me
      </Button>
    </LeftSection>
    <Spring
    from={{opacity: 0, marginLeft: -500 }}
    to={{opacity: 1, marginTop: 0}}
    >
      {props => (
        <div>
    <RightSection className="col">  
          <img 
          src="/images/johns head picture.png"
          height="auto"
          width="450"
          alt="Johns Head Picture"
          />   
    </RightSection>
    </div>
      )}
    </Spring>
  </Section>
);

export default Main;