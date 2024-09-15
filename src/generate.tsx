import { load as loadHTML } from 'cheerio';
import { createWriteStream, promises as fs } from 'fs';
import React, { ReactNode } from 'react';
import server from 'react-dom/server';
import tmp from 'tmp-promise';
import Index from './index';
import Portfolio from './portfolio/portfolio';

const render = async (filename: string, node: ReactNode) => {
    const tmpFile = await tmp.file();

    const reactStream = server.renderToPipeableStream(node);
    const fileStream = createWriteStream(tmpFile.path);
    reactStream.pipe(fileStream).on('finish', async () => {
        const htmlText = await fs.readFile(filename, { encoding: 'utf8' });
        const dom = loadHTML(htmlText);
        dom('body > #root').html(await fs.readFile(tmpFile.path, { encoding: 'utf8' }));
        dom('body > #root').addClass('hydrated');

        await fs.writeFile(filename, dom.html());
        console.log('Done!');
    });
};

(async () => {
    const email = process.argv[2];
    await render('./dist/index.html', <Index email={email} />);
    await render('./dist/portfolio/index.html', <Portfolio />);
})();