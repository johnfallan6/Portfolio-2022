import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: "flex", alignItems: "center", color: 'whitesmoke'}}>
          <DiCssdeck size="4rem" /> <span>John Allan</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/johnfallan6" target="_blank">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/johnfallan6/" target="_blank">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/btx.laketravis/" target="_blank">
        <AiFillInstagram size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
