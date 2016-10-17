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
