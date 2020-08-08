require('dotenv').config();
const isDevelop = process.env.ENV !== 'production';
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                );
            }

            const {dev, isServer} = options;
            const {
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                sassLoaderOptions = {}
            } = nextConfig;

            options.defaultLoaders.sass = cssLoaderConfig(config, {
                extensions: ['scss', 'sass'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    {
                        loader: 'sass-loader',
                        options: sassLoaderOptions
                    }
                ]
            });

            config.module.rules.push(
                {
                    test: /\.scss$/,
                    exclude: /\.module.(scss)$/,
                    use: options.defaultLoaders.sass
                },
                {
                    test: /\.module.scss$/,
                    use: cssLoaderConfig(config, {
                        extensions: ['scss', 'sass'],
                        cssModules: true,
                        cssLoaderOptions: {
                            includePaths: [/\.module.less$/],
                            importLoaders: 1,
                            localIdentName: isDevelop ? '[local]___[hash:base64:5]' : '[hash:base64:5]'
                        },
                        postcssLoaderOptions,
                        dev,
                        isServer,
                        loaders: [
                            {
                                loader: 'sass-loader',
                                options: sassLoaderOptions
                            }
                        ]
                    })
                },
                {
                    test: /\.sass$/,
                    use: options.defaultLoaders.sass
                }
            );

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options);
            }

            return config;
        }
    });
};
