const config = require('../packmin.config')
const fs = require('fs')
const babel = require('@babel/core')
const {traverse} = require("@babel/core")

function getDependencies(file) {
    const entryFile = fs.readFileSync(file, 'utf8')
    const parsedFile = createAST(entryFile)
    const dependencies = []

    traverse(parsedFile, {
        ImportDeclaration(declaration) {
            dependencies.push(declaration.node.source.value)
        }
    })

    return dependencies
}

function createAST(code) {
    return babel.parse(code, {
        sourceType: 'module'
    })
}

const dependencies = getDependencies(config.entry)
console.log(dependencies)



