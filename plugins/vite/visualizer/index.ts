import { Plugin, UserConfig } from 'vite';
import { PluginVisualizerOptions, visualizer } from 'rollup-plugin-visualizer';

const visualizerConfig: PluginVisualizerOptions = {
    open: true,
    filename: 'analyze/stats.html',
    gzipSize: true,
    brotliSize: true,
  }

const resolveVisualizerConfig = (mode): UserConfig => ({
  build: {
    rollupOptions: {
      plugins: [
        mode === 'analyze' &&
          visualizer(visualizerConfig),
      ],
    },
  },
});

// modeを使うため、vite専用プラグイン扱い
export const vitePluginVisualizer = (): Plugin => ({
  name: 'vite-plugin-visualizer',
  config: (_, {mode}) => resolveVisualizerConfig(mode),
  apply: 'build',
});


