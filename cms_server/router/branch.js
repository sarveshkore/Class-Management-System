module.exports = function (app) {

    // BRANCH API
    app.post('/branch_crud/create_branch/', (req, res) => {
        const x = require('../src/branch_crud/create_branch'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/branch_crud/read_branch/', (req, res) => {
        const x = require('../src/branch_crud/read_branch'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.get('/branch_crud/read_single_branch/:id', (req, res) => {
        const x = require('../src/branch_crud/read_single_branch'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.put('/branch_crud/update_branch/:id', (req, res) => {
        const x = require('../src/branch_crud/update_branch'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
    app.delete('/branch_crud/delete_branch/:id', (req, res) => {
        const x = require('../src/branch_crud/delete_branch'); 
        // console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
