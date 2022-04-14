const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8002
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microApp2',
            filename: 'remoteEntry.js',
            exposes: {
                './MicroApp2Index': './src/index',
            }
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': { REACT_APP_BACKEND_API_BASE_URL: `"http://localhost:8080"` },
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
