exports.Login = Backbone.Model.extend({
    urlRoot: '/login',

    defaults: {
        email: '',
        pwd: '',
        valid: ''
    },
    validate: function(attr, options) {
        var error = [];
        var regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if (!attr.email) {
            error.push('Email must not be empty');
            console.log(error);
        }
        if (!attr.pwd) {
            error.push('Password must not be empty');
            console.log(error);
        }
        if (attr.email && !regex.test(attr.email)) {
            error.push('Invalid email');
            console.log(error);
        }
        return error;
    }
});
