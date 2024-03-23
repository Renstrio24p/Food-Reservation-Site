import * as esbuild from 'esbuild';
// @ts-ignore
import LiveServer from 'alive-server';
import imagePlugin from 'esbuild-plugin-inline-image';
import copy from 'esbuild-copy-static-files';

const Server = () => {
    const liveParams = { root: 'dist', port: 4650, host: 'localhost', file: 'index.html'};
    LiveServer.start(liveParams);
};

const EsbuildOptions = {
    entryPoints: ['src/index.ts','src/**/*.ts', 'index.html'],
    outdir: 'dist',
    bundle: true,
    minify: true,
    splitting: true,
    format: 'esm',
    chunkNames: 'src/[name]-[hash]',
    // sourcemap: true,
    loader: {
        '.html': 'copy',
        '.png': 'copy',
        '.ts': 'tsx',
        '.woff2': 'file',
        '.woff': 'file',
        '.eot': 'file',
        '.ttf': 'file',
        '.svg': 'file',
        '.css': 'css',
        '.json': 'json',
        '.webp': 'file',
        '.avif': 'file',
        '.jpg': 'file',
    },
    plugins: [
        // @ts-ignore
        imagePlugin(),
        // @ts-ignore
        copy({
            src: './src/images',
            dest: './dist',
            recursive: true,
        }),
    ],
    external: ['/*.webp', '/*.avif', '/*.jpg','/*.png'],
    define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'), 'process.env': JSON.stringify(process.env) },
};

if (process.argv.includes('--build')) {
    await esbuild.build(EsbuildOptions as esbuild.BuildOptions).catch(() => {
        process.exit(1);
    });
} else {
    const ctx = await esbuild.context(EsbuildOptions as esbuild.BuildOptions).catch(() => {
        process.exit(1);
    });
    ctx.watch();
    ctx.rebuild();
    Server();
}
