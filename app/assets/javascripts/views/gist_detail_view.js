GP.Views.GistDetailView = Backbone.View.extend ({
  events: {
    "click button.favorite": "toggleFavorite"
  },

  initialize: function(){
    // listener for changes to this view's gist
    var that = this;
    that.favorite = GP.Store.Favorites.where({
        gist_id: that.model.get('id')
        }).length != 0;
  },

  render: function() {
    var that = this;

    var renderedContent = JST["gists/details"]({
      gist: that.model,
      favorite: that.favorite
    });

    that.$el.html(renderedContent);
    return that;
  },

  toggleFavorite: function(){
    var that = this;
    if(!that.favorite){
      // post to favorites, make this gist a favorite.
      var favoriteModel = new GP.Models.Favorite({
        gist_id: that.model.get('id')
      });

      GP.Store.Favorites.add(favoriteModel);
      favoriteModel.save();
    }
    else{
      // remove this gist from favorites, of current user.

      var favoriteModel = GP.Store.Favorites.where({
        gist_id: that.model.get('id')
      })[0];

      favoriteModel.destroy();
      GP.Store.Favorites.remove(favoriteModel);

    }

    that.favorite = !that.favorite;
    that.render();
  }

});
