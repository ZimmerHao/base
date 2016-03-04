define(['backbone', 'views/app'],
    function(Backbone) {
   'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            // "douban/books/:id" : "bookDetail",
            // "douban/books/" : "bookList"
        },

        initialize: function() {
            // this.appView = new AppView();
        }
    });
    return AppRouter;
});
