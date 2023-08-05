

var extra_config = require("./lib/extra-config");
var katexrenderer = require("hexo-genso-renderer/lib/katex-renderer");

hexo.on('ready', extra_config.init);
hexo.on('ready', extra_config.load);


hexo.extend.filter.register('before_post_render', katexrenderer, true);