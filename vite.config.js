import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isProd = command === 'build'
  const isDemo = mode === 'demo'
  const config = {
    server: {
      port: 8080,
    },
    plugins: [vue()],
  }

  if (!isProd || isDemo) {
    config.root = `${process.cwd()}/demo`
    config.build = {
      outDir: `${process.cwd()}/dist`,
      emptyOutDir: true,
    }
  }

  if (isProd && !isDemo) {
    config.build = {
      outDir: 'lib',
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
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'VueConciseCarousel',
        formats: ['es', 'cjs', 'umd'],
      },
    }
  }

  return config
}
