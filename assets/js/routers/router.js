define(['backbone', 'views/app'],
    function(Backbone, AppView) {
   'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            "index" : "showIndex",
            "news_sources": "showNewsSource"
        },

        initialize: function() {
            this.appView = new AppView();
        },

        showIndex: function() {
            this.appView.index();
        },

        showNewsSource: function() {
            this.appView.showNewsSource();
        }
    });
    return AppRouter;
});
