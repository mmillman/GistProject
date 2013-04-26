GP.Collections.GistFiles = Backbone.Collection.extend({
  model: GP.Models.File,

  initialize: function(models, options){
    this.gist_id = options.gist_id;
  },

  url: function() {
    return ("/gists" + this.gist_id + "/files");
  }

});