---
layout: post
comments: true
title: "블로그 사용안내 - 테마 스타일 선택"
excerpt: ""
header:
  overlay_image: /assets/images/thumb/blog_thumb01.jpg
  overlay_filter: 0.5
date: 2020-07-21 00:32
toc: false
categories:
    - life
tags:
    - jekyll
---
테마 스타일을 선택할 수 있다. config.yml 파일에서 theme_type 변수를 수정해주면 됨.

{:.has--label}
```yaml
theme_type: type1
```

기본으로 적용된 type1외에 선택할 수 있는 스타일은 type2가 있다.

{% include image.html url='/assets/images/post/example-post08_img01.jpg' description='테마 스타일 type1' alt='' %}
{% include image.html url='/assets/images/post/example-post08_img02.jpg' description='테마 스타일 type2' alt='' %}