import type { PluginVisualizerOptions } from 'rollup-plugin-visualizer';
import type { Plugin, UserConfig } from 'vite';

const resolveVisualizerConfig = async (
  mode: string,
  modeName: string,
  userVisualizerConfig: PluginVisualizerOptions,
): Promise<UserConfig> => {
  if (mode !== modeName) {
    return {};
  }
  const { visualizer } = await import('rollup-plugin-visualizer');
  return {
    build: {
      rollupOptions: {
        plugins: [visualizer(userVisualizerConfig)],
      },
    },
  };
};

const defaultConfig: PluginVisualizerOptions = {
  open: true,
  filename: 'analyze/stats.html',
  gzipSize: true,
  brotliSize: true,
};

export const vitePluginVisualizer = (
  config: PluginVisualizerOptions = defaultConfig,
  modeName: string = 'analyze',
): Plugin => ({
  name: 'vite-plugin-visualizer',
  config: (_, { mode }) => resolveVisualizerConfig(mode, modeName, config),
  apply: 'build',
});
