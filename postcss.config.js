module.exports = {
  map: {
    annotation: true,
  },
  parser: 'postcss-scss',
  plugins: [
    require('autoprefixer')(),
    require('@csstools/postcss-sass')({
      style: 'compressed'
    })
  ]
}
