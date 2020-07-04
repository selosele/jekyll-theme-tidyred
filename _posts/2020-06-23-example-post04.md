---
layout: post
comments: true
title: "예시 포스트 - 이미지"
excerpt: ""
header:
  overlay_image: /assets/images/thumb/blog_thumb01.png
  overlay_filter: 0.5
date: 2020-06-23 22:46
toc: false
categories:
    - life
tags:
    - jekyll
---
## figure > figcaption 구조

<pre class="pre--example">
  {% raw %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' width='300' %}
  {% endraw %}
</pre>

{% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' width='300' %}

### 왼쪽/오른쪽으로 띄우기

<pre class="pre--example">
  {% raw %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='왼쪽으로 띄우려면 align="left"' alt='' width='300' align='left' %}
  {% endraw %}
</pre>

{% include image.html url='/assets/images/mhead_bg.jpg' description='왼쪽으로 띄우려면 align="left"' alt='' width='300' align='left' %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

<pre class="pre--example">
  {% raw %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='오른쪽으로 띄우려면 align="right"' alt='' width='300' align='right' %}
  {% endraw %}
</pre>

{% include image.html url='/assets/images/mhead_bg.jpg' description='오른쪽으로 띄우려면 align="right"' alt='' width='300' align='right' %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

## p + em 구조

<pre class="pre--example">
  ![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
  *너비값(width)은 생략가능*
</pre>

![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
*너비값(width)은 생략가능*

### 왼쪽/오른쪽으로 띄우기

<pre class="pre--example">
  {:.float--left}
  ![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
  *왼쪽으로 띄우려면 .float--left 클래스 사용*
</pre>

{:.float--left}
![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
*왼쪽으로 띄우려면 .float--left 클래스 사용*

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

<pre class="pre--example">
  {:.float--right}
  ![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
  *오른쪽으로 띄우려면 .float--right 클래스 사용*
</pre>

{:.float--right}
![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
*오른쪽으로 띄우려면 .float--right 클래스 사용*

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

## 다수 이미지

<pre class="pre--example">
  {:.page__image-container}
  ![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
  ![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
  ![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
  ![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
  ![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
</pre>

{:.page__image-container}
![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}
![alt text](/assets/images/mhead_bg.jpg){:style="max-height: 400px"}

이미지에 em, figcaption 같은 설명 마크업 사용 불가 및 높이값은 inline styles로 정의.