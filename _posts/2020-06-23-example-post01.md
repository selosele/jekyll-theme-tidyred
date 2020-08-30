---
layout: post
comments: true
title: "블로그 사용안내 - YAML"
excerpt: "YAML 작성법에 대한 설명"
header:
  overlay_image: /assets/images/thumb/blog_thumb01.jpg
  overlay_filter: 0.5
  image_link: https://pixabay.com/ko/photos/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%9B%B9-%EA%B8%B0%EC%88%A0-2355684/
  image_author: Wokandapix
date: 2020-06-23 22:12
toc: false
categories:
    - 블로그 사용안내
tags:
    - YAML
---

{:.has-label}
```yaml
---
layout: post # 레이아웃 타입 : post로 써주기
comments: true # 댓글 플러그인 활성화: true / 비활성화: false
title: "블로그 사용안내 - YAML" # 포스트 타이틀
excerpt: "YAML 작성법에 대한 설명" # 포스트를 요약해줄 수 있는 짧은 소제목. 없을 경우 "" 으로 쓰기
header:
  overlay_image: /assets/images/thumb/blog_thumb01.jpg # 포스트 대표 이미지. 없을 경우 "" 따옴표 쓰지 말고 비워두면 기본으로 설정된 이미지 표출됨
  overlay_filter: 0.5 # 포스트 대표 이미지 반투명 검정색 필터. 0.1 ~ 0.9
date: 2020-06-23 22:12 # 포스트 작성 날짜
toc: false # 목차 활성화: true / 비활성화: false
categories:
    - life # 카테고리 (줄바꿈해서 여러개 작성 가능)
tags:
    - jekyll # 태그 (줄바꿈해서 여러개 작성 가능)
---
````