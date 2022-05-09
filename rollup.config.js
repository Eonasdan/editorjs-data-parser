const typescript = require('@rollup/plugin-typescript');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/bundle.js',
                format: 'umd',
                name: 'eonasdan',
                sourcemap: true,
            }
        ],
        plugins: [
            typescript(),
        ],
        external: [

        ]
    }
];
