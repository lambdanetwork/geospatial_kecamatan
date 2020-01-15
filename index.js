const fs = require('fs')
const Geo = require('geo-nearby');

const files = fs.readFileSync('./data/kecamatan.json', {encoding: 'utf-8'});
let arr = JSON.parse(files);

let dataSet = Geo.createCompactSet(arr);
dataSet = dataSet.sort((a,b) => a.g - b.g)
const geo = new Geo(dataSet, { sorted: false });


const result111 = geo.nearBy(-6.8862572,107.523612, [250, 30000]) ; //10 km
console.log(result111)

exports.module = geo;
