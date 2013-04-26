GP.Views.GistFileFormView = Backbone.View.extend({

  render: function() {
    var that = this;

    that.file = new GP.Models.File();

    that.fileForm = new Backbone.Form({
      model: that.file
    }).render();

    that.$el.html(that.fileForm.el);
    return that;
  }


});