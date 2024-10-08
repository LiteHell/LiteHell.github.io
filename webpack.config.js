const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
            },
            {
                test: /\.png$/,
                use: [ 'file-loader' ]
            }
        ]
    },
    plugins: []
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
    entry: './src/portfolio/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/portfolio'),
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
            {
                test: /\.s[ac]ss$/,
                use: [dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        ...commons.plugins,
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
        title: 'Yeonjin Shin',
        filename: 'index.html',
        template: './src/portfolio/index.html'
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
            {
                test: /\.s[ac]ss$/,
                use: ['empty-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist-builder'),
        filename: 'index.js'
    }
}]