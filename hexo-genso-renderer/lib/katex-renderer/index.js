
var katex = require("katex")

var katexrenderer = function (data, option) {
    //将所有$$包围的内容用katex渲染
    data.content = data.content.replace(/\$\$([\s\S]*?)\$\$/g, function (whole, match) {
        return katex.renderToString(match, {
            displayMode: false,
            throwOnError: false
        });
    });
    //将所有$包围的内容用katex渲染
    data.content = data.content.replace(/\$([\s\S]*?)\$/g, function (whole, match) {
        return katex.renderToString(match, {
            displayMode: true,
            throwOnError: false
        });
    });
    data.content += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">';
    return data;
}

module.exports = katexrenderer;