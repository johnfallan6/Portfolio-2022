import React from 'react';
import { DiFirebase, DiHtml5, DiReact, DiZend } from 'react-icons/di';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I have experience working with html, CSS, Sass, Bootstrap, React, React Native, SQL.
   </SectionText>
   <List>
     <ListItem>
       <DiReact size ="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           React.js
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size ="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Node.js and Databases
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiZend size ="3rem" />
       <ListContainer>
         <ListTitle>UI/UX</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Tools like Figma
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
