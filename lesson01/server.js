// How Nodejs differs from vanilla JS
// 1) Node runs on the server - not in the browser (backend)
// 2) The console is the terminal window

console.log("🚀 ~ Hello, world!:")

// 3) global object instead of window object
// console.log(window); // ReferenceError: window is not defined

console.log("🚀 ~ Global:", global)

/*
    <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [Function: value],
    crypto: [Getter]
    }
*/

// 4) Has common Core modules (fs, http, os, path, etc)
// 5) CommonJS modules instead of ES6 modules

const os = require('os');

console.log("🚀 ~ os.type(): ", os.type())
console.log("🚀 ~ os.version(): ", os.version())
console.log("🚀 ~ os.homedir(): ", os.homedir())
console.log("🚀 ~ __dirname: ", __dirname)
console.log("🚀 ~ __filename: ", __filename)


const path = require('path');

console.log("🚀 ~ path.dirname(__filename):", path.dirname(__filename))
console.log("🚀 ~ path.basename(__filename):", path.basename(__filename))
console.log("🚀 ~ path.extname(__filename):", path.extname(__filename))
console.log("🚀 ~ path.parse(__filename):", path.parse(__filename))

const math = require('./math')

console.log("🚀 ~ math.add(1, 2):", math.add(1, 2))
console.log("🚀 ~ math.subtract(1, 2):", math.subtract(1, 2))
console.log("🚀 ~ math.multiply(1, 2):", math.multiply(1, 2))
console.log("🚀 ~ math.divide(1, 2):", math.divide(1, 2))