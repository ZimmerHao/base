define(['jquery',
        'underscore',
        'backbone',
        'text!../../templates/news-source-template.hbs'
], function($, _, Backbone, NewsSourceTemplate) {

    'use strict';

    var NewsSourceView = Backbone.View.extend({
        tagName: "tr",

        template: _.template(NewsSourceTemplate),

        events: {
            "click a.edit" : "edit",
            "click a.delete": "delete",
            "click a.save": "save",
            "click a.cancel": "cancel",
            "click #news_source_new": "squeezeRow"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        e: function (e, t) {
            for (var n = e.fnGetData(t), a = $(">td", t), l = 0, r = a.length; r > l; l++) {
                e.fnUpdate(n[l], t, l, !1);
            }
            e.fnDraw();
        },

        t: function (e, t) {
            var n = e.fnGetData(t),
                a = $(">td", t);
            a[0].innerHTML = '<input type="text" class="form-control input-small" value="' + n[0] + '">',
            a[1].innerHTML = '<input type="text" class="form-control input-small" value="' + n[1] + '">',
            a[2].innerHTML = '<input type="text" class="form-control input-small" value="' + n[2] + '">',
            a[3].innerHTML = '<input type="text" class="form-control input-small" value="' + n[3] + '">',
            a[4].innerHTML = '<a class="save" href="">Save</a>',
            a[5].innerHTML = '<a class="cancel" href="">Cancel</a>'
        },

        n: function (e, t) {
            var n = $("input", t);
            e.fnUpdate(n[0].value, t, 0, !1),
            e.fnUpdate(n[1].value, t, 1, !1),
            e.fnUpdate(n[2].value, t, 2, !1),
            e.fnUpdate(n[3].value, t, 3, !1),
            e.fnUpdate('<a class="edit" href="">Edit</a>', t, 4, !1),
            e.fnUpdate('<a class="delete" href="">Delete</a>', t, 5, !1),
            e.fnDraw()
        },

        squeezeRow: function() {
            if (e.preventDefault(), o && r) {
                if (!confirm("Previose row not saved. Do you want to save it ?")) return l.fnDeleteRow(r), r = null, void(o = !1);
                n(l, r), $(r).find("td:first").html("Untitled"), r = null, o = !1
            }
            var a = l.fnAddData(["", "", "", "", "", ""]),
                i = l.fnGetNodes(a[0]);
            t(l, i), r = i, o = !0
        },

        edit: function() {
            a.preventDefault(), o = !1;
            var i = $(this).parents("tr")[0];
            null !== r && r != i ? (e(l, r), t(l, i), r = i) : r == i && "Save" == this.innerHTML ? (n(l, r), r = null, alert("Updated! Do not forget to do some ajax to sync with backend :)")) : (t(l, i), r = i)
        },

        delete: function() {
            if (e.preventDefault(), 0 != confirm("Are you sure to delete this row ?")) {
                var t = $(this).parents("tr")[0];
                l.fnDeleteRow(t), alert("Deleted! Do not forget to do some ajax to sync with backend :)")
            }
            this.model.destroy();
        },

        save: function() {

        },

        cancel: function(t) {
            t.preventDefault(), o ? (l.fnDeleteRow(r), r = null, o = !1) : (e(l, r), r = null)
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return NewsSourceView;
});