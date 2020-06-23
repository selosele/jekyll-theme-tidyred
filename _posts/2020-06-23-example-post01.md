---
layout: post
comments: true
title: "예시 포스트 - YAML"
excerpt: "YAML 작성법에 대한 설명"
header:
  overlay_image: /assets/images/thumb/blog_thumb01.png
  overlay_filter: 0.5
date: 2020-06-23 22:12
toc: false
categories:
    - life
tags:
    - jekyll
---

```yaml
---
layout: post # 레이아웃 타입 : post로 써주기
comments: true # 댓글 플러그인 활성화: true / 비활성화: false
title: "예시 포스트 - YAML" # 포스트 타이틀
excerpt: "YAML 작성법에 대한 설명" # 포스트를 요약해줄 수 있는 짧은 소제목. 없을 경우 "" 으로 쓰기
header:
  overlay_image: /assets/images/thumb/blog_thumb01.png # 포스트 대표 이미지. 없을 경우 "" 따옴표 쓰지 말고 비워두면 기본으로 설정된 이미지 표출됨
  overlay_filter: 0.5 # 포스트 대표 이미지 반투명 검정색 필터. 0.1 ~ 0.9
date: 2020-06-23 22:12 # 포스트 작성 날짜
toc: false # 목차 활성화: true / 비활성화: false
categories:
    - life # 카테고리 (여러개 작성 가능)
tags:
    - jekyll # 태그 (여러개 작성 가능)
---
````