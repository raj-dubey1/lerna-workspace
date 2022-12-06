import typescript from 'rollup-plugin-typescript2';
// import {copy} from '@web/rollup-plugin-copy';
import copy from "rollup-plugin-copy-assets";
export default {
    input: ["./index.ts"],
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
            assets: [
              // You can include directories
              "./SoundManager/audio",
            ],
          }),
    ],
};