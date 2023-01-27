import React, { useState } from 'react';
import { Download, Lock } from 'react-feather';
import EncryptFile from './ecnryptFile';
import EncrpytMessageDialog from './encryptMessage';
import OrangeButton from './orangeButton';
import Wrapper from './wrapper';

type Options = {
    active: boolean;
    onCloseButtonClick: () => void;
};



export default function GPGDialog({ active, onCloseButtonClick }: Options) {
    const [isEncryptMessageDialogActive, setEncryptMessageDialogActive] = useState<boolean>(false);
    return <Wrapper active={active} onCloseButtonClick={onCloseButtonClick}>
        <p className='pb-4 mx-4'>
            <abbr title='GNU Privacy Guard'>GnuPG</abbr>(줄여서 GPG, 혹은 <abbr title='Pretty Good Privacy'>PGP</abbr>)는 전자서명 및 암호화에 이용되는 프로그램입니다.<br />
            해당 홈페이지의 아래 기능들을 이용하시면 GnuPG를 직접 설치하실 필요없이 암호화하실 수 있으십니다. 이를 이용하시면 오직 저만이 확인할 수 있는 방법으로 암호화됩니다. 다만 저한테 전송까지 해주진 않으니 전송은 이메일이나 메신저등을 이용해 직접 해주셔야 합니다.<br />
            <br />
            GnuPG를 직접 이용하시는 분이시라면,  <a href="/pubkey.asc" className='cursor-pointer hover:text-sky-300 active:text-sky-400 text-sky-600'><Download className='icon' />여기서 제 공개키 파일을 직접 다운로드하실 수 있습니다.</a>
        </p>
        <OrangeButton onClick={() => { setEncryptMessageDialogActive(true); }}><Lock className='icon' /> 메세지 암호화하기</OrangeButton>
        <OrangeButton onClick={() => { EncryptFile(); }}><Lock className='icon' /> 파일 암호화하기</OrangeButton>
        <EncrpytMessageDialog active={isEncryptMessageDialogActive} onCloseButtonClick={() => setEncryptMessageDialogActive(false)}></EncrpytMessageDialog>
    </Wrapper>;
}