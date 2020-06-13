/* ==========================================================================
   _function.js에서 작성한 함수 호출/재사용 불가능한 함수 모음
   ========================================================================== */

// IE check
// window.document.documentMode && document.documentElement.classList.add("only-ie");

// anchor 기본이벤트 무효화
(function() {
    
    var anchorElement = document.querySelectorAll("a");
    if (!anchorElement) return;

    for (var i = 0; i < anchorElement.length; i++) {
        anchorElement[i].addEventListener("click", function(e) {
            switch (this.getAttribute("href")) {
                case "#":
                case "#none":
                case "":
                    e.preventDefault();
                    break;
            }
        });
    }

})();

// sns
(function() {

    var shareElement = document.getElementById("page-share");
    if (shareElement) {
        var shareELbtn = shareElement.querySelectorAll("a"), i;

        for (i = 0; i < shareELbtn.length; i++) {
            shareELbtn[i].addEventListener("click", function (e) {
                e.preventDefault();
                window.open(this.href, 'window', 'left=20, top=20, width=500, height=500, toolbar=1, resizable=0');
            });
        }
    }
})();

// 로딩
(function($) {

    var loadingElement = $(".loading-wrapper"),
        loadingELbar = loadingElement.children(".loading__bar");

    performance.navigation.type === 1 && function loopLoading() {
        loadingELbar
            .removeAttr("style")
            .stop()
            .animate({"width": "100%"}, 300, function() { 
                loopLoading();
            });
    }();

    window.onload = function() {
        loadingElement.remove();
    }

})($);

// abbr
$(function() {

    function tooltipCreate(e) {
        var targetElement = $(e.currentTarget),
            tooltipElement = targetElement.find(".abbr__tooltip");

        if (!tooltipElement.length) {
            targetElement
                .addClass("tooltip--visible")
                .attr("tabindex", "0")
                .append("<span class='abbr__tooltip'>" + targetElement.attr('title') + "</span>")
                .find("span")
                    .attr({
                        "tabindex": "0",
                        "role": "tooltip",
                        "id": targetElement.attr("aria-describedby")
                });

        } else {
            targetElement.removeClass("tooltip--visible");
            tooltipElement.remove();
        }
    }

    var abbrElement = $("abbr[title]");

    if ($(window).outerWidth() <= 1200) {
        abbrElement.on("click", tooltipCreate);
    }

    $(window).resize(function() {
        if ($(window).outerWidth() <= 1200) {
            abbrElement.on("click", tooltipCreate);
        } else {
            $(".abbr__tooltip").remove();
            abbrElement.off("click");
        }
    });

});

$(function() {

    // 포스트 페이지 heading link
    $(".page__content").find(":header:not(.toc__title)").each(function() {
        var t_id = $(this).attr("id");

        if (t_id) {
            var t_anc = document.createElement("a");
            t_anc.className = "heading-link";
            t_anc.href = "#" + t_id;
            t_anc.title = t_id;
            $(this).prepend(t_anc);
        }
    });

    // 맨 위로 이동 버튼
    $(".move-to-top").on("click", function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500);
    });

    // 이미지 정렬
    alignImg(".author__avatar");

    // inline 요소 여백 제거
    removeWhiteSpace(".archive__item, .pagination, .pagination ul, .page__share, .page__taxonomy .keyword-wrapper");

    // 빈 요소 제거
    emptyElemRemove(".side-menu .menu__layer ul");

});

// 목차
$(function() {

    $(window).scroll(function() {
        var tocELheadings = $(".page__content").find(":header");
        if (!tocELheadings) return;

        tocELheadings.each(function() {
            if ($(window).scrollTop() >= $(this).offset().top - 1) {
                var t_id = $(this).attr("id"),
                    t_anchor = $(".toc-wrapper li a[href='#"+t_id+"']"),
                    tocELanchor = $(".toc-wrapper li a");

                tocELanchor.hasClass("toc--active") && tocELanchor.removeClass("toc--active");
                !t_anchor.hasClass("toc--active") && t_anchor.addClass("toc--active");
            }
        });
    });

    $(document).keydown(function(e) {
        var keyType = e.keyCode || e.which;

        if ((e.altKey && keyType === 192) && !$(".toc--fixed").is(":focus")) {
            $(".toc--fixed").focus();
        } // alt + ~ 키 : 목차로 초점 이동
    });

    function activateToc(toc, main) {
        if (!toc) return;

        $(window).scroll(function() {
            var tocAdjacentEL = $(toc).next();
            
            if ($(window).outerWidth() <= 1200 || !tocAdjacentEL.length) return;
            if ($(window).scrollTop() >= tocAdjacentEL.offset().top) {
                if (!toc.hasClass("toc--fixed")) {
                    $(toc)
                        .addClass("toc--fixed")
                        .attr("tabindex", "0");
                    $(main).add(".mastfoot").addClass("toc-layout");
                }
            } else {
                $(toc)
                    .removeClass("toc--fixed")
                    .removeAttr("tabindex");
                $(main).add(".mastfoot").removeClass("toc-layout");
            }
        });
    }

    function deactivateToc(toc, main) {
        $(toc).removeClass("toc--fixed");
        $(main).add(".mastfoot").removeClass("toc-layout");
    }

    function initToc() {
        var tocEL = $(".toc-wrapper"),
            mainEL = $(".content-wrapper");
        
        $(window).outerWidth() > 1200 ? activateToc(tocEL, mainEL) : deactivateToc(tocEL, mainEL);
    }

    initToc();
    $(window).resize(initToc);

});

// 스크롤 테이블
$(function() {

    var tbl_wraped = false;

    function tblScrollChk() {
        var tbl = $(".page__content table");
        if (!tbl) return;

        tbl.each(function() {
            !tbl_wraped && tbl.wrap("<div class='tbl-wrapper'></div>");
            tbl_wraped = true;

            var tblOuterELwrapper = $(this).closest(".tbl-wrapper");

            if (tblOuterELwrapper.prop("scrollWidth") > tblOuterELwrapper.prop("clientWidth")) {
                if (!tblOuterELwrapper.hasClass("table--scroll")) {
                    tblOuterELwrapper
                        .addClass("table--scroll")
                        .attr({"tabindex": "0"})
                        .focus();
                }
            } else {
                if (tblOuterELwrapper.hasClass("table--scroll")) {
                    tblOuterELwrapper
                        .removeClass("table--scroll")
                        .removeAttr("tabindex")
                        .blur();
                }
            }
        });
    }
    tblScrollChk();
    $(window).resize(tblScrollChk);
    
});

$(function() {

    // 메인 메뉴
    var nav = $(".site-nav"),
        menu = $(".side-menu"),
        menuOuterEL = $("body").children().not(menu.add("script")),
        menuELlayer = menu.find(".menu__layer"),
        menuELopen = nav.find(".nav__menu-open"),
        menuELclose = menu.find(".menu__close"),
        menuELtabble = menu.find("button, input:not([type='hidden']), select, textarea, [href], [tabindex]:not([tabindex='-1'])"),
        menuELtabbleFirst = menuELtabble.first(),
        menuELtabbleLast = menuELtabble.last(),
        menuELFocusedLast, nowScrollPos;

    menuELopen.on("click", function() {
        // $("body")
        //     .css("top", - $(window).scrollTop() + "px")
        //     .addClass("scroll-off")
        //     .on("scroll touchmove mousewheel", function(e){
        //         e.preventDefault();
        // });
        // nowScrollPos = $("body").css("top").replace("px", "");
        menu
            .attr("aria-hidden", "false")
            .css("display", "block")
            .on("click", function(e) {
                e.target === e.currentTarget && menuClose();
            });
        $(this).attr("aria-expanded", "true");
        $("body").addClass("is--hidden");
        menuOuterEL.attr("aria-hidden", "true");

        setTimeout(function() {
            menuELlayer.stop().animate({"right": "0"}, 400);
        });
        
        menuELtabble.on("focusin", function() {
            menuELFocusedLast = $(this);
        });

        menuELFocusedLast ? menuELFocusedLast.focus() : menuELtabbleFirst.focus().on("keydown", function(e) {
            var keyType = e.keyCode || e.which;

            if (e.shiftKey && keyType === 9) {
                e.preventDefault();
                menuELtabbleLast.focus();
            }
        });

        menuELtabbleLast.on("keydown", function(e) {
            var keyType = e.keyCode || e.which;
            
            if (!e.shiftKey && keyType === 9) {
                e.preventDefault();
                menuELtabbleFirst.focus();
            }
        });

        menuELclose.on("click", menuClose);

        $(document).keydown(function(e) {
            var keyType = e.keyCode || e.which;
            
            if (keyType === 27) { // Esc 키 : 메뉴 닫기
                menu.css("display") === "block" && menuClose();
            }
        });
    });

    function menuClose() {
        // $("body")
        //     .removeClass("scroll-off")
        //     .css("top", "")
        //     .off("scroll touchmove mousewheel");
        // if (!$("body").hasClass("scroll-off")) {
        //     $(window).scrollTop(nowScrollPos);
        // }
        menuELclose.add(menuELopen).attr("aria-expanded", "false");
        $("body").removeClass("is--hidden");
        menuOuterEL.removeAttr("aria-hidden");
        menuELlayer.stop().animate({"right": "-100%"}, 400);

        setTimeout(function() {
            menu.add(menuELlayer).removeAttr("style");
        }, 400);

        menu.attr("aria-hidden", "true");
        menuELopen.focus();
    }

});

/* 첫글자 */
$(function() {

    // 첫글자 감싸기
    function firstLetterCreate() {
        if (!$(".layout--post .page__content p").length || !fl_activated) return;

        var para = $(".page__content p").eq(0),
            paraTxt = para.html(),
            paraTxtFirst = "<span class='first-letter'>"+paraTxt.charAt(0)+"</span>";

        para.html(paraTxtFirst + paraTxt.slice(1, paraTxt.length));
    }
    firstLetterCreate();

    // 첫글자 type
    function firstLetterType() {
        if (!fl_activated) return;

        var para = $(".page__content p:has('.first-letter')"),
            paraELfirstLetter = para.find(".first-letter"),
            paraHt = para.outerHeight(),
            paraFontSz = parseInt(para.css("font-size")),
            paraLineHt = parseInt(para.css("line-height")),
            paraLine = Math.ceil((paraHt / paraLineHt) % paraFontSz);

        paraLine >= 4 ? paraELfirstLetter.removeClass("type1").addClass("type2") : paraELfirstLetter.removeClass("type2").addClass("type1");
    }
    firstLetterType();

    $(window).resize(function() {
        this.resizeTo = setTimeout(function() {
            $(this).trigger("resizeEnd");
        }, 150);
    }).on("resizeEnd", firstLetterType);

});

// 검색 레이어
$(function() {

    var openBtn = $(".nav__search-open"),
        closeBtn = $(".search__close"),
        layer = $(".search-content"),
        outerEL = $("body").children().not(layer.add("script, .side-menu")),
        tabbale = layer.find("button, input:not([type='hidden']), select, textarea, [href], [tabindex]:not([tabindex='-1'])"),
        tabbaleFirst = tabbale.first(),
        tabbaleLast = tabbale.last(),
        sForm = layer.find("form"),
        sInput = layer.find("input[type='search']"), sInputVal, sInputValNotChanged;

    function layerClose() {
        $("body").removeClass("is--hidden");
        closeBtn.attr("aria-expanded", "false");
        layer.stop().animate({"opacity":"0"}, {
            duration: 200,
            complete: function() {
                layer.removeAttr("style");
            }
        });

        setTimeout(function() {
            outerEL.attr("aria-hidden") !== true && outerEL.removeAttr("aria-hidden");
            layer.attr("aria-hidden", "true");
        }, 200);

        openBtn.attr("aria-expanded", "false").focus();
    }

    openBtn.click(function() {
        sInputValNotChanged = true;

        $(this).attr("aria-expanded", "true");
        $("body").addClass("is--hidden");
        outerEL.attr("aria-hidden", "true");
        layer
            .css("display", "block")
            .attr("aria-hidden", "false")
            .click(function(e) {
                e.target === e.currentTarget && layerClose();
            });

        setTimeout(function() {
            layer.stop().animate({"opacity":"1"}, {
                duration: 200,
                complete: function() {
                    sInput
                        .focus()
                        .on("propertychange change keyup paste input focus", function() {
                            if (sInput.val().length) {
                                sInputVal = false;
                                sInputValNotChanged = false;
                            } else {
                                sInputVal = true;
                                sInputValNotChanged = true;
                            }
                    });
                }
            });
        });

        tabbaleFirst.keydown(function(e) {
            var keyType = e.keyCode || e.which;

            if (e.shiftKey && keyType === 9) {
                e.preventDefault();
                tabbaleLast.focus();
            }
        });

        tabbaleLast.keydown(function(e) {
            var keyType = e.keyCode || e.which;

            if (!e.shiftKey && keyType === 9) {
                e.preventDefault();
                tabbaleFirst.focus();
            }
        });

        $(document).keydown(function(e) {
            var keyType = e.keyCode || e.which;

            if (keyType === 27) { // Esc 키 : form reset/레이어 닫기
                sInputValNotChanged || !sInput.is(":focus") || sInputVal ? layerClose() : sForm[0].reset();
            }
        });
        
        closeBtn.click(layerClose);
    });

});

// 탭
$(function() {

    var tabWrapper = $(".tab-wrapper");
    if (!tabWrapper) return;

    function handleClickEvent(e) {
        e.stopPropagation();

        var actTab = e.target,
            actPanel = $("#" + actTab.getAttribute("aria-controls"));

        activateTab(actTab, actPanel);
    }

    function handleKeydownEvent(e) {
        e.stopPropagation();

        var keyType = e.keyCode || e.which,
            thisTab = $(e.target),
            actPanel = $("#" + thisTab.attr("aria-controls")),
            tabbleEL = actPanel.find("button, input:not([type='hidden']), select, textarea, [href], [tabindex]:not([tabindex='-1'])");

        switch(keyType) {
            case 37:
                if (thisTab.is(":first-child")) {
                    thisTab.siblings(":last").focus();
                } else {
                    thisTab.prev().focus();
                }
                break;

            case 39:
                if (thisTab.is(":last-child")) {
                    thisTab.siblings(":first").focus();
                } else {
                    thisTab.next().focus();
                }
                break;

            case 13:
            case 32:
                e.preventDefault();
                activateTab(thisTab, actPanel);
                break;

            case 36:
                e.preventDefault();
                thisTab.is(":focus") && thisTab.siblings(":first").focus();
                break;

            case 35:
                e.preventDefault();
                thisTab.is(":focus") && thisTab.siblings(":last").focus();
                break;
        }

        var tabbleELfocusedLast;
        tabbleEL.keydown(function(e) {
            tabbleELfocusedLast = $(this);

            if (e.ctrlKey && !thisTab.is(":focus")) thisTab.focus().keydown(function(e) {
                e.ctrlKey && tabbleELfocusedLast.focus();
            });
        });
    }

    function activateTab(tab, panel) {
        if (!tab || !panel) return;

        $(tab)
            .addClass("is--active")
            .attr({
                "tabindex": "0",
                "aria-selected": "true"
            })
            .focus()
            .siblings()
                .removeClass("is--active")
                .attr({
                    "tabindex": "-1",
                    "aria-selected": false
                });

        $(panel)
            .addClass("is--active")
            .attr({
                "tabindex": "0"
            })
            .prop({
                "hidden": "false"
            })
            .siblings(".tabpanel")
                .removeClass("is--active")
                .attr({
                    "tabindex": "-1"
                })
                .prop({
                    "hidden": true
                });
    }

    $(".tablist button:first-child")
        .addClass("is--active")
        .attr({
            "tabindex": "0",
            "aria-selected": "true"
        });

    tabWrapper
        .find(".tabpanel:first")
            .addClass("is--active")
            .attr({
                "tabindex": "0"
            })
            .prop({
                "hidden": false
            });

    tabWrapper.on("click", ".tablist button", handleClickEvent);
    tabWrapper.on("keydown", ".tablist button", handleKeydownEvent);
});