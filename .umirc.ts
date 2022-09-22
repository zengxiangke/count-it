const googleAnalyticsScripts = [
  {
    src: 'https://www.googletagmanager.com/gtag/js?id=G-P6MVK2ER51',
    async: true,
  },
  '/ga-setup.js',
];

export default {
  npmClient: 'pnpm',
  headScripts: [...googleAnalyticsScripts],
};
