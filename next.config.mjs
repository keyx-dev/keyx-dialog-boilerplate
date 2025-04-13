import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'


export default (phase, { defaultConfig }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  
  const nextConfig = {
    output: 'export',
    basePath: isDev ? '' : '/keyx-dialog-boilerplate',
    assetPrefix: isDev ? undefined : '/keyx-dialog-boilerplate',
    images: {
      unoptimized: true,
    },
  };

  return nextConfig;
}

