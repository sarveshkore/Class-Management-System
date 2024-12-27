module.exports = function (app) {

    // STREAM API
    app.post('/stream_crud/create_stream/', (req, res) => {
        const x = require('../src/stream_crud/create_stream'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/stream_crud/read_stream/', (req, res) => {
        const x = require('../src/stream_crud/read_stream'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/stream_crud/read_single_stream/:id', (req, res) => {
        const x = require('../src/stream_crud/read_single_stream'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.put('/stream_crud/update_stream/:id', (req, res) => {
        const x = require('../src/stream_crud/update_stream'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.delete('/stream_crud/delete_stream/:id', (req, res) => {
        const x = require('../src/stream_crud/delete_stream'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
