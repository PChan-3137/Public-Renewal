# 대전학생교육문화원 리뉴얼

![mainvisual](https://github.com/user-attachments/assets/32e362a6-3bb5-457f-845d-b638c9670d65)

## 대전학생교육문화원 사이트의 정보 구조 개선 및 가독성,탐색 편의성 향상을 위해 리뉴얼하였습니다.

### Before & After

| Before | After |
|--------|-------|
| <img width="1920" height="1920" alt="Image" src="https://github.com/user-attachments/assets/4be1438d-9c61-4774-b09e-b24fc388b3dc" /> | <img width="1916" height="3839" alt="Image" src="https://github.com/user-attachments/assets/6731dbd5-f073-421b-aa29-4526432b4dd5" /> |


## Link
-바로가기 (web-site) : [link](https://pchan-3137.github.io/Public-Renewal/) <br/>
-기획서 (Figma-slide) : [link](https://www.figma.com/slides/mnPXyfnT0IcQqa9w7wBcAT/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%89%B4%EC%96%BC-%EB%B0%95%EC%B0%AC?t=PbzM5V5iYU8hPhc3-6) <br/>

## 사용된 기술

`html5` `css3` `javascript`

## 실행 환경
- 최신 Chrome / Edge
- **로컬 서버 없이도 실행 가능** (모듈 없이 전역 스크립트 로드)
- 로컬 서버 실행 시 JSON 실데이터 로드 가능

## 실행 방법
### 1) 로컬 파일로 실행 (권장)
- `index.html` 더블클릭 → 바로 실행

## 리뉴얼 요소
### 메인 페이지
- 기능이 한 화면에 많이 보여 시선이 분산되기에 이를 개선하기 위해 섹션을 구분
- 내비게이션에 서브메뉴가 지나치게 많이 배치되었고, 사이트맵에선 서브 메뉴를 확인할수 없었음
- 이를 개선하기위에 내비게이션과 사이트맵의 배치구조를 서로 바꾸었음

### 사이트맵
- 서브메뉴를 확인할수 없던 구조에서 각 카테고리별로 나누어 서브메뉴를 배치

### 강좌 / 행사 페이지
- 단순한 텍스트의 나열로 내용을 제대로 확인하기 어려웠음
- 카드 형태로 변경하고 이미지를 배치하여 원하는 강좌를 찾기 쉽게 수정함



## 파일 구조
```
/
├─ index.html
├─ login.html
├─ notice.html
├─ program.html
├─ program-depth.html
├─ sitemap.html
├─ css/
│  ├─ login.css
│  ├─ notice.css
│  ├─ pagenation.css
│  ├─ program-depth.css
│  ├─ program.css
│  ├─ style.css
│  ├─ sitemap.css
│  └─ sub-style.css
├─ js/
│  ├─ JFscript.js
│  ├─ notice.js
│  ├─ program.js
│  └─ script.js
└─ img/
```


