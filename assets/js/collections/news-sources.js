define(['backbone', 'models/news-source'], function(Backbone, NewsSource) {
    'use strict';

    var NewsSources = Backbone.Collection.extend({

        model: NewsSource,

        url: "/news/sources"
    });

    return NewsSources;
});