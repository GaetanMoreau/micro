
const express = require('express')
const app = express()
const port = 4000
const http = require('http');

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

//Story #0
app.get('/api/ping', (req, res) => {
    res.send('Pong')
})

//Story #1
app.get('/api/supply', (req, res) => {
    res.status(204).send('aa')
    // // Create the request body
    // const postData = JSON.stringify({
    //     productId: '',
    //     quantity: '',
    //     status: '',
    // });

    // const options = {
    //     path: '/api/stock/' + productId + '/movement',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Content-Length': Buffer.byteLength(postData),
    //     },
    // };

    // const makePost = () => {
    //     let data = '';

    //     const request = http.request(options, (response) => {
    //         response.setEncoding('utf8');

    //         response.on('data', (chunk) => {
    //             data += chunk;
    //         });

    //         response.on('end', () => {
    //             console.log(data);
    //         });
    //     });

    //     request.on('error', (error) => {
    //         console.error(error);
    //     });

    //     request.write(postData);
    //     request.end();
    // };

    // makePost();

})
