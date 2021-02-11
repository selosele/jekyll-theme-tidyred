"use strict";!function(e){window.navigator.userAgent.toLowerCase().indexOf("trident")>-1&&(e.className+=" only-ie",document.getElementById("ie-alert").removeAttribute("aria-hidden")),navigator.userAgent.indexOf("MSIE")>=0&&(e.className+=" lte-ie10",document.getElementById("ie-version-txt").innerHTML="IE 브라우저 10 버전 이하를 <strong>지원하지 않습니다.</strong>")}(document.documentElement),function(){var e,t=document.documentElement,n=document.getElementById("side-menu"),r=document.getElementById("primary-nav"),a=document.querySelectorAll("#skip-links, #ie-alert, #masthead, #content, #mastfoot"),i=document.querySelector(".nav__menu-open"),l=r.querySelector(".menu__close"),o=r.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),c=o.length&&o[0],s=o.length&&o[o.length-1],d=r.querySelectorAll("a[href^='/category-list/#']");function u(){document.removeEventListener("keydown",h),l.blur(),l.setAttribute("aria-expanded","false"),i.setAttribute("aria-expanded","false"),i.focus(),n.setAttribute("aria-hidden","true"),r.classList.remove("menu__layer--animate"),t.classList.remove("layer-opened");for(var e=0;e<a.length;e++)a[e].removeAttribute("aria-hidden");setTimeout((function(){n.classList.remove("side-menu--active")}),400)}function h(e){var t=e.key;!n.classList.contains("side-menu--active")||"Escape"!==t&&"Esc"!==t||u()}i.addEventListener("click",(function(i){i.currentTarget.setAttribute("aria-expanded","true"),l.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),n.classList.add("side-menu--active"),t.classList.add("layer-opened"),setTimeout((function(){r.classList.add("menu__layer--animate")}));for(var d=0;d<a.length;d++)a[d].setAttribute("aria-hidden","true");for(d=0;d<o.length;d++)o[d].addEventListener("focus",(function(t){e=t.currentTarget}));e?e.focus():(c.focus(),c.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),s.focus())}))),s.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),c.focus())})),document.addEventListener("keydown",h)})),l.addEventListener("click",u),n.addEventListener("click",(function(e){e.target===e.currentTarget&&u()}));for(var v=0;v<d.length;v++)document.querySelector(".layout--categories")&&d[v].addEventListener("click",u)}(),window.addEventListener("scroll",(function(){if(document.querySelector(".layout--post")){var e=document.body.scrollHeight-window.innerHeight,t=window.pageYOffset/e*100;document.getElementById("scroll-indicator").style.width=t+"%"}})),function(){var e=document.getElementById("page-content");if(e){for(var t=e.querySelectorAll("h2:not(.toc__title), h3, h4, h5, h6"),n=0;n<t.length;n++){var r=t[n].id,a=t[n].textContent,i=document.createElement("a");r?i.href="#"+r:(t[n].id=a.replace(/ /g,"-"),i.href="#"+a.replace(/ /g,"-")),i.title=a.replace(/-/g," "),i.classList.add("page__header-link"),t[n].insertBefore(i,t[n].firstChild)}var l=e.querySelector(".toc-wrapper");if(l){var o=e.querySelectorAll(".page__header-link"),c=function(e,t){e.querySelector("[href='"+decodeURI(t.hash)+"']").scrollIntoView(!0)};for(n=0;n<o.length;n++)o[n].addEventListener("click",(function(){c(l,this)}));location.hash&&c(l,location)}}}(),function(){var e,t=document.querySelectorAll("abbr[title]");if(t.length)for(var n=0;n<t.length;n++)t[n].addEventListener("click",i),t[n].addEventListener("keydown",l);window.addEventListener("click",(function(e){for(var t=document.querySelectorAll(".abbr__tooltip"),n=0;n<t.length;n++)"ABBR"!==e.target.tagName&&!e.target.classList.contains("abbr__tooltip")&&t[n].classList.contains("abbr__tooltip--active")&&o(t[n])}));for(n=0;n<t.length;n++){var r=document.createElement("span"),a="tooltip"+n+"-"+encodeURI(t[n].title).replace(/ |%/g,"1");t[n].setAttribute("aria-describedby",a),t[n].setAttribute("tabindex","0"),r.hidden=!0,r.setAttribute("role","tooltip"),r.id=a,r.textContent=t[n].title,r.classList.add("abbr__tooltip"),t[n].appendChild(r)}function i(t){if(t.target===t.currentTarget||"Enter"===t.key){var n=(e=t.currentTarget).querySelector(".abbr__tooltip");n.classList.contains("abbr__tooltip--active")?o(n):(n.hidden=!1,n.setAttribute("tabindex","0"),n.classList.add("abbr__tooltip--active"))}}function l(e){"Enter"===e.key&&i(e)}function o(t){t.hidden=!0,t.setAttribute("tabindex","-1"),t.classList.remove("abbr__tooltip--active"),e.focus()}var c=document.querySelectorAll(".abbr__tooltip");if(c.length)for(n=0;n<c.length;n++)c[n].addEventListener("click",(function(e){o(e.currentTarget)}))}(),function(){var e=document.getElementById("page-content");if(e){var t=e.querySelectorAll("div.highlighter-rouge");Array.prototype.forEach.call(t,(function(e){var t=document.createElement("div");t.classList.add("highlight__util-wrapper"),e.insertBefore(t,e.firstChild);var n=e.className.replace(/language-|highlighter-rouge/g,""),r=e.querySelector(".highlight__util-wrapper");if("plaintext "!==n){var a=document.createElement("span");a.textContent=n,a.classList.add("highlight__language"),r.insertBefore(a,r.firstChild)}var i=document.createElement("button");i.textContent="복사",i.classList.add("highlight__copy-button"),r.appendChild(i);if(e.querySelector(".highlight__copy-button").addEventListener("click",(function(t){try{var n=t.currentTarget,r=n.parentElement.parentElement,a=e.querySelector(".lineno")?r.querySelector(".rouge-code > pre"):r.querySelector("pre.highlight"),i=document.createElement("textarea");i.setAttribute("readonly",!0),i.setAttribute("contenteditable",!0),i.classList.add("sr-only"),i.value=a.textContent,n.parentElement.appendChild(i),i.select();var l=document.createRange();l.selectNodeContents(i);var o=window.getSelection();o.removeAllRanges(),o.addRange(l),i.setSelectionRange(0,i.value.length),document.execCommand("copy"),n.textContent="복사됨"}catch(e){null,alert("복사에 실패했습니다.\n"+e)}finally{n.parentElement.removeChild(i),n.focus()}})),e.hasAttribute("data-line")&&e.querySelector(".lineno")){var l=e.querySelector(".lineno"),o=e.getAttribute("data-line").split("-")[0],c=e.getAttribute("data-line").split("-")[1];l===o||l.querySelector("span")||(l.innerHTML=l.innerHTML.replace(o,"<span id=code-line"+o+">"+o+"</span>")),l!==c&&(l.innerHTML=l.innerHTML.replace(c,"<span id=code-line"+c+">"+c+"</span>"));var s=document.createElement("span"),d=e.querySelectorAll("[id='code-line"+o+"']")[0],u=d.nextElementSibling,h=e.querySelector("pre.highlight");s.setAttribute("aria-hidden","true"),s.classList.add("highlight__bg"),h.insertBefore(s,h.firstChild);var v=function(t,n){var r=t.offsetTop;if(s.style.top=r+13+"px",c){var a=n.offsetTop-r+parseInt(getComputedStyle(n,null).lineHeight);e.querySelector(".highlight__bg").style.height=a+"px"}};v(d,u),window.addEventListener("resize",(function(){v(d,u)}))}}))}}(),function(){var e=function(e){var t=e.currentTarget,n=document.querySelector("[aria-labelledby="+t.id+"]");n.classList.contains("archive__list--active")?(n.classList.remove("archive__list--active"),n.hidden=!0,n.setAttribute("tabindex","-1"),t.classList.remove("archive__btn--active"),t.setAttribute("aria-expanded","false")):(n.classList.add("archive__list--active"),n.hidden=!1,n.setAttribute("tabindex","0"),t.classList.add("archive__btn--active"),t.setAttribute("aria-expanded","true"))},t=document.querySelectorAll(".archive__btn");if(t.length)for(var n=0;n<t.length;n++)t[n].addEventListener("click",e)}(),function(){var e,t,n=document.documentElement,r=document.querySelector(".nav__search-open"),a=document.querySelector(".search__close"),i=document.getElementById("search-content"),l=document.querySelectorAll("#skip-links, #masthead, #content, #mastfoot, #side-menu"),o=i.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])"),c=o.length&&o[0],s=o.length&&o[o.length-1],d=document.getElementById("search-results"),u=document.getElementById("search-title"),h=document.getElementById("search-input");function v(){var n=h.value;if(n){e=!1,t=!1,u.classList.contains("sr-only")||u.classList.add("sr-only");for(var r=d.querySelectorAll("a"),a=0;a<r.length;a++)r[a]===n||r[a].querySelector(".search__results__match")||(r[a].innerHTML=r[a].innerHTML.replace(n,'<span class="search__results__match">'+n+"</span>"))}else e=!0,t=!0,u.classList.remove("sr-only");d.querySelectorAll("li").length?h.setAttribute("aria-expanded","true"):h.setAttribute("aria-expanded","false")}function f(){document.removeEventListener("keydown",m),n.classList.remove("layer-opened"),a.setAttribute("aria-expanded","false"),i.classList.remove("search-content--animate"),setTimeout((function(){i.classList.remove("search-content--active");for(var e=0;e<l.length;e++)!0!==l[e].getAttribute("aria-hidden")&&l[e].removeAttribute("aria-hidden");i.setAttribute("aria-hidden","true")}),200),r.setAttribute("aria-expanded","false"),r.focus()}function m(n){var r=n.key;if("Escape"===r||"Esc"===r){for(var a=d.querySelectorAll("a"),i=0;i<a.length;i++)a[i]===document.activeElement&&h.focus();if(t||h!==document.activeElement)f();else if(e)f();else if(h!==document.activeElement)f();else for(h.value="";d.firstChild;)d.removeChild(d.firstChild)}}r.addEventListener("click",(function(e){var r=e.currentTarget;t=!0,r.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"),n.classList.add("layer-opened");for(var o=0;o<l.length;o++)l[o].setAttribute("aria-hidden","true");i.classList.add("search-content--active"),i.setAttribute("aria-hidden","false"),i.addEventListener("click",(function(e){e.target===e.currentTarget&&f()})),setTimeout((function(){i.classList.add("search-content--animate"),h.focus(),h.addEventListener("propertychange",v),h.addEventListener("change",v),h.addEventListener("keyup",v),h.addEventListener("paste",v),h.addEventListener("input",v),h.addEventListener("focus",v)})),c.addEventListener("keydown",(function(e){e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),s.focus())})),s.addEventListener("keydown",(function(e){e.shiftKey||"Tab"!==e.key||(e.preventDefault(),c.focus())})),document.addEventListener("keydown",m)})),a.addEventListener("click",f)}();