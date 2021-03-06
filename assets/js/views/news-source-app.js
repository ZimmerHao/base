define(['jquery',
        'underscore',
        'backbone',
        'collections/news-sources',
        'views/news-source'
], function($, _, Backbone, NewsSources, NewsSourceView) {

    'use strict';

    var NewsSourceAppView = Backbone.View.extend({
        el: $('#news-source-section'),

        events: {
            "click #news_source_new": "showNewItem"
        },

        initialize: function () {
            this.listenTo(NewsSources, 'add', this.addOne);
            this.listenTo(NewsSources, 'reset', this.addAll);
            this.listenTo(NewsSources, 'all', this.render);

            this.main = $('#news-source-section').find('tbody');
            NewsSources.fetch({reset:true});
        },

        render: function() {
            if (NewsSources.length) {
                $('#news-source-section').removeClass('hidden');
            }
        },

        addOne: function(newsSource) {
            var view = new NewsSourceView({model: newsSource});
            this.main.append(view.render().el);
        },

        addAll: function() {
            NewsSources.each(this.addOne, this);
        },

        showNewItem: function() {

        }

    });

    return NewsSourceAppView;
});