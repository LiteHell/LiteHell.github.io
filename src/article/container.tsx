import React, { ReactElement } from 'react';

export default function Container({ children }: { children: ReactElement[] }) {
    return <main>
        <article className="container mx-auto p-10 mt-10">
            {children}
        </article>
    </main>;
}