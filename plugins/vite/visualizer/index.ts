import { Plugin, UserConfig } from 'vite';
import { PluginVisualizerOptions, visualizer } from 'rollup-plugin-visualizer';

const resolveVisualizerConfig = (mode, modeName, userVisualizerConfig: PluginVisualizerOptions): UserConfig => ({
  build: {
    rollupOptions: {
      plugins: [
        mode === modeName &&
          visualizer(userVisualizerConfig),
      ],
    },
  },
});

const defaultConfig: PluginVisualizerOptions = {
  open: true,
  filename: 'analyze/stats.html',
  gzipSize: true,
  brotliSize: true,
}

export const vitePluginVisualizer = (config: PluginVisualizerOptions = defaultConfig, modeName: string = 'analyze'): Plugin => ({
  name: 'vite-plugin-visualizer',
  config: (_, {mode}) => resolveVisualizerConfig(mode, modeName, config),
  apply: 'build',
});
