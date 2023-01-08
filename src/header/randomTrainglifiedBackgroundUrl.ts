import isBrowser from '../isBrowser';

interface RandomTrianglifiedBackgroundUrlOptions {
    width: number;
    height: number;
}

export async function randomTrianglifiedBackgroundUrl(opts: RandomTrianglifiedBackgroundUrlOptions): Promise<string> {
    if (isBrowser()) {
        const { default: trianglify } = await import('trianglify');
        const pattern = trianglify(opts);
        const svg = pattern.toSVGTree().toString();
        const blob = new Blob([svg], { type: 'image/svg+xml' });
        const blobUrl = URL.createObjectURL(blob);

        return blobUrl;
    } else {
        return '';
    }
}