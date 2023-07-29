import React, { ReactElement } from 'react';

export default function backgroundImage(): ReactElement {
    return <div style={{ backgroundImage: 'url(fox.svg)' }} className="bg-amber-600 bg-center bg-no-repeat bg-cover w-full md:w-3/5 h-full card-background p-12 text-right flex flex-col justify-end bg-fixed">
    </div>;
}