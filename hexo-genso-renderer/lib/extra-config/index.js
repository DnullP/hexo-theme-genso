//cwd
var hexo

var fs = require('fs');
var yaml = require('js-yaml');

var init = function () {
    hexo = this;
}

var load = function () {
    var extraConfigPath = hexo.base_dir + 'themes\\Genso\\_imgURLs.yml';

    try {
        if (fs.existsSync(extraConfigPath)) {
            var extraConfig = yaml.load(fs.readFileSync(extraConfigPath, 'utf8'));
            Object.assign(hexo.config, extraConfig);
            console.log("Extra config loaded.");
            if (hexo.config.Genso.debug){
                console.log(hexo.config.imgURLs);
            }
        }
        else {
            throw "Extra config not found.";
        }
    } catch (e) {
        console.log("Loading extra config failed.");
        if (e == "Extra config not found.") {
            console.log(extraConfigPath);
        }
    }
}

module.exports = {
    init: init,
    load: load,
}