import React, { ReactNode } from 'react';
import { X } from 'react-feather';

type Options = {
    active: boolean;
    onCloseButtonClick: () => void;
    children: ReactNode | ReactNode[];
}

export default function Wrapper({ active, onCloseButtonClick, children }: Options) {
    const wrapperClasses = ["fixed top-0 left-0 w-screen h-screen flex flex-col content-center bg-black bg-opacity-75 justify-center gpg-dialog-wrapper"];
    if (!active) wrapperClasses.push('hidden');
    return <div className={wrapperClasses.join(' ')} onClickCapture={(evt) => {
        if (evt.target !== evt.currentTarget)
            return;
        onCloseButtonClick();
    }}>
        <div className='m-4 p-2 bg-slate-300 shadow rounded overflow-y-scroll md:mx-48'>
            <div className='flex flex-row-reverse'>
                <a onClick={onCloseButtonClick} className="cursor-pointer">
                    <X></X>
                </a>
            </div>
            <div className='flex-1'>
                {children}
            </div>
        </div>
    </div>;
}