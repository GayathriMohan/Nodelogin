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