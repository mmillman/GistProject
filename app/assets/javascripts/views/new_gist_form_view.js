GP.Views.GistFormView = Backbone.View.extend({

  events: {
    "click button.submit": "submit",
    "click button.newFileForm": "addFile"
  },

  initialize: function(){
    var that = this;
    this.formViews = [];
  },

  render: function() {
    var that = this;


    that.gist = new GP.Models.Gist();
    that.gist_form = new Backbone.Form({
      model: that.gist
    }).render();

    that.$el.append(that.gist_form.el);

    // _(3).times(function(){
   //    that.addFormView();
   //  });

    // _(that.formViews).each(function(formView){
    //   that.$el.append(formView.render().$el);
    // });


    that.$el.append($('<button class="submit">Submit</button>'));
    that.$el.append($('<button class="newFileForm">Add File!</button>'));

    return that;

  },

  addFile: function() {
    var that = this;
    that.addFormView();
  },

  addFormView: function() {
    var that = this;
    var fileFormView = new GP.Views.GistFileFormView();
    that.formViews.push(fileFormView);
    (fileFormView.render().$el).insertBefore('.submit');
  },

  submit: function () {
    var that = this;
    that.gist_form.commit();

    _(that.formViews).each(function(formView){
      formView.fileForm.commit();
      that.gist.get('files').add(formView.file);
      console.log("adding:", formView.file);
    });

    that.gist.save({}, {
      success: function () {
        GP.Store.Gists.add(that.gist);
        Backbone.history.navigate('', {trigger: true});
      },
      error: function() {
        console.log("error");
      }
    });
  }




});