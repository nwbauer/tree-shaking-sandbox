# Tree Shaking Sandbox

This repo is here so one can play with Webpack tree shaking. The code base consists of

* `src` directory where the main app resides
* `dependencies` directory where an npm-packed dependency `my-module-1.0.0.tgz` lives
* the main `package.json` references the `my-module-1.0.0.tgz`

With this setup, `my-module` can be edited (and re-packed) so that the resulting `build/app.js` code can be inspected.

## Run it

1. `npm install`
2. `npm run build`
3. look at `build/app.js` and see what was actually included
