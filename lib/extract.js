const fs = require('fs')
const Geo = require('geo-nearby');

let arr= [];
let result = ''
// const files = fs.readFileSync('../data/worldcities.csv', 'utf-8');
// const header = files.split('\n')[0]
// files.split('\n').slice(1).forEach(line => {
//     let obj = {}
//         if(line.toLowerCase().indexOf('indonesia') >= 0){
//             header.split(',').forEach((key, index) => {
//                 const k = key.replace('"', '').replace('"', '')
//                 const value = line.split(',')[index].replace('"', '').replace('"', '')
//                 obj[k] = value;
//             })
//             result = result + line + '\n';
//             arr.push(obj)

//         }
// })

// arr = arr.map(a => {
//     return [a.lat, a.lng, a.city]
// }).concat([[-35.30278, 149.14167, 'Canberra'],
// [-33.86944, 151.20833, 'Sydney'],
// [-37.82056, 144.96139, 'Melbourne']])

// let dataSet = Geo.createCompactSet(arr);
// dataSet = dataSet.sort((a,b) => a.g - b.g)
// const isSorted = dataSet.map((a,index) => {
//     if(index === dataSet.length -1) return true;
//     return a.g < dataSet[index+1].g
// }).every(a => a === true);

// const geo = new Geo(dataSet, { sorted: true });
// const  result111 = geo.nearBy(-6.9264539,107.5944051, [250, 30000]) ; //10 km
// const body = JSON.stringify(dataSet)
// fs.writeFileSync('../data/indocities.csv',  header + '\n' + result)
// fs.writeFileSync('../data/indocities.json', body)

const files = fs.readFileSync('../data/kecamatan.csv', 'utf-8');
const header = files.split('\n')[0];
files.split('\n').slice(1).forEach(line => {
    let obj = {}
        header.split(',').forEach((key, index) => {
            const k = key.replace('"', '').replace('"', '')
            let value = line.split(',')[index].replace('"', '').replace('"', '')
            value = value.replace('Provinsi ', '')
            value = value.replace('Kabupaten ', '')
            value = value.replace('Kotamadya ', '')
            obj[k] = value;
        })
        result = result + line + '\n';
        arr.push(obj)
})

arr = arr.map(a => {
    return [a.latitude, a.longitude, a.name]
}).concat([[-35.30278, 149.14167, 'Canberra'],
[-33.86944, 151.20833, 'Sydney'],
[-37.82056, 144.96139, 'Melbourne']])

let dataSet = Geo.createCompactSet(arr);
dataSet = dataSet.sort((a,b) => a.g - b.g)
const isSorted = dataSet.map((a,index) => {
    if(index === dataSet.length -1) return true;
    return a.g < dataSet[index+1].g
}).every(a => a === true);

const geo = new Geo(dataSet, { sorted: true });
const  result111 = geo.nearBy(-6.9264539,107.5944051, [250, 30000]) ; //10 km
const body = JSON.stringify(dataSet)
fs.writeFileSync('../data/kecamatan.json', body)
console.log(result111)