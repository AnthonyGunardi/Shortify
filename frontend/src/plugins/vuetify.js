// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0097A7',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
      },
    },
  },
})

export default vuetify