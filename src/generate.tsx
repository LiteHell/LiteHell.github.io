import { load as loadHTML } from 'cheerio';
import { createWriteStream, promises as fs } from 'fs';
import React from 'react';
import server from 'react-dom/server';
import tmp from 'tmp-promise';
import Index from './index';

(async () => {
    const tmpFile = await tmp.file();
    const filename = './dist/index.html';
    const email = process.argv[2];

    const reactStream = server.renderToPipeableStream(<Index email={email} />);
    const fileStream = createWriteStream(tmpFile.path);
    reactStream.pipe(fileStream).on('finish', async () => {
        const htmlText = await fs.readFile(filename, { encoding: 'utf8' });
        const dom = loadHTML(htmlText);
        dom('body > #root').html(await fs.readFile(tmpFile.path, { encoding: 'utf8' }));
        dom('body > #root').addClass('hydrated');

        await fs.writeFile(filename, dom.html());
        console.log('Done!');
    });
})();