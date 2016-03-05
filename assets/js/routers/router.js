define(['backbone', 'views/app'],
    function(Backbone) {
   'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            "/news/sources" : "getNewsSources"
        },

        getNewsSources: function() {
            alert("ok");
        },

        initialize: function() {
            // this.appView = new AppView();
        }
    });
    return AppRouter;
});
