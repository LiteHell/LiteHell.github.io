import { readToEnd as readStreamToEnd } from '@openpgp/web-stream-tools';
import * as openpgp from 'openpgp';
import React, { useState } from 'react';
import OrangeButton from './orangeButton';
import Wrapper from './wrapper';

type Options = {
  active: boolean;
  onCloseButtonClick: () => void;
};

async function encryptMessage(message: string): Promise<string> {
  const armoredKey = await (await fetch('/pubkey.asc')).text();
  const key = await openpgp.readKey({ armoredKey: armoredKey });
  const encrypted = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: [key],
    format: 'armored',
  });

  return readStreamToEnd(encrypted);
}

export default function EncrpytMessageDialog({ active, onCloseButtonClick }: Options) {
  const [message, setMessage] = useState<string>('');
  const [encrypting, setIsEncrypting] = useState<boolean>(false);
  const [encrypted, setIsEncrypted] = useState<boolean>(false);
  const encryptOrClearText = async () => {
    if (encrypting) {
      return;
    } else if (encrypted) {
      setMessage('');
      setIsEncrypted(false);
    } else {
      setIsEncrypting(true);
      setMessage(await encryptMessage(message));
      setIsEncrypted(true);
      setIsEncrypting(false);
    }
  };

  const selectAllTextWhenEncrypted: React.ReactEventHandler<HTMLTextAreaElement> = evt => {
    if (encrypted) {
      (evt.target as HTMLTextAreaElement).select();
    }
  };

  const buttonText = encrypting ? '암호화중입니다...' : encrypted ? '지우고 다시 암호화하기' : '암호화';
  return (
    <Wrapper active={active} onCloseButtonClick={onCloseButtonClick}>
      <div className="flex flex-col">
        <p className="mb-2 mx-4">
          암호화할 메세지를 입력하신 후 "암호화" 버튼을 눌러주세요. 그러면 암호화된 내용이 나타납니다.
        </p>
        <div className="flex-grow w-full px-4">
          <textarea
            onFocus={selectAllTextWhenEncrypted}
            onClick={selectAllTextWhenEncrypted}
            className="w-full h-64 block read-only:bg-zinc-200"
            value={encrypting ? '암호화중입니다...' : message}
            onChange={evt => setMessage(evt.target.value)}
            readOnly={encrypted || encrypting}
          ></textarea>
        </div>
        <OrangeButton onClick={encryptOrClearText} disabled={encrypting}>
          {buttonText}
        </OrangeButton>
      </div>
    </Wrapper>
  );
}
