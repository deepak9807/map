// Require packages and set the port
const express = require('express');
const csv = require('csv-parser')
const fs = require('fs')
var cors = require('cors')
const port = 3000;
const app = express();

app.use(cors())
app.get('/', (request, response) => {
    let results = []
    let mapData = []
    console.log(`URL: ${request.url}`);
    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);

        for(let row of results){
            mapData.push({
                "lat": parseFloat(row["lat"]),
                "lng": parseFloat(row["long"])
            })
        }
        response.send(mapData);
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
    });
    
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});