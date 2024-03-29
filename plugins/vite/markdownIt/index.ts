import { Plugin } from 'vite';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';
import markdownIt from 'markdown-it';
import markdownItContainer from 'markdown-it-container';

const containerMdExtend = (md) => ({
  validate: function(params) {
    return params.trim().match(/^spoiler\s+(.*)$/);
  },
  render: function (tokens, idx) {
    const m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
    } else {
      return '</details>\n';
    }
  }
});

export const vitePluginMd = (): Plugin => mdPlugin({
  mode: [Mode.HTML, Mode.TOC],
  markdownIt: markdownIt({ html: true })
    .use(markdownItContainer, 'spoiler', containerMdExtend(markdownIt()))
});
