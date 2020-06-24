---
layout: post
comments: true
title: "예시 포스트 - 섬네일 이미지 & 포스트 대표 이미지 비활성화"
excerpt: ""
header:
  overlay_image: 
  overlay_filter: 0.5
date: 2020-06-24 20:46
toc: false
categories:
    - life
    - javascript
tags:
    - jekyll
---
섬네일 이미지와 포스트 대표 이미지를 사용하지 않으려면 header.overlay_image 변수값을 비워두기. 기본 이미지가 표출된다.

```yaml
---
header:
  overlay_image:
---
```