define(['backbone', 'models/news_source'], function(Backbone, NewsSource) {
    'use strict';

    var NewsSources = Backbone.Collection.extend({
        //
        model: NewsSource,

        url: "/news/sources"
    });

    return new BookSummaryList();
});