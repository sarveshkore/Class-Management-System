module.exports = function (app) {

    // STAFF_DETAILS API
    app.post('/staff_details_crud/create_staff/', (req, res) => {
        const x = require('../src/staff_details_crud/create_staff'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/staff_details_crud/read_staff/', (req, res) => {
        const x = require('../src/staff_details_crud/read_staff'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/staff_details_crud/read_single_staff/:id', (req, res) => {
        const x = require('../src/staff_details_crud/read_single_staff'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.put('/staff_details_crud/update_staff/:id', (req, res) => {
        const x = require('../src/staff_details_crud/update_staff'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.delete('/staff_details_crud/delete_staff/:id', (req, res) => {
        const x = require('../src/staff_details_crud/delete_staff'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
