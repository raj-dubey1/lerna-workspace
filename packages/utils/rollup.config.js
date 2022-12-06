import typescript from 'rollup-plugin-typescript2';
// import {copy} from '@web/rollup-plugin-copy';
import copy from "rollup-plugin-copy-assets";
import dts from "rollup-plugin-dts";
const config = [
    {
      input: './index.ts',
      output: {
          dir:"dist",
          entryFileNames: "[name].js",
        format: 'cjs',
        sourcemap: true,
      },
      external: ['axios', 'os', 'url'],
      plugins: [typescript(),        copy({
        assets: [
          // You can include directories
          "./SoundManager/audio",
        ],
      }),]
    }, {
      input: 'dist/index.d.ts',
      output: {
        dir:"dist",
        entryFileNames: "[name].ts",
        format: 'es'
      },
      plugins: [dts()]
    }
  ];
  export default config;