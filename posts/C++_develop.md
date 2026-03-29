---
title: C++ endl과 \n의 차이
date: "2026-03-24"
category: programming
---

# C++ endl과 \n의 차이

학교 과제로 C++에 대해 공부를 하다 다시 코드 검토를 하던 도중 문득 endl과 \n을 특별한 이유 없이 쓰는 나를 발견했다.

endl과 \n 둘 다 줄바꿈의 역할을 하는 걸로 알고 있는데 어떤 차이가 있는걸까? 기능 차이 없이 그냥 C++에서 endl이 추가된것 뿐일까?라는 생각이 들어 이 둘의 차이에 대해 공부해보기로 했다.

* endl과 \n의 차이
기본적으로 이 둘의 차이는 buffer을 지우는 것에 있다.

```js
console.log("Hello World")
```
