import React, { ReactElement } from "react";
import StyledAnchor from "../styledAnchor";

interface Options {
    name: ReactElement | string;
    techs: string[];
    href?: string;
    children: ReactElement | ReactElement[]
}
export default function ProjectListItemContent({ name, techs, href, children }: Options) {
    return <p><span className="text-lg font-semibold">
        {href ? <StyledAnchor href={href}>{name}</StyledAnchor> : name}
    </span>&nbsp;<span className="text-sm text-gray-600">{techs.join(', ')}</span><br />
        {children}
    </p>
}