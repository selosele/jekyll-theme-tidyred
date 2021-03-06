---
layout: post
comments: true
title: "블로그 사용안내 - 포스트 대표 이미지 설정"
subtitle:
header:
  overlay_image: /assets/images/thumb/blog_thumb03.jpg
  overlay_filter: 0.5
  image_position: 50% 21%
  image_link: https://pixabay.com/ko/photos/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%B8%94%EB%A1%9C%EA%B9%85-%EC%9B%8C%EB%93%9C-%ED%94%84%EB%A0%88%EC%8A%A4-684748/
  image_author: Sophieja23
date: 2020-06-24 20:54
toc: false
categories:
    - 블로그 사용안내
tags:
    - 포스트 대표 이미지 설정
post_dropcap: false
---
포스트 대표 이미지를 설정할 수 있다.

```yaml
---
header:
  overlay_image: /assets/images/thumb/blog_thumb03.jpg
  overlay_filter: 0.5
  image_alt: # 이미지의 alt 속성값
  image_position: 50% 21% # x축, y축에 대한 값을 별도로 지정하고싶을 경우 아래와 같이 x, y로 분리
  # image_position-x: 50%
  # image_position-y: 21%
  image_link: https://pixabay.com/ko/photos/%EC%84%A3%EB%8B%AC-%EA%B7%B8%EB%AF%90-%EC%83%88-%ED%95%B4%EC%9D%98-%EC%9D%B4%EB%B8%8C-5829158/ # 이미지 출처
  image_author: hkama # 이미지 저자
---
```

1. overlay_image 변수에 이미지 경로를 입력.
2. overlay_filter 변수에 0.1 ~ 0.9까지 값을 입력, 반투명 검정색 필터를 씌워서 명암을 조절.
3. image_position 변수에 background-position 값을 입력해서 이미지의 위치값을 조절(기본값 50% 50%).

결과

```html
<div style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/thumb/blog_thumb03.jpg'); background-position: 50% 21%;">
```