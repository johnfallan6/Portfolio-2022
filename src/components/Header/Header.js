import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import { GiLightBulb } from 'react-icons/gi';
import { GoLightBulb } from 'react-icons/go';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: "flex", alignItems: "center", color: 'whitesmoke', marginBottom: '20px'}}>
          <DiReact size="4rem" /> <Span>John Allan</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#timeline">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#lightmode">
          <NavLink>
            <GoLightBulb size ="2rem" />
          </NavLink>
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
