const fs = require('fs')
const { Module } = require('module')
const path = require('path')
const vm = require('vm')

function Module (id) {
    this.id = id
    this.exports = {}
}

Module._resolveFilename = function (fileName) {
    let absPath = path.resolve(__dirname, fileName)
    if (fs.existsSync(absPath)) {
        return absPath
    } else {

    }
}

function myRequire(fileName) {
    const absPath = Module._resolveFilename(fileName)

}

let obj = myRequire('./v')
console.log("🚀 ~ obj:", obj)
