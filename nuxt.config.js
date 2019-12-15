module.exports = {
  head: {
    title: 'Innsynsbegjæring.no',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Du har rett til innsyn i dine data. Vi hjelper deg med innsynsbegjæring på 1, 2, 3!',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
};
