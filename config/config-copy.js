console.log("*************  Touch IONIC COPY CONFIG FILE ********");

module.exports = {
  copyAssets: {
    src: '{{SRC}}/assets/',
    dest: '{{WWW}}/assets/'
  },
  copyIndexContent: {
    src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
    dest: '{{WWW}}'
  },
  copyPolyfills: {
    src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  },
  copyFonts: {
    src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyThemes: {
    src: ['{{SRC}}/theme/css/**/*'],
    dest: '{{WWW}}/assets/css'
  }
};
