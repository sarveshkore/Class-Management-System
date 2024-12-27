module.exports = function (app) {

    // ENTRANCE API
    app.post('/entrance_crud/create_entrance/', (req, res) => {
        const x = require('../src/entrance_crud/create_entrance'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/entrance_crud/read_entrance/', (req, res) => {
        const x = require('../src/entrance_crud/read_entrance'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/entrance_crud/read_single_entrance/:id', (req, res) => {
        const x = require('../src/entrance_crud/read_single_entrance'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.put('/entrance_crud/update_entrance/:id', (req, res) => {
        const x = require('../src/entrance_crud/update_entrance'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.delete('/entrance_crud/delete_entrance/:id', (req, res) => {
        const x = require('../src/entrance_crud/delete_entrance'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
