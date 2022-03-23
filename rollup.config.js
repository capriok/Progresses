import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import sass from 'rollup-plugin-sass'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: pkg.name,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      terser(),
      typescript({ tsconfig: './tsconfig.json' }),
      copy({
        targets: [{ src: 'src/ReleaseNotes.mdx', dest: 'dist/' }],
      }),
      sass({
        output: true,
        insert: true,
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()],
  },
]

// https://github.com/sidv93/react-ts-lib
