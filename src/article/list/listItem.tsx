import React, { ReactElement } from "react";

interface ListItemOptions {
    children: (ReactElement | string)[] | ReactElement
}

export default function ListItem({ children }: ListItemOptions) {
    return <li><div className="inline-table pt-3" style={{ maxWidth: '95%' }}>
        {Array.isArray(children) ? children.map(i => typeof i === 'string' ? <span>{i}</span> : i) : children}
    </div></li>
}