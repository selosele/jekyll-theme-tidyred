/* ==========================================================================
   재사용 가능한 함수 모음
   ========================================================================== */

/* jQuery custom 함수 */
(function($) {

    // IE 체크
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

    // 한글체크
    $.fn.checkKor = function() {
        return this.each(function() {
            var kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            !kor.test($(this).text()) ? $(this).attr("lang", "en") : $(this).attr("lang", "ko");
        })
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

    $(elem).mousedown(function(e) {
        if (e.which === 1) {
            dragging = true;
            x = e.clientX - this.offsetLeft;
            y = e.clientY - this.offsetTop;
            this.setCapture && this.setCapture();
            return false;
        }
    });

    $(document).mousemove(function(e) {
        if (dragging) {
            var rx = e.clientX - x;
            var ry = e.clientY - y;
            $(elem).css({
                "left": rx + "px",
                "top": ry + "px"
            });
            return false;
        }
    });

    $(document).mouseup(function(e) {
        dragging = false;

        $(elem).releaseCapture();
        e.cancelBubble = true;
    });

    $(expt).mousedown(function(e) {
        e.stopPropagation();
    });
}