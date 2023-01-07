import React, { ReactElement } from "react";

interface UnorderedListOptions {
    children: ReactElement[] | ReactElement
}

export default function UnorderedList({ children }: UnorderedListOptions) {
    return <p className="mt-2 mb-4 pl-3">
        <ul className="list-disc list-outside ml-2">
            {children}
        </ul>
    </p>;
}