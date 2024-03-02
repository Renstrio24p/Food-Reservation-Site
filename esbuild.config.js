import * as esbuild from 'esbuild'
import LiveServer from 'alive-server'
import imagePlugin from 'esbuild-plugin-inline-image'
import copy from 'esbuild-copy-static-files'

const generateNonce = () => {
    const nonceLength = 32; 
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let nonce = '';
    for (let i = 0; i < nonceLength; i++) {
        nonce += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return nonce;
};

const Server = (nonce) => {
    const liveParams = {
        root: 'dist',
        port: 4650,
        host: 'localhost',
        file: 'index.html',
        fallback: 'index.html',
        headers: {
            'Content-Security-Policy': `default-src 'self'; script-src 'self' 'nonce-${nonce}'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://food-reservation.vercel.app/ sha256-<hFiMacGS/DT3jfBPaCojQ22ArBEbw5Nsd1jMxzuMLNE=>`
        }
    };
    LiveServer.start(liveParams);
};

const EsbuildOptions = {
        entryPoints:['src/index.ts','index.html','src/**/*.ts'],
        outdir: 'dist',
        bundle: true,
        allowOverwrite: true,
        minify: true,
        splitting: true,
        format: 'esm',
        minifyWhitespace: true,
        // sourcemap: true,
        loader: {
            '.html':'copy',
            '.png':'file',
            '.css':'css',
            '.ts':'ts',
            '.woff': 'file',
            '.woff2': 'file',
            '.eot': 'file',
            '.ttf': 'file',
            '.jpg': 'file',
            '.webp': 'file',
            '.avif': 'file'
        },
        external: ['/*.png','/*.jpg','/*.webp','/*.avif'],
        plugins: [
            imagePlugin(),
            copy({
                src: './src/images',
                dest: './dist',
                recursive: true,
              }),
        ],
        define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'), 'process.env': JSON.stringify(process.env) },
    }

    if(process.argv.includes('--build')){
        const now = Date.now()
        await esbuild.build(EsbuildOptions).catch(() => {
            process.exit(1)
        });
        const end = Date.now()
        console.log(`build in ${((end - now) / 1000).toFixed(2)}`)
    } else {
        const now = Date.now()
        const ctx = await esbuild.context(EsbuildOptions).catch(() => {
            process.exit(1)
        });
        ctx.watch()
        Server()
        const end = Date.now()
        console.log(`serve in ${((end - now) / 1000).toFixed(2)}`)
    }
