define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';

    var NewsSource = Backbone.Model.extend({

        url: '/news/source',

        initialize: function(){
            alert('Hey, you create me!');
            //初始化时绑定监听
            this.bind("change:name",function(){
                var name = this.get("name");
                alert("你改变了name属性为：" + name);
            });
            this.bind("error",function(model,error){
                alert(error);
            });
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