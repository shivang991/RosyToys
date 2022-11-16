/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/js/**/*.vue",
        "./resources/js/**/*.js",
        "./resources/views/index.blade.php",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#9ac8e4",
            },
        },
    },
    plugins: [],
};
