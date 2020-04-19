/* IE check */
(function() {
    var u = navigator.userAgent.toLowerCase()
      , IEcheck = document.getElementById("IEcheck");

    if ((navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) || (u.indexOf("msie") != -1)) {
        IEcheck.classList.add("is--visible");
    }
})();

$(function() {

    /* Prevent event anchor tag */
    $("a").click(function(event) {
        var href = $(this).attr("href");
        if (href === "#" || href === "#none" || href === "") event.preventDefault();
    });

    /* Cursor */
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

    /* Button to top */
    $(".top-btn").on("click", function() {
        $("html, body").stop().animate({
            scrollTop: 0
        },500);
    });

    /* Align images */
    function alignImg(imgContainer) {
        $imgContainer = $(imgContainer);
        var img = $imgContainer.find("img")
          , imgW = img.width()
          , imgH = img.height();

        if (imgW >= imgH) {
            img.removeClass("is--vertical").addClass("is--horizontal");
        } else if (imgW < imgH) {
            img.removeClass("is--horizontal").addClass("is--vertical");
        }

    }
    alignImg(".post__thumb");

    /* When focus on post list's title */
    $(".archive__item-title a").on("focusin", function() {
        $(this).parents(".list__item").addClass("is--active");
    }).on("focusout", function() {
        $(this).parents(".list__item").removeClass("is--active");
    });

    /* When click post list */
    $(".archive .list__item").on("click", function() {
        var postLink = $(this).find("a").attr("href");

        location.href = postLink;
    });

});