import React, { ReactElement } from "react";

interface CVListItem {
    title: string;
    titleHref?: string;
    startYear: number;
    endYear?: number;
    children: ReactElement[] | ReactElement
}

export default function CVListItemContent({ children, ...options }: CVListItem) {
    return <div>
        <span className="text-lg font-semibold inline">{options.titleHref ? <a href={options.titleHref}>{options.title}</a> : options.title}</span>&nbsp;
        <span className="text-sm">{options.startYear} ~ {options.endYear ?? '현재'}</span>
        <br />
        {children}</div>;
}