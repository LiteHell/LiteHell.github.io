declare module 'trianglify' {
  export default function trianglify(opts: { width: number; height: number }): {
    toSVGTree(): {
      toString: () => string;
    };
  };
}
