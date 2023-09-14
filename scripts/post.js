const utils = require('hexo-util');
const PrismUtil = require('hexo-util/lib/prism');

hexo.extend.filter.register('marked:renderer', function (renderer) {
    const { config } = this; // Skip this line if you don't need user config from _config.yml
    const originalCodeRenderer = renderer.code;

    renderer.code = function (code, language) {
        if (language === 'mermaid' || language === 'Mermaid') {
            return `<div class="mermaid">${code}</div>`;
        }
        else {
            const highligntConfig = {
                lineNumber: false,
                lang: language,
            }
            return PrismUtil(code, highligntConfig);
        }
    };
})
