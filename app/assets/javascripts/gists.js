window.GP = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function ($sidebar, $content, gistsData) {

    GP.Store.Gists = new GP.Collections.Gists(gistsData);

    GP.Store.Favorites = new GP.Collections.Favorites();
    GP.Store.Favorites.fetch({
      success: function () {
        // console.log(GP.Store.Gists)
        new GP.Routers.GistsRouter($content);
        Backbone.history.start();
      }
    });
  }
};