---
layout: post
comments: true
title: "블로그 사용안내 - 코드 하이라이트"
excerpt: ""
header:
  overlay_image: /assets/images/thumb/blog_thumb02.png
  overlay_filter: 0.5
date: 2020-06-23 23:06
toc: false
categories:
    - life
    - javascript
tags:
    - jekyll
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
excerpt: ""
header:
  overlay_image: /assets/images/thumb/blog_thumb02.png
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

<pre class="pre--example">
  {:.has--label}
</pre>

{:.has--label}
```html
<p>paragraph</p> <!-- title="html 코드" -->
```