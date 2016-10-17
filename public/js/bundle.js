(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var reqloginmodel = require('./models/loginmodel');
var reqloginview = require('./views/loginview');
// var lg = new reqloginmodel.Login();
// var view = new reqloginview.LoginView({ model: lg });
// $('.container').append(view.render().$el);
var reqmembermodel = require('./models/membermodel');
var reqmemberview = require('./views/memberview');
var mem = new reqmembermodel.Member();
var memview = new reqmemberview.MemberView({ model: mem });
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "FirstPage",
        // "first": "FirstPage",
        "second": "SecondPage"
    },
    FirstPage: function() {
        // var view1 = new View1();
        
        var lg = new reqloginmodel.Login();
var view = new reqloginview.LoginView({ model: lg });
$('.container').html(view.render().$el);
    },
    SecondPage: function() {
        // var view2 = new View2();
        $('.container').html(memview.render().$el);
    },
});
var approuter = new AppRouter();
Backbone.history.start();
},{"./models/loginmodel":2,"./models/membermodel":3,"./views/loginview":4,"./views/memberview":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
exports.Member = Backbone.Model.extend( {
    url: '/member',

    defaults: {
        name: 'gdhdh',
        id: 'dgdhdhd',
        loc: '',
        desg: ''
    }
});

},{}],4:[function(require,module,exports){
exports.LoginView = Backbone.View.extend({
    tagName: 'div',
    className: 'form-div',
    initialize: function() {

        this.listenTo(this.model, "change", this.render);
    },
    render: function() {
        var email = this.model.get('email'),
            pwd = this.model.get('pwd'),
            submit = this.model.get('valid');
        var inputemail, inputpwd, submission;
        form = '<form class="form-horizontal" action="/login" method="POST">'
        inputemail = '<input type="email" name="email" class="form-control" id="email" placeholder="Enter email"> <br>';
        inputpwd = '<input type="password" name="pwd" class="form-control" id="pwd" placeholder="Enter password"><br>';
        submission = '<button type="submit" class="btn btn-default">Login</button></form>';

        this.$el.html(form + inputemail + inputpwd + submission);
        return this;
    },

    events: {
        'click button': 'logIn'
    },

    logIn: function(e) {
        var username = $('#email').val();
        var password = $('#pwd').val();
        this.model.set({email:username, pwd:password});
        var validmodel=this.model.save();
        // if(!validmodel){
        //     this.$('.display-error').append(error);
        //     e.preventDefault();
        //     // this.$el.append(error);
        // }
    }
});
},{}],5:[function(require,module,exports){
exports.MemberView = Backbone.View.extend({
    tagName: 'div',
    className: 'member-view',
    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },
    render: function() {
        var name = this.model.get('name');
        var id = this.model.get('id');
        var loc = this.model.get('loc');
        var desg = this.model.get('desg');

        var inputname, inputid, inputloc, inputdesg;
        inputname = '<span>' + name + '</span><br>';
        inputid = '<span>' + id + '</span><br>';
        inputloc = '<span>' + loc + '</span><br>';
        inputdesg = '<span>' + desg + '</span><br>';

        this.$el.html(inputname + inputid + inputloc + inputdesg);
        return this;
    }
});

},{}]},{},[1]);
