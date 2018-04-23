

var webpack = require("webpack");

module.exports =
    {
        entry: ["./src/index.js"],
        output:
            {
                filename: "./assets/js/bundle.js",
                hotUpdateChunkFilename: './assets/hot/hot-update.js',
                hotUpdateMainFilename: './assets/hot/hot-update.json'
            },

        devServer:
            {
                historyApiFallback: true,
                port: 5000 ,
                publicPath: "/",
                contentBase: "./out" ,
                hot: true,
                inline:true
            },

        watch:true,
        node: {
            fs: "empty"
        },

        module:
            {
                rules:
                    [
                        {
                            test: /\.js$/,
                            exclude: /(node_modules)/,
                            loader: "babel-loader",
                            query:
                                {
                                    presets:  ["es2015","react","stage-0"]
                                }
                        }
                        ,
                        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

                        ,
                        {
                            test: /\.json$/ ,
                            exclude: /(node_modules)/,
                            loader: "json-loader"
                        }
                        ,
                        {
                            test: /\.css$/ ,
                            loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
                        }




                    ]
            }


    };