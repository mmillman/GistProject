GP.Models.File = Backbone.RelationalModel.extend({
  // lets see if we can get away with this
  url: "/gist_files",

  schema: {
    body: 'Text'
  }
});