import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'


export default (phase, { defaultConfig }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  
  const nextConfig = {
    output: 'export',
    basePath: isDev ? '' : '/keyx-dialog-boilerplate',
    images: {
      unoptimized: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith('/')) {
                    return `/keyx-dialog-boilerplate${url}`;
                  }
                  return url;
                },
              },
            },
          },
          'sass-loader'
        ],
      });
      return config;
    },
  };

  return nextConfig;
}

