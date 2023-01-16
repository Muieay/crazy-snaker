const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    
    mode: "production",
    entry: "./src/index.ts",
    
    output: {
        environment:{
            arrowFunction: false,
            const: false
        }
    },

    module: {

        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader:"babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式 "usage" 表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            },
            

            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            },
            //图片处理
            {
                test: /\.png|svg|jpg|gif|ico$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024*3,
                        outputPath: 'image'
                    }
                }
            }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
    
    resolve: {
        extensions: ['.ts', '.js']
    }
    
};
