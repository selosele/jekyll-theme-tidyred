/* IE check */
(function() {
    var u = navigator.userAgent.toLowerCase()
      , IEcheck = document.getElementById("IEcheck");

    if ((navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) || (u.indexOf("msie") != -1)) {
        IEcheck.classList.add("is--visible");
    }
})();

$(function() {

    /* anchor 기본이벤트 무효화 */
    $("a").click(function(event) {
        var href = $(this).attr("href");
        if (href === "#" || href === "#none" || href === "") event.preventDefault();
    });

    /* 마우스커서 */
    $(document).mousemove(function(event) {
        var x = event.clientX
          , y = event.clientY
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
        if ((w !== "top") || (w !== "left")) {
            $(".cursor").css("will-change", "top, left");
        }
    });

    /* 맨 위로 이동 버튼 */
    $(".top-btn").on("click", function() {
        $("html, body").stop().animate({
            scrollTop: 0
        },500);
    });

    /* 이미지 정렬 */
    function alignImg(imgContainer) {
        $imgContainer = $(imgContainer);
        var img = $imgContainer.find("img")
          , imgW = img.width()
          , imgH = img.height();

        if (imgW > imgH) {
            img.removeClass("is--vertical").addClass("is--horizontal");
        } else if (imgW < imgH) {
            img.removeClass("is--horizontal").addClass("is--vertical");
        }

    }
    alignImg(".post__thumb");

    /* 포스트 목록 타이틀에 포커스 시 효과 */
    $(".archive__item-title a").on("mouseover focusin", function() {
        $(this).parents(".archive__item").addClass("is--active");
    }).on("mouseout focusout", function() {
        $(this).parents(".archive__item").removeClass("is--active");
    });

    /* 페이지네이션 비활성화 링크 */
    if ($(".pagination").length > 0) $(".pagination li a.disabled").attr("tabindex", "-1");

    /* inline 요소 여백 제거 */
    function removeWhiteSpace(elem) {
        var elem = $(elem);

        elem.contents().filter(function() {
            if (this.nodeType === 3) return (!/\S/.test(this.nodeValue));
        }).remove();
    }
    removeWhiteSpace(".archive__item, .pagination ul");

});