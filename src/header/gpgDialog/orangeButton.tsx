import React, { ReactNode } from "react";

type Options = {
    children: ReactNode | ReactNode[];
    onClick: () => void;
    disabled?: boolean;
};

export default function OrangeButton({ children, onClick, disabled }: Options) {
    if (disabled) {
        return <button type="button" disabled className="cursor-not-allowed py-4 px-8 my-2 mx-4 bg-orange-300 rounded shadow">
            {children}
        </button>;
    } else {
        return <button type="button" className='cursor-pointer bg-orange-400 py-4 px-8 my-2 mx-4 hover:bg-orange-200 active:bg-orange-300 rounded shadow' onClick={onClick}>
            {children}
        </button>;
    }
}