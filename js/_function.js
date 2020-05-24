/* ==========================================================================
   재사용 가능한 함수 모음
   ========================================================================== */

/* jQuery custom 함수 */
(function($) {

    // IE 체크
    $.fn.checkIE = function(cls) {
        var ua = navigator.userAgent.toLowerCase();

        if ((navigator.appName == "Netscape" && navigator.userAgent.search("Trident") != -1) || (ua.indexOf("msie") != -1)) {
            $(this).addClass(cls);
        }
    }

    // 말줄임표 체크
    $.fn.checkEllipsis = function() {
        return this.each(function() {
            var t_width = $(this).prop("scrollWidth") > $(this).prop("clientWidth"),
                t_height = $(this).prop("scrollHeight") > $(this).prop("clientHeight"),
                t_text = $(this).text();

            if (t_width || t_height) {
                $(this)
                    .attr("title", t_text)
                    .empty()
                        .append("<span></span>")
                    .find("span")
                        .attr("aria-hidden", "true")
                        .text(t_text);
            }
        });
    }

    // 한글 체크
    $.fn.checkKor = function(cls) {
        return this.each(function() {
            var kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

            if (!kor.test($(this).text())) $(this).addClass(cls);
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
    var img = $(imgContainer).find("img"),
        imgW = img.width(),
        imgH = img.height();

    if (imgW > imgH) {
        img.removeClass("is--vertical").addClass("is--horizontal");
    } else if (imgW < imgH) {
        img.removeClass("is--horizontal").addClass("is--vertical");
    }
}

// 빈 요소 제거
function emptyElemRemove(elem) {
    removeWhiteSpace(elem);
    
    $(elem).each(function() {
        if ($(this).is(":empty")) $(this).remove();
    });
}