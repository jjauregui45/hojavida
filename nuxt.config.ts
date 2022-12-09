export default {
  nitro: {
    preset: 'vercel-edge',
  },
  static:{
    prefix: false
  },
  css:[
    '@/css/master.css',
    "bootstrap/dist/css/bootstrap.min.css"
  ],
  plugins:[
    '~/plugins/umine.ts'
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
};
