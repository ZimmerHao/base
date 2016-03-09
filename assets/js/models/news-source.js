define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';

    var NewsSource = Backbone.Model.extend({

        urlRoot: '/news/source',

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