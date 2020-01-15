const fs = require('fs')
const Geo = require('geo-nearby');

const files = fs.readFileSync('./data/kecamatan.json', {encoding: 'utf-8'});
let arr = JSON.parse(files);

arr = arr.map(a => {
    return [a.latitude, a.longitude, a.name]
});

let dataSet = Geo.createCompactSet(arr);
dataSet = dataSet.sort((a,b) => a.g - b.g)
const geo = new Geo(dataSet, { sorted: true });

exports.module = geo;

const result111 = geo.nearBy(-6.9264539,107.5944051, [250, 30000]) ; //10 km
const body = JSON.stringify(dataSet)
fs.writeFileSync('./kecamatan.json', body)
console.log(result111)