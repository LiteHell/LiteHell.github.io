import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitHub, Link, Linkedin } from 'react-feather';
import '../styles/index.css';
//import Content from './article';
//import Footer from "./footer";
import Header from './header';
import isBrowser from './isBrowser';

export default function Index({ email }: { email: string }) {
  return (
    <div>
      <Header
        title="Yeonjin Shin"
        subtitle="Rookie software engineer"
        email={email}
        gpgKey="C541E605C4618F4C"
        links={[
          {
            href: 'https://github.com/litehell',
            text: 'GitHub',
            key: 'GitHub',
            icon: <GitHub className="icon"></GitHub>,
          },
          {
            href: 'https://linkedin.com/in/LiteHell',
            text: 'LinkedIn',
            key: 'LinkedIn',
            icon: <Linkedin className="icon"></Linkedin>,
          },
          {
            href: 'https://blog.litehell.info',
            text: 'Blog',
            key: 'Blog',
            icon: <Link className="icon"></Link>,
          },
          {
            href: '/portfolio',
            text: 'Portfolio',
            key: 'Portfolio',
            icon: <Link className="icon"></Link>,
          },
        ]}
      ></Header>
      {/* <Content></Content>
        <Footer></Footer> */}
    </div>
  );
}

if (isBrowser()) {
  const email = location.hostname === 'yeonjin.name' ? 'yeonjin@yeonjin.name' : 'litehell@litehell.info';
  const rootDiv = document.querySelector('body > #root')!;
  if (rootDiv.classList.contains('hydrated')) {
    ReactDOM.hydrateRoot(rootDiv, <Index email={email} />);
  } else {
    const root = ReactDOM.createRoot(rootDiv);
    root.render(<Index email={email} />);
  }
}
