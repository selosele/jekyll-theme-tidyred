---
layout: post
comments: true
title: "예시 포스트 - 포스트 대표 이미지 필터"
excerpt: ""
header:
  overlay_image: /assets/images/thumb/blog_thumb03.png
  overlay_filter: 0.5
date: 2020-06-24 20:54
toc: false
categories:
    - life
tags:
    - jekyll
---
포스트 대표 이미지에 반투명 검정색 필터를 씌워서 명암을 조절해줄 수 있다. 0.1 ~ 0.9 까지 사용 가능

```yaml
---
header:
  overlay_filter: 0.5
---
```

결과
```css
/* inline styles로 적용됨 */
.hero-wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/images/thumb/blog_thumb03.png);
}
```