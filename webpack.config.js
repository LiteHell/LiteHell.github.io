const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const dev = process.env.NODE_ENV === 'development';
module.exports = {
    mode: dev ? "development" : "production",
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimize: !dev
    },
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'Yeonjin Shin',
        filename: 'index.html'
    })],
    devServer: {
        static: {directory: path.join(__dirname, 'dist')},
        open: true,
        port: 'auto',
    },
    watchOptions: {
        ignored: /node_modules/
    }
}