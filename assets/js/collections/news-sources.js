define(['backbone', 'models/news-source'], function(Backbone, NewsSource) {
    'use strict';

    var NewsSources = Backbone.Collection.extend({

        model: NewsSource,

        url: "http://192.168.31.101:5000/news/sources"
    });

    return new NewsSources();
});