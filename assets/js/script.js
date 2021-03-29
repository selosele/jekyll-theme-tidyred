"use strict";!function(e){window.navigator.userAgent.toLowerCase().indexOf("trident")>-1&&(e.className+=" only-ie",document.getElementById("ie-alert").removeAttribute("aria-hidden")),navigator.userAgent.indexOf("MSIE")>=0&&(e.className+=" lte-ie10",document.getElementById("ie-version-txt").innerHTML="IE 브라우저 10 버전 이하를 <strong>지원하지 않습니다.</strong>")}(document.documentElement),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("img");if(e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("error",(function(){this.parentElement.classList.add("has-error-img")}))})),function(){var e=document.documentElement,t=document.body,n=document.getElementById("side-menu"),r=document.getElementById("primary-nav"),a=document.querySelectorAll("#skip-links, #ie-alert, #masthead, #content, #mastfoot"),i=document.querySelector(".nav__menu-open"),c=r.querySelector(".menu__close"),s=r.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),o=s.length&&s[0],l=s.length&&s[s.length-1],d=r.querySelectorAll("a[href^='/category-list/#']"),u=0;function h(){document.removeEventListener("keydown",v),c.blur(),c.setAttribute("aria-expanded","false"),i.setAttribute("aria-expanded","false"),i.focus(),n.setAttribute("aria-hidden","true"),r.classList.remove("menu__layer--animate"),e.classList.remove("layer-opened");for(var s=0;s<a.length;s++)a[s].removeAttribute("aria-hidden");setTimeout((function(){n.classList.remove("side-menu--active")}),400),t.style.top="",window.scrollTo(0,u)}function v(e){var t=e.key;!n.classList.contains("side-menu--active")||"Escape"!==t&&"Esc"!==t||h()}i.addEventListener("click",(function(i){u=window.pageYOffset,e.classList.add("layer-opened"),t.style.top=-u+"px",i.currentTarget.setAttribute("aria-expanded","true"),c.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),n.classList.add("side-menu--active"),setTimeout((function(){r.classList.add("menu__layer--animate")}));for(var s=0;s<a.length;s++)a[s].setAttribute("aria-hidden","true");o.focus(),o.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),l.focus())})),l.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),o.focus())})),document.addEventListener("keydown",v)})),c.addEventListener("click",h),n.addEventListener("click",(function(e){e.target===e.currentTarget&&h()}));for(var m=0;m<d.length;m++)document.querySelector(".layout--categories")&&d[m].addEventListener("click",h)}(),window.addEventListener("scroll",(function(){if(document.querySelector(".layout--post")){var e=document.body.scrollHeight-window.innerHeight,t=window.pageYOffset/e*100;document.getElementById("scroll-indicator").style.width=t+"%"}})),function(){var e=document.getElementById("page-content");if(e){for(var t=e.querySelectorAll("h2, h3, h4, h5, h6"),n=0;n<t.length;n++){var r=t[n],a=r.id,i=r.textContent,c=document.createElement("a");a?c.href="#"+a:(r.id=i.replace(/ /g,"-"),c.href="#"+i.replace(/ /g,"-")),c.title=i.replace(/-/g," "),c.classList.add("page__header-link"),r.insertBefore(c,r.firstChild)}var s=document.querySelector(".toc-wrapper");if(s){var o=e.querySelectorAll(".page__header-link"),l=function(e,t){e.querySelector("[href='"+decodeURI(t.hash)+"']").scrollIntoView(!0)};for(n=0;n<o.length;n++)o[n].addEventListener("click",(function(){l(s,this)}));location.hash&&l(s,location)}}}(),function(){var e,t=document.querySelectorAll("abbr[title]");if(t.length)for(var n=0;n<t.length;n++){(r=t[n]).addEventListener("click",s),r.addEventListener("keydown",o)}document.addEventListener("click",d),document.addEventListener("touchstart",d);for(n=0;n<t.length;n++){var r=t[n],a=document.createElement("span"),i="tooltip"+n+"-"+encodeURI(r.title).replace(/ /g,"0").replace(/%/g,"1");r.setAttribute("aria-describedby",i),r.setAttribute("tabindex",0),a.hidden=!0,a.setAttribute("role","tooltip"),a.id=i,a.textContent=r.title,a.classList.add("abbr__tooltip"),r.appendChild(a)}var c=document.querySelectorAll(".abbr__tooltip");function s(t){if(t.target===t.currentTarget||"Enter"===t.key){var n=(e=t.currentTarget).querySelector(".abbr__tooltip");n.classList.contains("abbr__tooltip--active")?l(n):(n.hidden=!1,n.setAttribute("tabindex",0),n.classList.add("abbr__tooltip--active"))}}function o(e){"Enter"===e.key&&s(e)}function l(t){t.hidden=!0,t.setAttribute("tabindex",-1),t.classList.remove("abbr__tooltip--active"),e.focus()}function d(e){for(var t=0;t<c.length;t++){var n=c[t];"ABBR"!==e.target.tagName&&!e.target.classList.contains("abbr__tooltip")&&n.classList.contains("abbr__tooltip--active")&&l(n)}}if(c.length)for(n=0;n<c.length;n++)c[n].addEventListener("click",(function(){l(this)}))}(),function(){var e=document.getElementById("page-content");if(e){var t=e.querySelectorAll("div.highlighter-rouge");Array.prototype.forEach.call(t,(function(e){var t=document.createElement("div");t.classList.add("highlight__util-wrapper"),e.insertBefore(t,e.firstChild);var n=e.className.replace(/language-|highlighter-rouge/g,""),r=e.querySelector(".highlight__util-wrapper");if("plaintext "!==n){var a=document.createElement("span");a.textContent=n,a.classList.add("highlight__language"),r.insertBefore(a,r.firstChild)}var i=document.createElement("button");if(i.textContent="복사",i.classList.add("highlight__copy-button"),r.appendChild(i),e.querySelector(".highlight__copy-button").addEventListener("click",(function(t){try{var n=t.currentTarget,r=n.parentElement.parentElement,a=e.querySelector(".lineno")?r.querySelector(".rouge-code > pre"):r.querySelector("pre.highlight"),i=document.createElement("textarea");i.setAttribute("readonly",!0),i.setAttribute("contenteditable",!0),i.classList.add("sr-only"),i.value=a.textContent,n.parentElement.appendChild(i),i.select();var c=document.createRange();c.selectNodeContents(i);var s=window.getSelection();s.removeAllRanges(),s.addRange(c),i.setSelectionRange(0,i.value.length),document.execCommand("copy"),n.textContent="복사됨"}catch(e){alert("복사에 실패했습니다.")}finally{n.parentElement.removeChild(i),n.focus()}})),e.hasAttribute("data-line")&&e.querySelector(".lineno")){var c=e.querySelector(".lineno"),s=e.getAttribute("data-line").split("-")[0],o=e.getAttribute("data-line").split("-")[1];c===s||c.querySelector("span")||(c.innerHTML=c.innerHTML.replace(s,"<span id=code-line"+s+">"+s+"</span>")),c!==o&&(c.innerHTML=c.innerHTML.replace(o,"<span id=code-line"+o+">"+o+"</span>"));var l=document.createElement("span"),d=e.querySelectorAll("[id='code-line"+s+"']")[0],u=d.nextElementSibling,h=e.querySelector("pre.highlight");l.setAttribute("aria-hidden","true"),l.classList.add("highlight__bg"),h.insertBefore(l,h.firstChild);var v=function(t,n){var r=t.offsetTop;if(l.style.top=r+13+"px",o){var a=n.offsetTop-r+parseInt(getComputedStyle(n,null).lineHeight);e.querySelector(".highlight__bg").style.height=a+"px"}};v(d,u),window.addEventListener("resize",(function(){v(d,u)}))}}))}}(),function(){var e=function(e){var t=e.currentTarget,n=document.querySelector("[aria-labelledby="+t.id+"]");n.classList.contains("archive__list--active")?(n.classList.remove("archive__list--active"),n.hidden=!0,n.setAttribute("tabindex",-1),t.classList.remove("archive__btn--active"),t.setAttribute("aria-expanded","false")):(n.classList.add("archive__list--active"),n.hidden=!1,n.setAttribute("tabindex",0),t.classList.add("archive__btn--active"),t.setAttribute("aria-expanded","true"))},t=document.querySelectorAll(".archive__btn");if(t.length)for(var n=0;n<t.length;n++)t[n].addEventListener("click",e)}(),function(){var e,t,n=document.documentElement,r=document.body,a=document.querySelector(".nav__search-open"),i=document.querySelector(".search__close"),c=document.getElementById("search-content"),s=document.querySelectorAll("#skip-links, #masthead, #content, #mastfoot, #side-menu"),o=c.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),l=o.length&&o[0],d=o.length&&o[o.length-1],u=document.getElementById("search-results"),h=document.getElementById("search-title"),v=document.getElementById("search-input"),m=c.querySelector(".search__count-wrapper"),p=m.querySelector(".search__word"),f=m.querySelector(".search__count"),g=document.querySelector(".search__link-wrapper"),y=0;function _(){var n=v.value;if(n){e=!1,t=!1,h.classList.contains("sr-only")||h.classList.add("sr-only"),m.classList.contains("search__count-wrapper--active")||m.classList.add("search__count-wrapper--active"),g&&!g.classList.contains("search__link-wrapper--active")&&g.classList.add("search__link-wrapper--active");for(var r=0,a=u.querySelectorAll("a");r<a.length;r++){var i=a[r],c=i.innerHTML.match(new RegExp(n,"i"));i===c||i.querySelector(".search__results__match")||(i.innerHTML=i.innerHTML.replace(c,'<span class="search__results__match">'+c+"</span>"))}}else e=!0,t=!0,h.classList.remove("sr-only"),g&&g.classList.remove("search__link-wrapper--active");var s=u.querySelectorAll(".search__results__item");s.length?(v.setAttribute("aria-expanded","true"),p.textContent='"'+n+'"',f.textContent=s.length):(v.setAttribute("aria-expanded","false"),m.classList.remove("search__count-wrapper--active"))}function b(){document.removeEventListener("keydown",L),n.classList.remove("layer-opened"),i.setAttribute("aria-expanded","false"),c.classList.remove("search-content--animate"),setTimeout((function(){c.classList.remove("search-content--active");for(var e=0;e<s.length;e++){var t=s[e];!0!==t.getAttribute("aria-hidden")&&t.removeAttribute("aria-hidden")}c.setAttribute("aria-hidden","true")}),200),a.setAttribute("aria-expanded","false"),a.focus(),r.style.top="",window.scrollTo(0,y)}function L(n){var r=n.key;if("Escape"===r||"Esc"===r){for(var a=0,i=u.querySelectorAll("a");a<i.length;a++)i[a]===document.activeElement&&v.focus();if(t||e||v!==document.activeElement)b();else for(v.value="",m.classList.remove("search__count-wrapper--active"),g&&g.classList.remove("search__link-wrapper--active");u.firstChild;)u.removeChild(u.firstChild)}}a.addEventListener("click",(function(){t=!0,y=window.pageYOffset,n.classList.add("layer-opened"),r.style.top=-y+"px",a.setAttribute("aria-expanded","true"),i.setAttribute("aria-expanded","true");for(var e=0;e<s.length;e++)s[e].setAttribute("aria-hidden","true");c.classList.add("search-content--active"),c.setAttribute("aria-hidden","false"),c.addEventListener("click",(function(e){e.target===e.currentTarget&&b()})),setTimeout((function(){c.classList.add("search-content--animate"),v.focus(),v.addEventListener("propertychange",_),v.addEventListener("change",_),v.addEventListener("keyup",_),v.addEventListener("paste",_),v.addEventListener("input",_),v.addEventListener("focus",_)})),l.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),d.focus())})),d.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),l.focus())})),document.addEventListener("keydown",L)})),i.addEventListener("click",b)}();