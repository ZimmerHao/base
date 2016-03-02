var Layout = function() {
    var e = "layouts/layout4/img/",
        a = "layouts/layout4/css/",
        s = App.getResponsiveBreakpoint("md"),
        i = function() {
            var e, a = $(".page-content"),
                i = $(".page-sidebar"),
                t = $("body");
            if (t.hasClass("page-footer-fixed") === !0 && t.hasClass("page-sidebar-fixed") === !1) {
                var o = App.getViewPort().height - $(".page-footer").outerHeight(!0) - $(".page-header").outerHeight(!0);
                a.height() < o && a.attr("style", "min-height:" + o + "px")
            } else {
                if (t.hasClass("page-sidebar-fixed")) e = n() - 10, t.hasClass("page-footer-fixed") === !1 && (e -= $(".page-footer").outerHeight(!0));
                else {
                    var r = $(".page-header").outerHeight(!0),
                        p = $(".page-footer").outerHeight(!0);
                    e = App.getViewPort().width < s ? App.getViewPort().height - r - p : i.height() - 10, e + r + p <= App.getViewPort().height && (e = App.getViewPort().height - r - p - 45)
                }
                a.attr("style", "min-height:" + e + "px")
            }
        },
        t = function(e, a) {
            var i = location.hash.toLowerCase(),
                t = $(".page-sidebar-menu");
            if ("click" === e || "set" === e ? a = $(a) : "match" === e && t.find("li > a").each(function() {
                var e = $(this).attr("href").toLowerCase();
                return e.length > 1 && i.substr(1, e.length - 1) == e.substr(1) ? void(a = $(this)) : void 0
            }), a && 0 != a.size() && "javascript:;" !== a.attr("href").toLowerCase() && "#" !== a.attr("href").toLowerCase()) {
                parseInt(t.data("slide-speed")), t.data("keep-expanded");
                t.hasClass("page-sidebar-menu-hover-submenu") === !1 ? t.find("li.nav-item.open").each(function() {
                    var e = !1;
                    $(this).find("li").each(function() {
                        return $(this).find(" > a").attr("href") === a.attr("href") ? void(e = !0) : void 0
                    }), e !== !0 && ($(this).removeClass("open"), $(this).find("> a > .arrow.open").removeClass("open"), $(this).find("> .sub-menu").slideUp())
                }) : t.find("li.open").removeClass("open"), t.find("li.active").removeClass("active"), t.find("li > a > .selected").remove(), a.parents("li").each(function() {
                    $(this).addClass("active"), $(this).find("> a > span.arrow").addClass("open"), 1 === $(this).parent("ul.page-sidebar-menu").size() && $(this).find("> a").append('<span class="selected"></span>'), 1 === $(this).children("ul.sub-menu").size() && $(this).addClass("open")
                }), "click" === e && App.getViewPort().width < s && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click()
            }
        },
        o = function() {
            $(".page-sidebar").on("click", "li > a", function(e) {
                if (!(App.getViewPort().width >= s && 1 === $(this).parents(".page-sidebar-menu-hover-submenu").size())) {
                    if ($(this).next().hasClass("sub-menu") === !1) return void(App.getViewPort().width < s && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click());
                    var a = $(this).parent().parent(),
                        t = $(this),
                        o = $(".page-sidebar-menu"),
                        n = $(this).next(),
                        r = o.data("auto-scroll"),
                        p = parseInt(o.data("slide-speed")),
                        d = o.data("keep-expanded");
                    d !== !0 && (a.children("li.open").children("a").children(".arrow").removeClass("open"), a.children("li.open").children(".sub-menu:not(.always-open)").slideUp(p), a.children("li.open").removeClass("open"));
                    var l = -200;
                    n.is(":visible") ? ($(".arrow", $(this)).removeClass("open"), $(this).parent().removeClass("open"), n.slideUp(p, function() {
                        r === !0 && $("body").hasClass("page-sidebar-closed") === !1 && ($("body").hasClass("page-sidebar-fixed") ? o.slimScroll({
                            scrollTo: t.position().top
                        }) : App.scrollTo(t, l)), i()
                    })) : ($(".arrow", $(this)).addClass("open"), $(this).parent().addClass("open"), n.slideDown(p, function() {
                        r === !0 && $("body").hasClass("page-sidebar-closed") === !1 && ($("body").hasClass("page-sidebar-fixed") ? o.slimScroll({
                            scrollTo: t.position().top
                        }) : App.scrollTo(t, l)), i()
                    })), e.preventDefault()
                }
            }), App.isAngularJsApp() && $(".page-sidebar-menu li > a").on("click", function(e) {
                App.getViewPort().width < s && $(this).next().hasClass("sub-menu") === !1 && $(".page-header .responsive-toggler").click()
            }), $(".page-sidebar").on("click", " li > a.ajaxify", function(e) {
                e.preventDefault(), App.scrollTop();
                var a = $(this).attr("href"),
                    i = $(".page-sidebar ul"),
                    t = ($(".page-content"), $(".page-content .page-content-body"));
                i.children("li.active").removeClass("active"), i.children("arrow.open").removeClass("open"), $(this).parents("li").each(function() {
                    $(this).addClass("active"), $(this).children("a > span.arrow").addClass("open")
                }), $(this).parents("li").addClass("active"), App.getViewPort().width < s && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click(), App.startPageLoading();
                var o = $(this);
                $.ajax({
                    type: "GET",
                    cache: !1,
                    url: a,
                    dataType: "html",
                    success: function(e) {
                        0 === o.parents("li.open").size() && $(".page-sidebar-menu > li.open > a").click(), App.stopPageLoading(), t.html(e), Layout.fixContentHeight(), App.initAjax()
                    },
                    error: function(e, a, s) {
                        App.stopPageLoading(), t.html("<h4>Could not load the requested content.</h4>")
                    }
                })
            }), $(".page-content").on("click", ".ajaxify", function(e) {
                e.preventDefault(), App.scrollTop();
                var a = $(this).attr("href"),
                    i = ($(".page-content"), $(".page-content .page-content-body"));
                App.startPageLoading(), App.getViewPort().width < s && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click(), $.ajax({
                    type: "GET",
                    cache: !1,
                    url: a,
                    dataType: "html",
                    success: function(e) {
                        App.stopPageLoading(), i.html(e), Layout.fixContentHeight(), App.initAjax()
                    },
                    error: function(e, a, s) {
                        i.html("<h4>Could not load the requested content.</h4>"), App.stopPageLoading()
                    }
                })
            }), $(document).on("click", ".page-header-fixed-mobile .responsive-toggler", function() {
                App.scrollTop()
            })
        },
        n = function() {
            var e = App.getViewPort().height - $(".page-header").outerHeight(!0) - 40;
            return $("body").hasClass("page-footer-fixed") && (e -= $(".page-footer").outerHeight()), e
        },
        r = function() {
            var e = $(".page-sidebar-menu");
            return App.destroySlimScroll(e), 0 === $(".page-sidebar-fixed").size() ? void i() : void(App.getViewPort().width >= s && (e.attr("data-height", n()), App.initSlimScroll(e), i()))
        },
        p = function() {
            var e = $("body");
            e.hasClass("page-sidebar-fixed") && $(".page-sidebar").on("mouseenter", function() {
                e.hasClass("page-sidebar-closed") && $(this).find(".page-sidebar-menu").removeClass("page-sidebar-menu-closed")
            }).on("mouseleave", function() {
                e.hasClass("page-sidebar-closed") && $(this).find(".page-sidebar-menu").addClass("page-sidebar-menu-closed")
            })
        },
        d = function() {
            var e = $("body");
            $.cookie && "1" === $.cookie("sidebar_closed") && App.getViewPort().width >= s && ($("body").addClass("page-sidebar-closed"), $(".page-sidebar-menu").addClass("page-sidebar-menu-closed")), $("body").on("click", ".sidebar-toggler", function(a) {
                var s = $(".page-sidebar"),
                    i = $(".page-sidebar-menu");
                $(".sidebar-search", s).removeClass("open"), e.hasClass("page-sidebar-closed") ? (e.removeClass("page-sidebar-closed"), i.removeClass("page-sidebar-menu-closed"), $.cookie && $.cookie("sidebar_closed", "0")) : (e.addClass("page-sidebar-closed"), i.addClass("page-sidebar-menu-closed"), e.hasClass("page-sidebar-fixed") && i.trigger("mouseleave"), $.cookie && $.cookie("sidebar_closed", "1")), $(window).trigger("resize")
            }), p(), $(".page-sidebar").on("click", ".sidebar-search .remove", function(e) {
                e.preventDefault(), $(".sidebar-search").removeClass("open")
            }), $(".page-sidebar .sidebar-search").on("keypress", "input.form-control", function(e) {
                return 13 == e.which ? ($(".sidebar-search").submit(), !1) : void 0
            }), $(".sidebar-search .submit").on("click", function(e) {
                e.preventDefault(), $("body").hasClass("page-sidebar-closed") && $(".sidebar-search").hasClass("open") === !1 ? (1 === $(".page-sidebar-fixed").size() && $(".page-sidebar .sidebar-toggler").click(), $(".sidebar-search").addClass("open")) : $(".sidebar-search").submit()
            }), 0 !== $(".sidebar-search").size() && ($(".sidebar-search .input-group").on("click", function(e) {
                e.stopPropagation()
            }), $("body").on("click", function() {
                $(".sidebar-search").hasClass("open") && $(".sidebar-search").removeClass("open")
            }))
        },
        l = function() {
            $(".page-header").on("click", ".search-form", function(e) {
                $(this).addClass("open"), $(this).find(".form-control").focus(), $(".page-header .search-form .form-control").on("blur", function(e) {
                    $(this).closest(".search-form").removeClass("open"), $(this).unbind("blur")
                })
            }), $(".page-header").on("keypress", ".hor-menu .search-form .form-control", function(e) {
                return 13 == e.which ? ($(this).closest(".search-form").submit(), !1) : void 0
            }), $(".page-header").on("mousedown", ".search-form.open .submit", function(e) {
                e.preventDefault(), e.stopPropagation(), $(this).closest(".search-form").submit()
            })
        },
        c = function() {
            var e = 300,
                a = 500;
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ? $(window).bind("touchend touchcancel touchleave", function(s) {
                $(this).scrollTop() > e ? $(".scroll-to-top").fadeIn(a) : $(".scroll-to-top").fadeOut(a)
            }) : $(window).scroll(function() {
                $(this).scrollTop() > e ? $(".scroll-to-top").fadeIn(a) : $(".scroll-to-top").fadeOut(a)
            }), $(".scroll-to-top").click(function(e) {
                return e.preventDefault(), $("html, body").animate({
                    scrollTop: 0
                }, a), !1
            })
        };
    return {
        initHeader: function() {
            l()
        },
        setSidebarMenuActiveLink: function(e, a) {
            t(e, a)
        },
        initSidebar: function() {
            r(), o(), d(), App.isAngularJsApp() && t("match"), App.addResizeHandler(r)
        },
        initContent: function() {},
        initFooter: function() {
            c()
        },
        init: function() {
            this.initHeader(), this.initSidebar(), this.initContent(), this.initFooter()
        },
        fixContentHeight: function() {},
        initFixedSidebarHoverEffect: function() {
            p()
        },
        initFixedSidebar: function() {
            r()
        },
        getLayoutImgPath: function() {
            return App.getAssetsPath() + e
        },
        getLayoutCssPath: function() {
            return App.getAssetsPath() + a
        }
    }
}();
App.isAngularJsApp() === !1 && jQuery(document).ready(function() {
	Layout.init()
});