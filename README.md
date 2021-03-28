# mikro-orm-null-decorators
Override [mikro-orm] decorators with null versions so that models can be used
outside of the server environment. Hopefully this will make mikro-orm core or 
that team will develop a better solution at some point.


## Usage

### Install from Github
`npm install --save-dev git+https://github.com/wyattis/mikro-orm-null-decorators.git`


### Webpack
Add this plugin definition to your [webpack] config.
```javascript
  new webpack.NormalModuleReplacementPlugin(/@mikro-ork\/core$/, function (result) {
    result.request = result.request.replace(/@mikro-ork\/core/, "mikro-orm-null-decorators");
  })
```

[mikro-orm]: https://mikro-orm.io/
[webpack]: https://webpack.js.org/