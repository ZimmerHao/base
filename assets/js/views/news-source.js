define(['jquery',
        'underscore',
        'backbone',
        'collections/news-sources',
        'views/book'
], function($, _, Backbone, NewsSources, BookSummaryView) {

    'use strict';

    var AppView = Backbone.View.extend({
        el: $("#main"),

        bookList: $("#book-list"),

        initialize: function () {
            this.indexSection = $("#index-section");
            this.newsSourceSection = $("#news-source-section");
            //this.listenTo(BookSummarys, 'reset', this.render);
            //this.listenTo(BookSummarys, 'reset', this.showBookList);

            this.main = $("#main");
            BookSummarys.fetch({reset:true});

        },

        index: function() {
            this.indexSection.show();
        },

        showNewsSources: function() {
            var newsSources = new NewsSources();
            newsSources.fetch();
            this.newsSourceSection.show();
        },

        render: function() {
            if (BookSummarys.length) {
                this.main.show();
                this.showBookList();
            } else {
                this.main.hide();
            }

        }
    });

    return AppView;
});