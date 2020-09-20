// next.config.js

const withSass = require("@zeit/next-sass");
module.exports = withSass();

const withFonts = require('nextjs-fonts');
module.exports = withFonts();

const withImages = require('next-images')
module.exports = withImages();

const withCSS = require('@zeit/next-css');

// function HACK_removeMinimizeOptionFromCssLoaders(config) {
//     console.warn(
//         'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
//     );
//     config.module.rules.forEach(rule => {
//         if (Array.isArray(rule.use)) {
//             rule.use.forEach(u => {
//                 if (u.loader === 'css-loader' && u.options) {
//                     delete u.options.minimize;
//                 }
//             });
//         }
//     });
// }

// module.exports = withCSS({
//     webpack(config) {
//         HACK_removeMinimizeOptionFromCssLoaders(config);
//         return config;
//     },
// });