import React, { createRef, ReactElement, useEffect, useState } from 'react';
import { randomTrianglifiedBackgroundUrl } from "./randomTrainglifiedBackgroundUrl";

export default function backgroundImage(): ReactElement {
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
    const backgroundRef = createRef<HTMLDivElement>();
    useEffect(() => {
        if (backgroundImage === null && backgroundRef.current !== null)
            randomTrianglifiedBackgroundUrl({
                width: backgroundRef.current.getBoundingClientRect().width,
                height: backgroundRef.current.getBoundingClientRect().height
            }).then(url => {
                setBackgroundImage(`url(${url})`);
            });
    })

    return <div style={{ backgroundImage: backgroundImage ?? '' }} ref={backgroundRef} className="bg-amber-600 bg-no-repeat bg-cover w-full md:w-3/5 h-full card-background p-12 text-right flex flex-col justify-end bg-fixed">
    </div>;
}