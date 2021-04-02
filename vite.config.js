import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isProd = command === 'build'
  const formats = mode === 'es' ? ['es'] : ['cjs', 'iife']
  const config = {
    mode: isProd ? 'production' : '',
    plugins: [vue()],
  }
  if (isProd) {
    config.build = {
      rollupOptions: {
        external: ['vue'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
      lib: {
        entry: path.resolve(__dirname, 'src/entry.js'),
        name: 'VueConciseCarousel',
        formats,
      },
      terserOptions: {
        ecma: 5,
      },
    }
  } else {
    config.server = {
      open: '/demo/template.html',
      hmr: false,
    }
  }
  return config
}
