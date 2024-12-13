module.exports = function (app) {
    require('./student_details')(app);
    require('./staff_details')(app);
};
