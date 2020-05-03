/* ==========================================================================
   재사용 가능한 함수 모음
   ========================================================================== */

/* jQuery custom 함수 */
(function($) {

    // IE check
    $.fn.checkIE = function(cls) {
        var u = navigator.userAgent.toLowerCase();

        if ((navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) || (u.indexOf("msie") != -1)) {
            $(this).addClass(cls);
        }
    }

    // 말줄임표 체크
    $.fn.checkEllipsis = function() {
        return this.each(function() {
            var w = $(this).prop("scrollWidth") > $(this).prop("clientWidth")
              , h = $(this).prop("scrollHeight") > $(this).prop("clientHeight")
              , txt = $(this).text();

            (w || h) && $(this)
                            .attr("title", txt)
                            .empty().append("<span></span>")
                            .find("span").attr("aria-hidden", "true").text(txt);
        });
    }
    
})($);

/* 일반 함수 */
// inline 요소 여백 제거
function removeWhiteSpace(elem) {
    $(elem).contents().filter(function() {
        if (this.nodeType === 3) return (!/\S/.test(this.nodeValue));
    }).remove();
}

// 이미지 정렬
function alignImg(imgContainer) {
    var img = $(imgContainer).find("img")
      , imgW = img.width()
      , imgH = img.height();

    if (imgW > imgH) {
        img.removeClass("is--vertical").addClass("is--horizontal");
    } else if (imgW < imgH) {
        img.removeClass("is--horizontal").addClass("is--vertical");
    }
}

// 요소 드래그
function dragElem(elem, expt) {
    var dragging = false
    , x, y;

    $(elem).mousedown(function(event) {
        if (event.which === 1) {
            dragging = true;
            x = event.clientX - this.offsetLeft;
            y = event.clientY - this.offsetTop;
            this.setCapture && this.setCapture();
            return false;
        }
    });

    $(document).mousemove(function(event) {
        if (dragging) {
            var rx = event.clientX - x;
            var ry = event.clientY - y;
            $(elem).css({
                "left": rx + "px",
                "top": ry + "px"
            });
            return false;
        }
    });

    $(document).mouseup(function(event) {
        dragging = false;

        $(elem).releaseCapture();
        event.cancelBubble = true;
    });

    $(expt).mousedown(function(event) {
        event.stopPropagation();
    });
}