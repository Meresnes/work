const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function override(config, env) {
    // Добавьте плагин в конфигурацию
    config.optimization = {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    };

    // Добавьте следующую секцию в конфигурацию
    config.plugins.push(
        new ExtractTextPlugin({
            filename: 'styles.css'
        })
    );

    // Измените конфигурацию для использования ExtractTextPlugin
    config.module.rules.forEach(rule => {
        if (rule.test.toString().includes('css')) {
            rule.use = ExtractTextPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ],
                fallback: 'style-loader'
            });
        }
    });

    return config;
};