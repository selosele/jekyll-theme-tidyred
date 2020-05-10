/* ==========================================================================
   _function.js에서 작성한 함수 호출/재사용 불가능한 함수 모음
   ========================================================================== */

/* jQuery */
// 초점이동 테스트
// $(function() {
    
//     var objActiveCount = 0
//       , objTabbable = $("button, input:not([type='hidden']), select, textarea, [href], [tabindex]:not([tabindex='-1'])");

//     objTabbable.on("focus", function() {
//         objActiveCount += 1;

//         var objActivated = document.activeElement
//           , objActiveNum = document.createElement("span");
        
//         objActiveNum.innerHTML = objActiveCount;
//         objActiveNum.style.cssText = "position: absolute; z-index: 99999; font-size: 5rem; font-weight: 700; color: #525252";

//         if ($(this).find(objActiveNum).length === 0) $(this).append(objActiveNum);
//         console.log(objActivated, objActiveCount);
//     });

// });

$(function() {

    // IE 체크
    $("#IEcheck").checkIE("is--visible");

    // anchor 기본이벤트 무효화
    $("a").click(function(e) {
        var href = $(this).attr("href");
        if (href === "#" || href === "#none" || href === "") e.preventDefault();
    });

    // 마우스커서
    $(document).mousemove(function(e) {
        var x = e.clientX
          , y = e.clientY
          , w = $(".cursor").css("will-change");
        
        setTimeout(function() {
            $(".cursor.type1").css({
                "top": y - 10,
                "left": x + 10
            });
        }, 100);
        
        setTimeout(function() {
            $(".cursor.type2").css({
                "top": y + 10,
                "left": x + 10
            });
        }, 200);

        if ((w !== "top") || (w !== "left")) $(".cursor").css("will-change", "top, left");
    });

    // 맨 위로 이동 버튼
    $(".move-to-top").on("click", function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500);
    });

    // 이미지 정렬
    alignImg(".author__avatar");

    // 포스트 목록 타이틀에 마우스오버/포커스 시 효과
    $(".archive__item-title a").on("mouseover focusin", function() {
        $(this).parents(".archive__item").addClass("is--active");
    }).on("mouseout focusout", function() {
        $(this).parents(".archive__item").removeClass("is--active");
    });

    // 포스트 목록 태그 한글체크
    $(".post--tag").checkKor();

    // inline 요소 여백 제거
    removeWhiteSpace(".archive__item, .pagination ul");

    // 빈 요소 제거
    emptyElemRemove(".side-menu .menu__layer ul");

});

// $(function() {

//     // 고정 네비게이션
//     var nav = $(".nav--fixed")
//       , navObjExptDrag = $(".nav__item, .site-title")
//       , navObjClose = nav.find(".close-nav")
//       , navObjTabble = nav.find("button, input:not([type='hidden']), select, textarea, [href], [tabindex]:not([tabindex='-1'])")
//       , navObjTabbleFirst = navObjTabble.first()
//       , navCloseFlag = false;

//     function navOpen() {
//         nav.css("display", "flex");
//         setTimeout(function() {
//             nav.css("transform", "scale(1)");
//         });
//     }
//     navOpen();
//     dragElem(nav, navObjExptDrag);

//     navObjClose.on("click", function() {
//         nav.css("transform", "scale(0)");
//         setTimeout(function() {
//             nav.css("display", "none");
//         }, 600);
//         navCloseFlag = true;

//         if (navCloseFlag === true) {
//             nav.after("<button type='button' class='open-nav' title='네비게이션 열기' aria-controls='site-nav' aria-expanded='false'><span aria-hidden='true'>+</span></button>");
//             $(".open-nav").focus().on("click", function() {
//                 $(this).remove();
//                 navOpen();
//                 navObjClose.attr("aria-expanded", "true").focus();
//                 navCloseFlag = false;
//             });
//         }
//     });

// });

$(function() {

    // 메인 메뉴
    var nav = $(".site-nav")
      , menu = $(".side-menu")
      , menuOuterObj = $(".skip-links, #IEcheck, .masthead, .content-wrapper, .search-content, .mastfoot")
      , menuObjLayer = menu.find(".menu__layer")
      , menuObjOpen = nav.find(".menu__toggle")
      , menuObjClose = menu.find(".close-nav")
      , menuObjList = menu.find("ul").children("li")
      , menuObjListAnchor = menuObjList.find("a")
      , menuObjTabble = menu.find("button, input:not([type='hidden']), select, textarea, [href], [tabindex]:not([tabindex='-1'])")
      , menuObjTabbleFirst = menuObjTabble.first()
      , menuObjTabbleLast = menuObjTabble.last()
      , menuObjFocusedLast, nowScrollPos;

    menuObjOpen.on("click", function() {
        // $("body")
        //     .css("top", - $(window).scrollTop() + "px")
        //     .addClass("scroll-off")
        //     .on("scroll touchmove mousewheel", function(e){
        //         e.preventDefault();
        // });
        // nowScrollPos = $("body").css("top").replace("px", "");
        menu
            .attr("aria-hidden", "false")
            .addClass("is--visible")
            .on("click", function(e) {
                if (e.target === e.currentTarget) menuClose();
            });
        $(this).attr("aria-expanded", "true");
        $("body").addClass("is--hidden");
        menuOuterObj.attr("aria-hidden", "true");

        setTimeout(function() {
            menuObjLayer.stop().animate({"right": "0"}, 400);
        });
        
        menuObjListAnchor.checkEllipsis();
        menuObjTabble.on("focusin", function() {
            menuObjFocusedLast = $(this);
        });

        menuObjFocusedLast ? menuObjFocusedLast.focus() : menuObjTabbleFirst.focus().on("keydown", function(e) {
            var key = e.keyCode || e.which;

            if (e.shiftKey && key === 9) { // Shift + Tab키 : 초점이동 가능한 첫번째 요소에서 마지막 요소로 초점 이동
                (e.preventDefault(), menuObjTabbleLast.focus());
            }
        });

        menuObjTabbleLast.on("keydown", function(e) {
            var key = e.keyCode || e.which;
            
            if (!e.shiftKey && key === 9) { // Tab키 : 초점이동 가능한 마지막 요소에서 첫번째 요소로 초점 이동
                (e.preventDefault(), menuObjTabbleFirst.focus());
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
        menuObjOpen.attr("aria-expanded", "false");
        $("body").removeClass("is--hidden");
        menuOuterObj.removeAttr("aria-hidden");
        menuObjLayer.stop().animate({"right": "-100%"}, 400);

        setTimeout(function() {
            menu.removeClass("is--visible");
            menuObjLayer.removeAttr("style");
        }, 400);

        menu.attr("aria-hidden", "true");
        menuObjOpen.focus();
    }

    menuObjClose.on("click", menuClose);
    
    $(document).keydown(function(e) {
        var key = e.keyCode || e.which;
        if (key === 27) { // Esc 키 : 메뉴 닫기
            menu.hasClass("is--visible") && menuClose();
        }
    });

});