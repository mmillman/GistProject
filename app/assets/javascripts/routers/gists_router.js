GP.Routers.GistsRouter = Backbone.Router.extend({

  initialize: function(rootEl){
    this.$rootEl = rootEl;
  },

  routes: {
   ":id" : "gistDetail",
   "" : "index"
  },

  gistDetail: function(id) {
    var that = this;

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
    console.log(GP.Store.Gists)
    var gistsListView = new GP.Views.GistsListView({
      collection: GP.Store.Gists
    });


    that.$rootEl.html(gistsListView.render().$el);
  }


});