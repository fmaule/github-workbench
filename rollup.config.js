import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    typescript(),
  ],
}
