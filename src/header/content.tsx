import React, { ReactElement, useState } from 'react';
import { Code } from 'react-feather';
import GPGDialog from './gpgDialog';

interface HeaderContentLink {
    href: string;
    icon: ReactElement;
    text: string;
    key: string;
}

export interface HeaderContentOptions {
    title: string;
    subtitle: string;
    email: string;
    gpgKey: string;
    links: HeaderContentLink[]
}

function formatGpgKey(gpgKey: string): string {
    let result = '';
    let counter = 0;
    for (let i = 0; i < gpgKey.length; i++) {
        result += gpgKey[i];
        counter = ++counter % 4;
        if (counter == 0) {
            result += ' ';
        }
    }

    return result;
}

export default function Content(opts: HeaderContentOptions): ReactElement {
    const [isGPGDialogActive, setIsGPGDialogActive] = useState<boolean>(false);
    const toggleGPGDialog = (newValue?: boolean) => { setIsGPGDialogActive(newValue ?? !isGPGDialogActive); };
    return <div className="p-12 pt-6 md:pt-12 align-bottom text-left md:w-full h-full flex-1 flex flex-col justify-between bg-gray-50 bg-bottom" id="card-title">
        <div className="text-left text-xl mb-12">
            <Code className="icon"></Code>
        </div>
        <div className="text-left w-full font-sans">
            <h1 className="text-4xl font-normal">{opts.title}</h1>
            <p className="text-xl font-light">{opts.subtitle}</p>
            <div className="border-gray-700 border-x-0 border-y h-0 w-64 my-5"></div>
            <p><i data-feather="mail"></i> E-mail: <a className="hover:text-gray-700"
                href={`mailto:${opts.email}`}>{opts.email}</a><br />
                <i data-feather="key"></i> GPG Key:&nbsp;
                <a onClick={() => toggleGPGDialog()} className="hover:text-gray-700 cursor-pointer">
                    <code>{formatGpgKey(opts.gpgKey)}</code>
                </a>
            </p>
            <ul className="mt-1.5">
                {opts.links.map(i => <li className="inline mr-2 last:mr-0" key={i.key}>
                    <a className="hover:text-gray-700" href={i.href}>
                        {i.icon}&nbsp;{i.text}
                    </a>
                </li>)}
            </ul>
           {/* <div className="text-sm mt-3 text-gray-700">Scroll down to see more...</div> */}
        </div>
        <GPGDialog active={isGPGDialogActive} onCloseButtonClick={() => toggleGPGDialog(false)}></GPGDialog>
    </div>
}