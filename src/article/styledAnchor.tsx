import React, { ReactElement } from "react";

interface StyledAnchorOptions {
    children: ReactElement[] | ReactElement | string,
    href: string
}

export default function StyledAnchor({ children, href }: StyledAnchorOptions) {
    return <a href={href} className="text-blue-600 hover:text-blue-800 focus:text-blue-800 active:text-blue-900 visited:text-orange-800">{children}</a>
}