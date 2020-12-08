"use strict";!function(e){window.navigator.userAgent.toLowerCase().indexOf("trident")>-1&&(e.className+=" only-ie",document.getElementById("ie-alert").removeAttribute("aria-hidden")),navigator.userAgent.indexOf("MSIE")>=0&&(e.className+=" lte-ie10",document.getElementById("ie-version-txt").innerHTML="IE 브라우저 10 버전 이하를 <strong>지원하지 않습니다.</strong>")}(document.documentElement),function(){var e,t=document.documentElement,n=document.getElementById("side-menu"),r=document.getElementById("primary-nav"),a=document.querySelectorAll("#skip-links, #ie-alert, #masthead, #content, #mastfoot"),i=document.querySelector(".nav__menu-open"),l=r.querySelector(".menu__close"),o=r.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),c=o.length&&o[0],s=o.length&&o[o.length-1],d=r.querySelectorAll("a[href^='/category-list/#']");function u(){document.removeEventListener("keydown",h),l.blur(),l.setAttribute("aria-expanded","false"),i.setAttribute("aria-expanded","false"),i.focus(),n.setAttribute("aria-hidden","true"),r.classList.remove("menu__layer--animate"),t.classList.remove("layer-opened");for(var e=0;e<a.length;e++)a[e].removeAttribute("aria-hidden");setTimeout((function(){n.classList.remove("side-menu--active")}),400)}function h(e){var t=e.key;!n.classList.contains("side-menu--active")||"Escape"!==t&&"Esc"!==t||u()}i.addEventListener("click",(function(i){i.currentTarget.setAttribute("aria-expanded","true"),l.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),n.classList.add("side-menu--active"),t.classList.add("layer-opened"),setTimeout((function(){r.classList.add("menu__layer--animate")}));for(var d=0;d<a.length;d++)a[d].setAttribute("aria-hidden","true");for(d=0;d<o.length;d++)o[d].addEventListener("focus",(function(t){e=t.currentTarget}));e?e.focus():(c.focus(),c.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),s.focus())}))),s.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),c.focus())})),document.addEventListener("keydown",h)})),l.addEventListener("click",u),n.addEventListener("click",(function(e){e.target===e.currentTarget&&u()}));for(var f=0;f<d.length;f++)(document.querySelector(".layout--categories")||document.querySelector(".layout--tags"))&&d[f].addEventListener("click",u)}(),window.addEventListener("scroll",(function(){if(document.querySelector(".layout--post")){var e=document.body.scrollHeight-window.innerHeight,t=window.pageYOffset/e*100;document.getElementById("scroll-indicator").style.width=t+"%"}})),function(){var e=document.getElementById("page-content");if(e)for(var t=e.querySelectorAll("h2:not(.toc__title), h3, h4, h5, h6"),n=0;n<t.length;n++){var r=t[n].id,a=t[n].textContent,i=document.createElement("a");r?i.href="#"+r:(t[n].id=a.replace(/ /g,"-"),i.href="#"+a.replace(/ /g,"-")),i.title=a.replace(/-/g," "),i.classList.add("page__header-link"),t[n].insertBefore(i,t[n].firstChild)}}(),function(){var e=document.querySelectorAll("abbr[title]");if(e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("click",n),e[t].addEventListener("keydown",r);function n(e){if(e.target===e.currentTarget||"Enter"===e.key){var t=e.currentTarget.querySelector(".abbr__tooltip");t.classList.contains("abbr__tooltip--active")?(t.hidden=!0,t.setAttribute("tabindex","-1"),t.classList.remove("abbr__tooltip--active")):(t.hidden=!1,t.setAttribute("tabindex","0"),t.classList.add("abbr__tooltip--active"))}}function r(e){"Enter"===e.key&&n(e)}Array.prototype.slice.call(e).forEach((function(e){var t=document.createElement("span"),n="tooltip-"+encodeURI(e.title).replace(/ |%/g,"1");e.setAttribute("aria-describedby",n),e.setAttribute("tabindex","0"),t.hidden=!0,t.setAttribute("role","tooltip"),t.id=n,t.textContent=e.title,t.classList.add("abbr__tooltip"),e.appendChild(t)}))}(),function(){var e=document.getElementById("page-content");if(e){var t=e.querySelectorAll("div.highlighter-rouge");Array.prototype.slice.call(t).forEach((function(e){var t=document.createElement("div");t.classList.add("highlight__util-wrapper"),e.insertBefore(t,e.firstChild);var n=e.className.replace(/language-|highlighter-rouge/g,""),r=e.querySelector(".highlight__util-wrapper");if("plaintext "!==n){var a=document.createElement("span");a.textContent=n,a.classList.add("highlight__language"),r.insertBefore(a,r.firstChild)}var i=document.createElement("button");i.textContent="복사",i.classList.add("highlight__copy-button"),r.appendChild(i);if(e.querySelector(".highlight__copy-button").addEventListener("click",(function(t){try{var n=t.currentTarget.parentElement.parentElement,r=e.querySelector(".lineno")?n.querySelector(".rouge-code > pre"):n.querySelector("pre.highlight"),a=document.createElement("textarea");a.setAttribute("readonly",!0),a.setAttribute("contenteditable",!0),a.classList.add("sr-only--fixed"),a.value=r.textContent,t.currentTarget.parentElement.appendChild(a),a.select();var i=document.createRange();i.selectNodeContents(a);var l=window.getSelection();l.removeAllRanges(),l.addRange(i),a.setSelectionRange(0,a.value.length),document.execCommand("copy"),t.currentTarget.textContent="복사됨"}catch(e){null,alert("복사에 실패했습니다.\n"+e)}finally{t.currentTarget.parentElement.removeChild(a)}})),e.hasAttribute("data-line")&&e.querySelector(".lineno")){var l=e.querySelector(".lineno"),o=e.getAttribute("data-line").split("-")[0],c=e.getAttribute("data-line").split("-")[1];l===o||l.querySelector("span")||(l.innerHTML=l.innerHTML.replace(o,'<span id="code-line'+o+'">'+o+"</span>")),l!==c&&(l.innerHTML=l.innerHTML.replace(c,'<span id="code-line'+c+'">'+c+"</span>"));var s=document.createElement("span"),d=e.querySelectorAll("[id='code-line"+o+"']")[0],u=d.nextElementSibling,h=e.querySelector("pre.highlight");s.setAttribute("aria-hidden","true"),s.classList.add("highlight__bg"),h.insertBefore(s,h.firstChild);var f=function(t,n){var r=t.offsetTop;if(s.style.top=r+13+"px",c){var a=n.offsetTop-r+parseInt(getComputedStyle(n,null).lineHeight);e.querySelector(".highlight__bg").style.height=a+"px"}};f(d,u),window.addEventListener("resize",(function(){f(d,u)}))}}))}}(),function(){var e=document.getElementById("page-share");if(e)for(var t=e.querySelectorAll("a"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(e){e.preventDefault(),window.open(e.currentTarget.href,"window","left=20, top=20, width=500, height=500, toolbar=1, resizable=0")}))}(),function(){var e=function(e){var t=e.currentTarget,n=document.querySelector("[aria-labelledby='"+t.id+"']");n.classList.contains("archive__list--active")?(n.classList.remove("archive__list--active"),n.setAttribute("hidden",!0),n.setAttribute("tabindex","-1"),t.setAttribute("aria-expanded","false")):(n.classList.add("archive__list--active"),n.setAttribute("hidden",!1),n.setAttribute("tabindex","0"),t.setAttribute("aria-expanded","true"))},t=document.querySelectorAll(".archive__btn");if(t.length)for(var n=0;n<t.length;n++)t[n].addEventListener("click",e)}(),document.documentElement.classList.contains("only-ie","lte-10")||window.addEventListener("scroll",(function(){var e=document.getElementById("page-content"),t=document.getElementById("toc");if(e&&t){var n=t.querySelectorAll("a"),r=window.pageYOffset;Array.prototype.slice.call(n).forEach((function(e){var t=document.querySelector(decodeURI(e.hash));t.offsetTop<=r+1&&t.offsetTop+t.offsetHeight>r?e.parentElement.classList.add("toc--active"):e.parentElement.classList.remove("toc--active")}))}})),function(){var e,t,n=document.documentElement,r=document.querySelector(".nav__search-open"),a=document.querySelector(".search__close"),i=document.getElementById("search-content"),l=document.querySelectorAll("#skip-links, #masthead, #content, #mastfoot, #side-menu"),o=i.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),c=o.length&&o[0],s=o.length&&o[o.length-1],d=document.getElementById("search-results"),u=document.getElementById("search-title"),h=document.getElementById("search-input");function f(){var n=h.value;if(n){e=!1,t=!1,u.classList.contains("sr-only")||u.classList.add("sr-only");for(var r=d.querySelectorAll("a"),a=0;a<r.length;a++)r[a]===n||r[a].querySelector(".search__results__match")||(r[a].innerHTML=r[a].innerHTML.replace(n,'<span class="search__results__match">'+n+"</span>"))}else e=!0,t=!0,u.classList.remove("sr-only");d.querySelectorAll("li").length?h.setAttribute("aria-expanded","true"):h.setAttribute("aria-expanded","false")}function m(){document.removeEventListener("keydown",v),n.classList.remove("layer-opened"),a.setAttribute("aria-expanded","false"),i.classList.remove("search-content--animate"),setTimeout((function(){i.classList.remove("search-content--active");for(var e=0;e<l.length;e++)!0!==l[e].getAttribute("aria-hidden")&&l[e].removeAttribute("aria-hidden");i.setAttribute("aria-hidden","true")}),200),r.setAttribute("aria-expanded","false"),r.focus()}function v(n){var r=n.key;if("Escape"===r||"Esc"===r){for(var a=d.querySelectorAll("a"),i=0;i<a.length;i++)a[i]===document.activeElement&&h.focus();if(t||h!==document.activeElement)m();else if(e)m();else if(h!==document.activeElement)m();else for(h.value="";d.firstChild;)d.removeChild(d.firstChild)}}r.addEventListener("click",(function(e){var r=e.currentTarget;t=!0,r.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"),n.classList.add("layer-opened");for(var o=0;o<l.length;o++)l[o].setAttribute("aria-hidden","true");i.classList.add("search-content--active"),i.setAttribute("aria-hidden","false"),i.addEventListener("click",(function(e){e.target===e.currentTarget&&m()})),setTimeout((function(){i.classList.add("search-content--animate"),h.focus(),h.addEventListener("propertychange",f),h.addEventListener("change",f),h.addEventListener("keyup",f),h.addEventListener("paste",f),h.addEventListener("input",f),h.addEventListener("focus",f)})),c.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),s.focus())})),s.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),c.focus())})),document.addEventListener("keydown",v)})),a.addEventListener("click",m)}();