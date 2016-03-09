define(['backbone', 'models/news-source'], function(Backbone, NewsSource) {
    'use strict';

    var NewsSources = Backbone.Collection.extend({

        model: NewsSource,

        url: "/news/sources",

        parse: function(response) {
            return response.new_sources;
        }

    });

    return new NewsSources();
});