const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources", "js"),
                "@sass": path.resolve(__dirname, "resources", "sass")
            },
        },
        module:{
            rules:[
                {
                    test:/\.scss$/,
                    use: [
                        {
                            loader:'sass-loader',
                            options: {
                                additionalData: '@use "@sass/app.scss" as *;'
                            }
                        }
                    ]
                }
            ]
        }
    })
    .vue().setPublicPath('public');
