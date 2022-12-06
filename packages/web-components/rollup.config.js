import typescript from 'rollup-plugin-typescript2';
import {copy} from '@web/rollup-plugin-copy';

export default {
    input: ["src/index.ts"],
    output: [
        {
            dir: "dist",
            entryFileNames: "[name].js",
            format: "cjs",
            exports: "named"
        }
    ],
    plugins: [
        typescript(),
        copy({
            patterns: ['images/**/*'],
          }),
    ],
};
