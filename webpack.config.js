const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const dev = process.env.NODE_ENV === 'development';

const commons = {
    mode: dev ? "development" : "production",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.node']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env']
                        }
                    },
                    'ts-loader'
                ]
            },
            {
                // Used only for node target environment
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(), new CopyPlugin({
        patterns: ["static"]
    })]
};

module.exports = [{
    ...commons,
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimize: !dev,
      minimizer: [
        '...',
        new CssMinimizerPlugin()
      ]
    },
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        ...commons.module,
        rules: [
            ...commons.module.rules,
            {
                test: /\.css$/,
                use: [dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
        ]
    },
    plugins: [
        ...commons.plugins,
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
        title: 'Yeonjin Shin',
        filename: 'index.html',
        template: './src/index.html'
    })],
    devServer: {
        static: {directory: path.join(__dirname, 'dist')},
        open: true,
        port: 'auto',
        client: {
            progress: true
        }
    },
    watchOptions: {
        ignored: /node_modules/
    }
}, {
    ...commons,
    target: 'node',
    entry: './src/generate.tsx',
    module: {
        ...commons.module,
        rules: [
            ...commons.module.rules,
            {
                test: /\.css$/,
                use: ['empty-loader']
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist-builder'),
        filename: 'index.js'
    }
}]