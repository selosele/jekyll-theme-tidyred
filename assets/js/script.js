"use strict";window.navigator.userAgent.toLowerCase().indexOf("trident")>-1&&(document.documentElement.className+=" only-ie",document.getElementById("ie-alert").removeAttribute("aria-hidden")),navigator.userAgent.indexOf("MSIE")>=0&&(document.documentElement.className+=" lte-ie10",document.getElementById("ie-version-txt").innerHTML="IE 브라우저 10 버전 이하를 <strong>지원하지 않습니다.</strong>"),window.addEventListener("scroll",(function(){if(document.querySelector(".layout--post")){var e=document.body.scrollHeight-window.innerHeight,t=window.pageYOffset/e*100;document.getElementById("scroll-indicator").style.width=t+"%"}})),function(){var e=document.documentElement,t=document.querySelector(".nav__darkmode-toggle");t.addEventListener("click",(function(t){e.classList.toggle("is-darkmode"),t.currentTarget.classList.toggle("nav__darkmode-toggle--active"),e.classList.contains("is-darkmode")?localStorage.setItem("darkmode","Y"):localStorage.setItem("darkmode","N")})),document.addEventListener("DOMContentLoaded",(function(){"Y"===localStorage.getItem("darkmode")&&(e.classList.add("is-darkmode"),t.classList.add("nav__darkmode-toggle--active"))}))}(),function(){var e=document.documentElement,t=document.body,n=document.getElementById("side-menu"),r=document.getElementById("primary-nav"),a=document.querySelectorAll("#skip-links, #ie-alert, #masthead, #content, #mastfoot"),i=document.querySelector(".nav__menu-open"),c=r.querySelector(".menu__close"),o=r.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),l=o.length&&o[0],s=o.length&&o[o.length-1],d=r.querySelectorAll("a[href^='/category-list/#']"),u=0;function h(){document.removeEventListener("keydown",v),c.blur(),c.setAttribute("aria-expanded","false"),i.setAttribute("aria-expanded","false"),i.focus(),n.classList.remove("side-menu--active"),n.setAttribute("aria-hidden","true"),e.classList.remove("layer-opened");for(var r=0;r<a.length;r++)a[r].removeAttribute("aria-hidden");t.style.top="",window.scrollTo(0,u)}function v(e){var t=e.key;!n.classList.contains("side-menu--active")||"Escape"!==t&&"Esc"!==t||h()}i.addEventListener("click",(function(r){u=window.pageYOffset,e.classList.add("layer-opened"),t.style.top=-u+"px",r.currentTarget.setAttribute("aria-expanded","true"),c.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),n.classList.add("side-menu--active");for(var i=0;i<a.length;i++)a[i].setAttribute("aria-hidden","true");l.focus(),l.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),s.focus())})),s.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),l.focus())})),document.addEventListener("keydown",v)})),c.addEventListener("click",h),n.addEventListener("click",(function(e){e.target===e.currentTarget&&h()}));for(var m=0;m<d.length;m++)document.querySelector(".layout--categories")&&d[m].addEventListener("click",h)}(),function(){var e=document.querySelector(".page__content");if(e){for(var t=e.querySelectorAll("h2, h3, h4, h5, h6"),n=0;n<t.length;n++){var r=t[n],a=r.id,i=r.textContent,c=document.createElement("a");a?c.href="#"+a:(r.id=i.replace(/ /g,"-"),c.href="#"+i.replace(/ /g,"-")),c.title=i.replace(/-/g," "),c.classList.add("page__header-link"),r.insertBefore(c,r.firstChild)}var o=document.querySelector(".toc-wrapper");if(o){var l=e.querySelectorAll(".page__header-link"),s=function(e,t){e.querySelector("[href='"+decodeURI(t.hash)+"']").scrollIntoView(!0)};for(n=0;n<l.length;n++)l[n].addEventListener("click",(function(){s(o,this)}));location.hash&&s(o,location)}}}(),function(){var e,t=document.querySelectorAll("abbr[title]");if(t.length)for(var n=0;n<t.length;n++){(r=t[n]).addEventListener("click",o),r.addEventListener("keydown",l)}document.addEventListener("click",d),document.addEventListener("touchstart",d);for(n=0;n<t.length;n++){var r=t[n],a=document.createElement("span"),i="tooltip"+n+"-"+encodeURI(r.title).replace(/ /g,"0").replace(/%/g,"1");r.setAttribute("aria-describedby",i),r.setAttribute("tabindex",0),a.hidden=!0,a.setAttribute("role","tooltip"),a.id=i,a.textContent=r.title,a.classList.add("abbr__tooltip"),r.appendChild(a)}var c=document.querySelectorAll(".abbr__tooltip");function o(t){if(t.target===t.currentTarget||"Enter"===t.key){var n=(e=t.currentTarget).querySelector(".abbr__tooltip");n.classList.contains("abbr__tooltip--active")?s(n):(n.hidden=!1,n.setAttribute("tabindex",0),n.classList.add("abbr__tooltip--active"))}}function l(e){"Enter"===e.key&&o(e)}function s(t){t.hidden=!0,t.setAttribute("tabindex",-1),t.classList.remove("abbr__tooltip--active"),e.focus()}function d(e){for(var t=0;t<c.length;t++){var n=c[t];"ABBR"!==e.target.tagName&&!e.target.classList.contains("abbr__tooltip")&&n.classList.contains("abbr__tooltip--active")&&s(n)}}if(c.length)for(n=0;n<c.length;n++)c[n].addEventListener("click",(function(){s(this)}))}(),function(){var e=document.querySelector(".page__content");if(e){var t=e.querySelectorAll("div.highlighter-rouge");Array.prototype.forEach.call(t,(function(e){var t=document.createElement("div");t.classList.add("highlight__util-wrapper"),e.insertBefore(t,e.firstChild);var n=e.className.replace(/language-|highlighter-rouge/g,""),r=e.querySelector(".highlight__util-wrapper");if("plaintext "!==n){var a=document.createElement("span");a.textContent=n,a.classList.add("highlight__language"),r.insertBefore(a,r.firstChild)}var i=document.createElement("button");if(i.textContent="복사",i.classList.add("highlight__copy-button"),r.appendChild(i),e.querySelector(".highlight__copy-button").addEventListener("click",(function(t){try{var n=t.currentTarget,r=n.parentElement.parentElement,a=e.querySelector(".lineno")?r.querySelector(".rouge-code > pre"):r.querySelector("pre.highlight"),i=document.createElement("textarea");i.setAttribute("readonly",!0),i.setAttribute("contenteditable",!0),i.classList.add("sr-only"),i.value=a.textContent,n.parentElement.appendChild(i),i.select();var c=document.createRange();c.selectNodeContents(i);var o=window.getSelection();o.removeAllRanges(),o.addRange(c),i.setSelectionRange(0,i.value.length),document.execCommand("copy"),n.textContent="복사됨"}catch(e){alert("복사에 실패했습니다.")}finally{n.parentElement.removeChild(i),n.focus()}})),e.hasAttribute("data-line")&&e.querySelector(".lineno")){var c=e.querySelector(".lineno"),o=e.getAttribute("data-line").split("-")[0],l=e.getAttribute("data-line").split("-")[1];c===o||c.querySelector("span")||(c.innerHTML=c.innerHTML.replace(o,"<span id=code-line"+o+">"+o+"</span>")),c!==l&&(c.innerHTML=c.innerHTML.replace(l,"<span id=code-line"+l+">"+l+"</span>"));var s=document.createElement("span"),d=e.querySelectorAll("[id='code-line"+o+"']")[0],u=d.nextElementSibling,h=e.querySelector("pre.highlight");s.setAttribute("aria-hidden","true"),s.classList.add("highlight__bg"),h.insertBefore(s,h.firstChild);var v=function(t,n){var r=t.offsetTop;if(s.style.top=r+13+"px",l){var a=n.offsetTop-r+parseInt(getComputedStyle(n,null).lineHeight);e.querySelector(".highlight__bg").style.height=a+"px"}};v(d,u),window.addEventListener("resize",(function(){v(d,u)}))}}))}}(),function(){var e=function(e){var t=e.currentTarget,n=document.querySelector("[aria-labelledby="+t.id+"]");n.classList.contains("archive__list--active")?(n.classList.remove("archive__list--active"),n.hidden=!0,n.setAttribute("tabindex",-1),t.classList.remove("archive__btn--active"),t.setAttribute("aria-expanded","false")):(n.classList.add("archive__list--active"),n.hidden=!1,n.setAttribute("tabindex",0),t.classList.add("archive__btn--active"),t.setAttribute("aria-expanded","true"))},t=document.querySelectorAll(".archive__btn");if(t.length)for(var n=0;n<t.length;n++)t[n].addEventListener("click",e)}(),function(){var e=document.getElementById("search-content");if(e){var t,n,r=document.documentElement,a=document.body,i=document.querySelector(".nav__search-open"),c=document.querySelector(".search__close"),o=document.querySelectorAll("#skip-links, #masthead, #content, #mastfoot, #side-menu"),l=e.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),s=l.length&&l[0],d=l.length&&l[l.length-1],u=document.getElementById("search-results"),h=document.getElementById("search-title"),v=document.getElementById("search-input"),m=e.querySelector(".search__count-wrapper"),g=m.querySelector(".search__word"),p=m.querySelector(".search__count"),f=document.querySelector(".search__link-wrapper"),y=0;i.addEventListener("click",(function(){n=!0,y=window.pageYOffset,r.classList.add("layer-opened"),a.style.top=-y+"px",i.setAttribute("aria-expanded","true"),c.setAttribute("aria-expanded","true");for(var t=0;t<o.length;t++)o[t].setAttribute("aria-hidden","true");e.classList.add("search-content--active"),e.setAttribute("aria-hidden","false"),e.addEventListener("click",(function(e){e.target===e.currentTarget&&b()})),setTimeout((function(){v.focus(),v.addEventListener("keyup",_),v.addEventListener("input",_),v.addEventListener("focus",_)})),s.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),d.focus())})),d.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),s.focus())})),document.addEventListener("keydown",L)})),c.addEventListener("click",b)}function _(){var e=v.value;if(e){t=!1,n=!1,h.classList.contains("sr-only")||h.classList.add("sr-only"),m.classList.contains("search__count-wrapper--active")||m.classList.add("search__count-wrapper--active"),f&&!f.classList.contains("search__link-wrapper--active")&&f.classList.add("search__link-wrapper--active");for(var r=0,a=u.querySelectorAll("a");r<a.length;r++){var i=a[r],c=i.innerHTML.match(new RegExp(e.replace(/(?=[()? [])/g,"\\"),"i"));i===c||i.querySelector(".search__results__match")||(i.innerHTML=i.innerHTML.replace(new RegExp(c,"g"),'<span class="search__results__match">'+c+"</span>"))}}else t=!0,n=!0,h.classList.remove("sr-only"),f&&f.classList.remove("search__link-wrapper--active");var o=u.querySelectorAll(".search__results__item");o.length?(v.setAttribute("aria-expanded","true"),g.textContent='"'+e+'"',p.textContent=o.length):(v.setAttribute("aria-expanded","false"),m.classList.remove("search__count-wrapper--active"))}function b(){document.removeEventListener("keydown",L),r.classList.remove("layer-opened"),e.classList.remove("search-content--active"),e.setAttribute("aria-hidden","true"),c.setAttribute("aria-expanded","false");for(var t=0;t<o.length;t++){var n=o[t];!0!==n.getAttribute("aria-hidden")&&n.removeAttribute("aria-hidden")}i.setAttribute("aria-expanded","false"),i.focus(),a.style.top="",window.scrollTo(0,y)}function L(e){var r=e.key;if("Escape"===r||"Esc"===r){for(var a=0,i=u.querySelectorAll("a");a<i.length;a++)i[a]===document.activeElement&&v.focus();if(n||t||v!==document.activeElement)b();else for(v.value="",m.classList.remove("search__count-wrapper--active"),f&&f.classList.remove("search__link-wrapper--active");u.firstChild;)u.removeChild(u.firstChild)}}}();