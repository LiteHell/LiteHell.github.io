import { readToEnd as readStreamToEnd } from '@openpgp/web-stream-tools';
import * as zip from '@zip.js/zip.js';
import * as openpgp from 'openpgp';

async function encryptFileWithGpg(file: File | Blob, filename: string): Promise<string> {
  const armoredKey = await (await fetch('/pubkey.asc')).text();
  const key = await openpgp.readKey({ armoredKey: armoredKey });
  const encrypted = await openpgp.encrypt({
    message: await openpgp.createMessage({
      filename: filename,
      binary: file.stream(),
    }),
    encryptionKeys: [key],
    format: 'armored',
  });

  return readStreamToEnd(encrypted);
}

export default async function EncryptFile() {
  const fileElement = document.createElement('input');
  fileElement.type = 'file';
  fileElement.multiple = true;
  fileElement.addEventListener('input', async () => {
    const files = fileElement.files;
    if (files === null || files?.length === 0) {
      return alert('선택된 파일이 없습니다');
    } else {
      const hasMultipleFiles = files.length !== 1;
      let encryptionTarget: Blob | File;
      const filename = hasMultipleFiles ? 'files.zip' : files[0].name;
      if (hasMultipleFiles) {
        const zipWriter = new zip.ZipWriter(new zip.BlobWriter('application/zip'), { bufferedWrite: true });
        for (let i = 0; i < files.length; i++) {
          zipWriter.add(files[i].name, files[i].stream());
        }
        encryptionTarget = await zipWriter.close();
      } else {
        encryptionTarget = files[0];
      }
      const encrypted = await encryptFileWithGpg(encryptionTarget, filename);
      const blob = new Blob([encrypted], { type: 'application/pgp-encrypted' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = filename + '.gpg';
      downloadLink.click();
    }
  });

  fileElement.click();
}
