const webpack = require('webpack');
const path = require('path');

hexo.on("generateBefore", function (post) {
    webpack(
        {
            entry: { path: path.resolve(__dirname, '../_source/js/test.js') },
            output: { filename: 'target_test.js', path: path.resolve(__dirname, '../source/js') },
        }
        ,
        (err, stats) => {
            process.stdout.write(stats.toString() + '\n');
        }
    );
});