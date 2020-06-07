/* ==========================================================================
   재사용 가능한 함수 모음
   ========================================================================== */

/* jQuery custom 함수 */
(function($) {

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