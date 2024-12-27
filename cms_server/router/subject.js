module.exports = function (app) {

    // SUBJECT API
    app.post('/subject_crud/create_subject/', (req, res) => {
        const x = require('../src/subject_crud/create_subject'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/subject_crud/read_subject/', (req, res) => {
        const x = require('../src/subject_crud/read_subject'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/subject_crud/read_single_subject/:id', (req, res) => {
        const x = require('../src/subject_crud/read_single_subject'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.put('/subject_crud/update_subject/:id', (req, res) => {
        const x = require('../src/subject_crud/update_subject'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.delete('/subject_crud/delete_subject/:id', (req, res) => {
        const x = require('../src/subject_crud/delete_subject'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
