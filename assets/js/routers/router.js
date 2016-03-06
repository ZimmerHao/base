define(['backbone', 'views/app'],
    function(Backbone) {
   'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            "index" : "index",
            "news/sources": "showNewsSources"
        },

        initialize: function() {
            this.appView = new AppView();
        },

        index: function() {
            this.appView.index();
        },

        showNewsSources: function() {
            this.appView.showNewsSources();
        }
    });
    return AppRouter;
});
