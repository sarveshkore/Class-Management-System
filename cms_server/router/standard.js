module.exports = function (app) {

    // STANDARD API
    app.post('/standard_crud/create_standard/', (req, res) => {
        const x = require('../src/standard_crud/create_standard'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/standard_crud/read_standard/', (req, res) => {
        const x = require('../src/standard_crud/read_standard'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.put('/standard_crud/update_standard/:id', (req, res) => {
        const x = require('../src/standard_crud/update_standard'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.delete('/standard_crud/delete_standard/:id', (req, res) => {
        const x = require('../src/standard_crud/delete_standard'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
