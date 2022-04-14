const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8000
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                microApp1: 'microApp1@http://localhost:8001/remoteEntry.js',
                microApp2: 'microApp2@http://localhost:8002/remoteEntry.js',
            }
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                      '@babel/preset-env',
                        '@babel/preset-react',
                    ]
                }
            }
        ]
    }
};
