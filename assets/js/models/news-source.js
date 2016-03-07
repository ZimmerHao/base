define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';

    var NewsSource = Backbone.Model.extend({

        urlRoot: 'http://192.168.31.101:5000/news/source',

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