define(['jquery',
        'underscore',
        'backbone',
        'collections/books',
        'views/book'
], function($, _, Backbone, BookSummarys, BookSummaryView) {

    'use strict';

    var AppView = Backbone.View.extend({
        el: $("#main"),

        bookList: $("#book-list"),

        initialize: function () {
            this.listenTo(BookSummarys, 'reset', this.render);
            //this.listenTo(BookSummarys, 'reset', this.showBookList);

            this.main = $("#main");
            BookSummarys.fetch({reset:true});

        },

        showBookItem: function(bookItem) {
            var view = new BookSummaryView({model: bookItem});
            this.bookList.append(view.render().el);
        },

        showBookList: function() {
            BookSummarys.each(this.showBookItem, this);
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