define(['jquery',
        'underscore',
        'backbone',
        'text!templates/news-source-template.hbs'
], function($, _, Backbone, NewsSourceTemplate) {

    'use strict';

    var NewsSourceView = Backbone.View.extend({
        tagName: "tr",

        template: _.template(NewsSourceTemplate),

        events: {
            "click a.edit" : "edit",
            "click a.delete": "clear",
            "click a.save": "save",
            "click a.cancel": "cancel"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        edit: function() {
            $(this.el);
        },

        clear: function() {
            this.model.destroy();
        },

        save: function() {

        },

        cancel: function() {

        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return NewsSourceView;
});