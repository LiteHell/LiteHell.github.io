import { ReactNode } from 'react';
import styles from './header.module.scss';
import React from 'react';

type HeaderProp = {
  title: string;
  subtitle: string;
  links: {
    icon: ReactNode;
    href: string;
  }[];
};

export default function Header(props: HeaderProp) {
  return (
    <header className={styles.header}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <ul className={styles.links}>
        {props.links.map((i, idx) => (
          <li key={idx}>
            <div className={styles.icon}>{i.icon}</div>
            &nbsp;
            <a href={i.href}>{i.href}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
