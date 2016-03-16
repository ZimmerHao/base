define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';

    var NewsSource = Backbone.Model.extend({

        urlRoot: '/v1.0/news_',

        defaults: function() {
            return {
                id: null,
                name: "",
                website: "",
                agent: "",
                rank: ""
            };
        }
    });

    return NewsSource;
});