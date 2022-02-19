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

export const viteVisualizerPlugin: Plugin = {
  name: 'viteMpaPlugin',
  config: (_, {mode}) => resolveVisualizerConfig(mode),
  apply: 'build',
};


