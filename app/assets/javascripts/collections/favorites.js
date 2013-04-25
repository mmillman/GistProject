GP.Collections.Favorites = Backbone.Collection.extend({
  url: "/favorites",
  model: GP.Models.Favorite
});