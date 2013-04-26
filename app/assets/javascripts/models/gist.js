GP.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: '/gists',

  schema: {
    title: 'Text'
  },

  relations: [{
    type: Backbone.HasMany,
    key: 'files',
    relatedModel: 'GP.Models.File', // to create
    keySource: "gist_files",
    collectionType: 'GP.Collections.GistFiles', // to create
    collectionOptions: function (model) {
      return {
        gist_id: model.get('id')
      }
    },
    // reverseRelation: {
    //   key: 'gist'
    // }

  }]

});