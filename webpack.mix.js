const mix = require("laravel-mix");
const path = require("path");

mix.js("resources/js/app.js", "public/js")
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources", "js"),
            },
        },
    })
    .vue()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .setPublicPath("public");
