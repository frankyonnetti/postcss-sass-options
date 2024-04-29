# PostCSS-Sass options

### Provides a reduced test case.

It doesn't appear that `dart-sass` is receiving options set in the plugin for `postcss-sass`. In this example, I am passing the ['compressed' style option](https://sass-lang.com/documentation/js-api/interfaces/options/#style), but the output is expanded; located at `./css/style.css`.

Using `postcss-cli` in `./package.json`.

```JavaScript
// postcss.config.js
...

  plugins: [
    require('autoprefixer')(),
    require('@csstools/postcss-sass')({
      style: 'compressed'
    })

...
```
