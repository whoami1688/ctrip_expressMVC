const fs= require("fs")
const {promisify} = require("util")
const path = require('path')
const readFile = promisify(fs.readFile)
const dataPath=path.join(__dirname,'/data.json')
module.exports.getDb = async () =>{
    const data =await readFile(dataPath)
    return JSON.parse(data)
}