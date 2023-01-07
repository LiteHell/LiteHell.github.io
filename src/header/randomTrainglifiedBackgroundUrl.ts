import trianglify from 'trianglify';
interface RandomTrianglifiedBackgroundUrlOptions {
    width: number;
    height: number;
}
export function randomTrianglifiedBackgroundUrl(opts: RandomTrianglifiedBackgroundUrlOptions): string {
    const pattern = trianglify(opts);
    const svg = pattern.toSVGTree().toString();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const blobUrl = URL.createObjectURL(blob);

    return blobUrl;
}