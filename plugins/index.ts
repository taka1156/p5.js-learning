import { PluginOption } from 'vite';
import { viteMdPlugin } from './vite/markdownIt';
import { viteMpaPlugin} from './vite/mpa';
import { viteVisualizerPlugin } from './vite/visualizer';

export const vitePlugins: PluginOption[] = [
    viteMdPlugin,
    viteMpaPlugin,
    viteVisualizerPlugin
]
