module.exports = function (app) {
    require('./student_details')(app);
    require('./staff_details')(app);
    require('./branch')(app);
    require('./standard')(app);
    require('./entrance')(app);
    require('./stream')(app);
    require('./subject')(app);
};
