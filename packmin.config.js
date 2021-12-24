const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'sample/printer.js'),
    output: './dist/bundle.js'
}
