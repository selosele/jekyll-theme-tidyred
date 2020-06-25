---
layout: post
comments: true
title: "예시 포스트 - 스타일가이드"
excerpt: ""
header:
  overlay_image: /assets/images/thumb/blog_thumb02.png
  overlay_filter: 0.5
date: 2020-06-23 22:13
categories:
    - life
    - html
tags:
    - jekyll
    - html
---
## 제목 h2

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae incidunt repellat fuga voluptatem adipisci eaque, a sequi molestiae esse ex enim eveniet ullam dolore, similique minus aspernatur. Ea, autem?

### 제목 h3

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae incidunt repellat fuga voluptatem adipisci eaque, a sequi molestiae esse ex enim eveniet ullam dolore, similique minus aspernatur. Ea, autem?

#### 제목 h4

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae incidunt repellat fuga voluptatem adipisci eaque, a sequi molestiae esse ex enim eveniet ullam dolore, similique minus aspernatur. Ea, autem?

##### 제목 h5

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae incidunt repellat fuga voluptatem adipisci eaque, a sequi molestiae esse ex enim eveniet ullam dolore, similique minus aspernatur. Ea, autem?

###### 제목 h6

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, recusandae incidunt repellat fuga voluptatem adipisci eaque, a sequi molestiae esse ex enim eveniet ullam dolore, similique minus aspernatur. Ea, autem?

## 텍스트 링크/색상/강조/약자 스타일

<pre class="pre--example">
[내용](url){:target="_blank"}
</pre>

[내용](https://tidyred.github.io/){:target="_blank"}
(target 속성 필요없을 시 생략해도 무방)

<pre class="pre--example">{:.color--red}</pre>

{:.color--red}
Lorem ipsum

<pre class="pre--example">{:.color--green}</pre>

{:.color--green}
Lorem ipsum

<pre class="pre--example">{:.txt--attention}</pre>

{:.txt--attention}
txt--attention

<pre class="pre--example">{:.txt--attention2}</pre>

{:.txt--attention2}
txt--attention2

<pre class="pre--example">&lt;abbr&gt;abbr&lt;/abbr&gt;</pre>

<abbr title="abbreviation" aria-describedby="tooltip-of-this-title">abbr</abbr>

## 인용문

<pre class="pre--example">
  > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum sapiente perspiciatis, facilis libero rerum, delectus veritatis quia illum explicabo, dolores magnam quos fuga modi ipsa dolore consequatur amet voluptatem!
  >
  > &lt;cite&gt;&lt;a href="#"&gt;출처&lt;/a&gt;&lt;/cite&gt;
</pre>

> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ipsum sapiente perspiciatis, facilis libero rerum, delectus veritatis quia illum explicabo, dolores magnam quos fuga modi ipsa dolore consequatur amet voluptatem!
>
> <cite><a href="#">출처</a></cite>

## 버튼

<pre class="pre--example">[내용](url){:.btn}</pre>

[내용](https://tidyred.github.io/){:.btn}