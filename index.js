const fs = require('fs')
const Geo = require('geo-nearby');
const files = fs.readFileSync('./data/kecamatan.json', {encoding: 'utf-8'});
let arr = JSON.parse(files);
let dataSet = Geo.createCompactSet(arr);
dataSet = dataSet.sort((a,b) => a.g - b.g)
const geo = new Geo(dataSet, { sorted: false });

exports.module = {
    nearBy: (lat, long) => {
        return geo.nearBy(lat, long, [250, 30000]) ; 
    }
};
