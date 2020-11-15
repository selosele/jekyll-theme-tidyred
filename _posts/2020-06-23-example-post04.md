---
layout: post
comments: true
title: "블로그 사용안내 - 이미지"
subtitle:
header:
  overlay_image: /assets/images/thumb/blog_thumb01.jpg
  overlay_filter: 0.5
  image_link: https://pixabay.com/ko/photos/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%9B%B9-%EA%B8%B0%EC%88%A0-2355684/
  image_author: Wokandapix
date: 2020-06-23 22:46
toc: false
categories:
    - 블로그 사용안내
tags:
    - 이미지
---
## figure > figcaption 구조

<pre class="codebox" title="html 코드">
  {% raw %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' width='300' %}
  {% endraw %}
</pre>

{% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' width='300' %}

### 왼쪽/오른쪽으로 띄우기

<pre class="codebox" title="html 코드">
  {% raw %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='왼쪽으로 띄우려면 align="left"' alt='' width='300' align='left' %}
  {% endraw %}
</pre>

{% include image.html url='/assets/images/mhead_bg.jpg' description='왼쪽으로 띄우려면 align="left"' alt='' width='300' align='left' %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

<pre class="codebox" title="html 코드">
  {% raw %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='오른쪽으로 띄우려면 align="right"' alt='' width='300' align='right' %}
  {% endraw %}
</pre>

{% include image.html url='/assets/images/mhead_bg.jpg' description='오른쪽으로 띄우려면 align="right"' alt='' width='300' align='right' %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

## p + em 구조

<pre class="codebox" title="markdown 코드">
  ![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
  *너비값(width)은 생략가능*
</pre>

![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
*너비값(width)은 생략가능*

### 왼쪽/오른쪽으로 띄우기

<pre class="codebox" title="markdown 코드">
  {:.float-left}
  ![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
  *왼쪽으로 띄우려면 .float-left 클래스 사용*
</pre>

{:.float-left}
![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
*왼쪽으로 띄우려면 .float-left 클래스 사용*

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

<pre class="codebox" title="markdown 코드">
  {:.float-right}
  ![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
  *오른쪽으로 띄우려면 .float-right 클래스 사용*
</pre>

{:.float-right}
![alt text]({{"/assets/images/mhead_bg.jpg" | relative_url}}){:style="width:300px"}
*오른쪽으로 띄우려면 .float-right 클래스 사용*

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore. Laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt cumque at laboriosam alias, ab quaerat amet unde aliquam omnis commodi quia nobis nisi reprehenderit repudiandae mollitia perspiciatis inventore.

## 다수 이미지

<pre class="codebox" title="html 코드">
  &lt;div class="page__image-container"&gt;
    {% raw %}
    {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
    {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
    {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
    {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
    {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
    {% endraw %}
  &lt;/div&gt;
</pre>

<div class="page__image-container">
  {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
  {% include image.html url='/assets/images/mhead_bg.jpg' description='너비값(width)은 생략 가능' alt='' %}
</div>

<pre class="codebox" title="markdown 코드">
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

p + em 구조의 경우 이미지에 em, figcaption 같은 설명 마크업 사용 불가 및 높이값은 inline styles로 정의.