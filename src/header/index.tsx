import React, { ReactElement } from 'react';
import BackgroundImage from './backgroundImage';
import Content, { HeaderContentOptions } from './content';

export default function Header(opts: HeaderContentOptions): ReactElement {
  return (
    <header className="h-dynamic-screen w-dynamic-screen flex flex-col md:flex-row-reverse shadow-md">
      <BackgroundImage></BackgroundImage>
      <Content {...opts}></Content>
    </header>
  );
}
