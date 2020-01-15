const Geo = require('geo-nearby');
let arr = require('./data/kecamatan')
let dataSet = Geo.createCompactSet(arr);
dataSet = dataSet.sort((a,b) => a.g - b.g)
const geo = new Geo(dataSet, { sorted: false });
let GEO = {
    nearBy: (lat, long) => {
        return geo.nearBy(lat, long, [250, 30000]) ; 
    }
};
module.exports = GEO