const webpack = require('webpack');
const path = require('path');

hexo.on("generateBefore", function (post) {
    var paths = hexo.theme.config.scripts
    var source = hexo.theme.config.rawSource
    var entry = paths.map(str => '../' + source + str);
    var output = paths.map(str => './' + str.replace(/\.js$/, '.js'));
    var proceeding = []
    console.log(__dirname)
    entry.forEach((item, index) => {
        proceeding.push({
            entry: { path: path.resolve(__dirname, item) },
            output: { filename: output[index], path: path.resolve('./public/') },
            module: {
                rules: [
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                ],
            },
            mode: 'production',
        })
    })
    webpack(
        proceeding,
        (err, stats) => {
            process.stdout.write(stats.toString() + '\n');
        },
    );
});