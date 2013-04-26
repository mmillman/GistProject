GP.Routers.GistsRouter = Backbone.Router.extend({

  initialize: function(rootEl){
    this.$rootEl = rootEl;
  },

  routes: {
  "new": "newGist",
   "" : "index",
   ":id" : "gistDetail"
  },

  gistDetail: function(id) {
    var that = this;
    console.log("gist Detail");

    var gist = GP.Store.Gists.get(id);
    var gistDetailView = new GP.Views.GistDetailView({
      model: gist,
    });

    that.$rootEl.html(gistDetailView.render().$el);
  },

  index: function() {
    var that = this;
    // console.log("HI")
    // gistsCollection: GP.Store.Gists,

    var gistsListView = new GP.Views.GistsListView({
      collection: GP.Store.Gists
    });


    that.$rootEl.html(gistsListView.render().$el);
  },

  newGist: function(){
    console.log("New Gist");
    var that = this;

    var newGistView = new GP.Views.GistFormView({ }); // pass something in here?



    that.$rootEl.html(newGistView.render().$el);
  }


});