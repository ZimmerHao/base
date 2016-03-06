define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';

    var NewsSource = Backbone.Model.extend({

        urlRoot: '/news/source',

        initialize: function(){
            //
        },

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