import { PluginOption } from 'vite';
import { vitePluginMd } from './vite/markdownIt';
import { vitePluginMpa } from './vite/mpa';
import { vitePluginVisualizer } from './vite/visualizer';

export const vitePlugins: PluginOption[] = [
    vitePluginMd,
    vitePluginMpa,
    vitePluginVisualizer
]
