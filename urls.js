
const fs = require('fs')
const axios = require("axios");
const { hostname } = require('os');

const filename = process.argv[2]

fs.readFile(filename, {encoding: "utf-8"}, function(err, data){
    if (err) {
        console.log(err);
        process.exit(1);
    }
    let urls = data.split("\n")
    let response = getLinks(urls)
    
})

async function getLinks(urls){
    promises = []
    console.log(urls)

    
    for(let url of urls){
        console.log(url)
        promises.push(axios.get(url).then((res) => {
            console.log(res.request)
            let hostname = res.request.host
            if(hostname.includes("www.")){
                hostname = hostname.replace("www.", '')
            }
            return {html: res.data, url: url, hostname:hostname}        
        }).catch(e => {console.log(`Couldn't download ${url}`)}))
    }
    try{
    Promise.all(promises).then(( values ) => {
        for(let value of values){
            console.log(value)
            if(value){
            fs.writeFile(`${value.hostname}`, value.html, {encoding: "utf-8", flag:'a'}, function(err, data){
                if(err){
                    console.log(err);
                    process.exit(1);
                }
            })}
        }
        
    })} catch (e) {
        console.log(e)
    }
}