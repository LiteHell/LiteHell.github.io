import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitHub, Link, Linkedin } from "react-feather";
import '../styles/index.css';
import Content from './article';
import Footer from "./footer";
import Header from "./header";

function Index() {
    const email = location.hostname === 'yeonjin.name' ? 'yeonjin@yeonjin.name' : 'litehell@litehell.info'
    return <div>
        <Header
            title="Yeonjin Shin"
            subtitle="Rookie software engineer"
            email={email}
            gpgKey="D6D80A51DDFA07A4"
            links={[
                {
                    href: 'https://github.com/litehell',
                    text: 'GitHub',
                    key: 'GitHub',
                    icon: <GitHub className="icon"></GitHub>
                },
                {
                    href: 'https://linkedin.com/in/LiteHell',
                    text: 'LinkedIn',
                    key: 'LinkedIn',
                    icon: <Linkedin className="icon"></Linkedin>
                },
                {
                    href: 'https://blog.litehell.info',
                    text: 'Blog',
                    key: 'Blog',
                    icon: <Link className="icon"></Link>
                }
            ]}
        ></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
}

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);
const root = ReactDOM.createRoot(rootDiv);
root.render(<Index />)