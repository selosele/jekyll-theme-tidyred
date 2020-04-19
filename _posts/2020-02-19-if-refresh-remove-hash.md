---
comments: true
title: "페이지 새로고침 시 URL의 hash 제거하기"
header:
  overlay_image: /assets/images/thumb/refresh_thumb01.png
  overlay_filter: 0.3
date: 2020-02-19 23:34
categories:
    - javascript
tags:
    - javascript
    - jquery
---
URL에 anchor 클릭으로 인한 hash가 포함되어 있을 때 페이지 새로고침 시, hash가 남아 있어야/없어져야 하는지 고민에 빠졌음. 개인적으로 결론을 어떻게 내리든, 공부를 위해서 새로고침 시 hash 제거 스크립트를 짜보기로~!

{:.h2}
## 새로고침 키를 눌렀을 때
```javascript
$(window).keydown(function(event) {
    var k = event.keyCode || event.which;
    if (((k === 116) || (event.ctrlKey && k === 82) || (event.ctrlKey && event.shiftKey && k === 82)) && window.location.hash) {
        // F5키/Ctrl키 + R키/Ctrl키 + Shift키 + R키
        var korean = window.location.hash.indexOf(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/); // hash text 한글 감지
        history.pushState("", document.title, window.location.pathname, korean);
    }
});
```
hash text에 한글이 포함되어 있으면 에러를 뱉으므로 반드시 한글 감지를 해주어야 한다.

정상 작동하나, 조건문 속에 모든 새로고침 키를 기입해주어야 한다는 점에서 봤을 때 비효율적인 코드라는 생각이 들었다.

{:.h2}
## 페이지가 로드되었을 때
```javascript
function refreshRemoveHash() {
    if (window.location.hash) {
        var korean = window.location.hash.indexOf(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/); // hash text 한글 감지
        history.pushState("", document.title, window.location.pathname, korean);
    }
}
refreshRemoveHash();
```
그래서 &ldquo;페이지가 로드되었을 때[^1]&rdquo; 실행되는 함수를 만들었다. jQuery 코드는 대부분 모든 DOM이 생성되었을 때, 즉 <code>$(document).ready</code> 함수 내부에 작성하는 방식이 사용되므로 <code>if (document.readyState === "complete")</code>[^2] 이런거 안 써도 됨.

근데 한글 감지가 안되서 속이 터지는 중... 어디서부터 틀린 걸까........

[^1]: [1] 엄연히 말하면 모든 DOM이 생성되었을 때. 어느 정도 쉬운 말로 풀어쓰기 위한 목적이다.
[^2]: [2] 문서가 로드되었을 때.