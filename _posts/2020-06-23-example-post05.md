---
layout: post
comments: true
title: "블로그 사용안내 - 코드 하이라이트"
subtitle:
header:
  overlay_image: /assets/images/thumb/blog_thumb02.jpg
  overlay_filter: 0.5
  image_link: https://pixabay.com/ko/photos/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%84%9C%EC%9E%AC%EC%9D%91-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%9B%B9-793047/
  image_author: FirmBee
date: 2020-06-23 23:06
toc: false
categories:
    - 블로그 사용안내
tags:
    - 코드 하이라이트
---

## HTML

```html
<p>paragraph</p>
```

## CSS

```css
p {
  color: red;
}
```

## SCSS
```scss
p {
  color: red;

  &.blue {
    color: blue;
  }
}
```

## Javascript
```javascript
var foo = document.getElementById("foo");
```

## YAML
```yaml
---
layout: post
comments: true
title: "블로그 사용안내 - 코드 하이라이트"
summary:
header:
  overlay_image: /assets/images/thumb/blog_thumb02.jpg
  overlay_filter: 0.5
date: 2020-06-23 23:06
toc: false
categories:
    - life
tags:
    - jekyll
---
```

## 코드 하이라이트(pre 요소)에 title 붙여주기

<pre class="codebox" title="markdown 코드">
  {:.has-label}
</pre>

{:.has-label}
```html
<p>paragraph</p> <!-- title="html 코드" -->
```

## line 강조

<pre class="codebox" title="markdown 코드">
  {:data-line="5"}
</pre>

{:data-line="5"}
```scss
p {
  color: red;

  &.blue {
    color: blue;
  }
}
```
<pre class="codebox" title="markdown 코드">
  {:data-line="4-6"}
</pre>

{:data-line="4-6"}
```scss
p {
  color: red;

  &.blue {
    color: blue;
  }
}
```