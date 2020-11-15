---
layout: post
comments: true
title: "블로그 사용안내 - 댓글 플러그인 선택"
subtitle:
header:
  overlay_image: /assets/images/thumb/blog_thumb02.jpg
  overlay_filter: 0.5
  image_link: https://pixabay.com/ko/photos/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%84%9C%EC%9E%AC%EC%9D%91-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%9B%B9-793047/
  image_author: FirmBee
date: 2020-08-09 14:08
toc: false
categories:
    - 블로그 사용안내
tags:
    - 댓글 플러그인 선택
---
포스트 최하단에 삽입되는 댓글 플러그인을 선택할 수 있다. config.yml 파일에서 comments.provider 변수를 수정해주면 됨. disqus, LiveRe 중 사용하려는 댓글 플러그인 계정 생성이 선행되어야 한다. 플러그인 삽입법은 각 플러그인에서 안내해주므로 설명 생략.

{:.has-label}
```yaml
comments:
  provider : # disqus, livere 중 선택
```

disqus 선택 시 disqus 계정 shortname을 기입해주기.

{:.has-label}
```yaml
comments:
  provider : disqus
  disqus:
    shortname : # 예) Tidy red
```

설정 완료 후 포스트 YAML의 comments 변수를 true로 설정해주면 댓글 플러그인이 삽입된다.

{:.has-label}
```yaml
comments: true # 댓글 플러그인 비활성화하려면 false로 설정
```