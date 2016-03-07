define(['jquery',
        'underscore',
        'backbone',
        'views/news-source-app'
], function($, _, Backbone, NewsSourceAppView) {

    'use strict';

    var AppView = Backbone.View.extend({
        el: $("#main"),

        initialize: function () {
            this.indexSection = $("#index-section");
        },

        index: function() {
            this.indexSection.show();
        },

        showNewsSource: function() {
            var NewsSourceApp = new NewsSourceAppView();
        },

        render: function() {

        }
    });

    return AppView;
});