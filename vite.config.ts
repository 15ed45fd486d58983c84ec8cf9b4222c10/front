import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgx from '@svgx/vite-plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    // server: {
    //     proxy: {
    //         '/bff': {
    //             rewrite: (path: string) => path.replace(/^\/bff/g, ''),
    //             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //             // @ts-expect-error
    //             target: `${import.meta.env.VITE_SERVER_URL}` as string,
    //             changeOrigin: true,
    //             secure: false,
    //         },
    //     },
    // },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    plugins: [react(), svgx()],
    resolve: {
        alias: {
            '@': '/src',

            '@styles': '/src/app/styles',

            '@app': '/src/app',

            '@pages': '/src/pages',

            '@shared': '/src/shared',

            '@assets': '/src/shared/assets',

            '@widgets': '/src/widgets',

            '@features': '/src/features',

            '@entities': '/src/entities',

            '@store': '/src/shared/lib/store',
        },
    },
});
