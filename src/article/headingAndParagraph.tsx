import React, { ReactElement } from 'react';

interface HeadingAndParagraphOptions {
  paragraphs: (ReactElement | string)[];
  title: string;
  titleHref?: string;
}

export default function HeadingAndParagraph({ title, paragraphs }: HeadingAndParagraphOptions) {
  return (
    <>
      <h1 className="text-3xl mb-3 pb-2 pt-6 underline underline-offset-8">{title}</h1>
      {paragraphs.map(i =>
        typeof i === 'string' ? <p className="my-2 pl-1">{i}</p> : <div className="my-2 pl-1">{i}</div>
      )}
    </>
  );
}
