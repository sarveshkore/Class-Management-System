module.exports = function (app) {
    
    app.post('/sign_up/create_user/', (req, res) => {
        const x = require('../src/sign_up/create_user'); 
        console.log('Module loaded:', x);
        x.main(req, res); 
    });
};
