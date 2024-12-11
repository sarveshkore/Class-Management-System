module.exports = function (app) {

    // STUDENT_DETAILS API
    app.post('/student_details_crud/create_student/', (req, res) => {
        const x = require('../src/student_details_crud/create_student'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/student_details_crud/read_student/', (req, res) => {
        const x = require('../src/student_details_crud/read_student'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.put('/student_details_crud/update_student/:id', (req, res) => {
        const x = require('../src/student_details_crud/update_student'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.delete('/student_details_crud/delete_student/:id', (req, res) => {
        const x = require('../src/student_details_crud/delete_student'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
