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