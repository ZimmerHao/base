define(['jquery',
        'underscore',
        'backbone',
        'collections/news-sources',
        'views/news-source'
], function($, _, Backbone, AppRouter, NewsSources, NewsSourceView) {

    'use strict';

    var NewsSourceAppView = Backbone.View.extend({
        el: $('#news-source-section'),

        initialize: function () {
            this.listenTo(NewsSources, 'add', this.addOne);
            this.listenTo(NewsSources, 'reset', this.addAll);
            this.listenTo(NewsSources, 'all', this.render);

            this.main = $('#news-source-section>tbody');
            NewsSources.fetch({reset:true});
        },

        render: function() {
            if (NewsSources.length) {
                this.el.show();
            }
        },

        addOne: function(newsSource) {
            var view = new NewsSourceView({model: newsSource});
            this.main.append(view.render().el);
        },

        addAll: function() {
            NewsSources.each(this.addOne, this);
        }

    });

    return NewsSourceAppView;
});