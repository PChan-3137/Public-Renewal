# 대전학생교육문화원 리뉴얼

![mainvisual](https://github.com/user-attachments/assets/32e362a6-3bb5-457f-845d-b638c9670d65)

#### 대전학생교육문화원 사이트의 정보 구조 개선 및 가독성,탐색 편의성 향상을 위해 리뉴얼하였습니다.

### Before & After

| Before | After |
|--------|-------|
| <img width="1920" height="1920" alt="Image" src="https://github.com/user-attachments/assets/4be1438d-9c61-4774-b09e-b24fc388b3dc" /> | <img width="1916" height="3839" alt="Image" src="https://github.com/user-attachments/assets/6731dbd5-f073-421b-aa29-4526432b4dd5" /> |


## Link
-바로가기 (web-site) : [link](https://pchan-3137.github.io/Public-Renewal/) <br/>
-기획서 (Figma-slide) : [link](https://www.figma.com/slides/mnPXyfnT0IcQqa9w7wBcAT/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%89%B4%EC%96%BC-%EB%B0%95%EC%B0%AC?t=PbzM5V5iYU8hPhc3-6) <br/>
-디자인 (Figma-Design) : [link](https://www.figma.com/design/VZE5cDK8jYcgOOuE32GtKN/%EB%8C%80%EC%A0%84%ED%95%99%EC%83%9D%EA%B5%90%EC%9C%A1%EB%AC%B8%ED%99%94%EC%9B%90-%EB%A6%AC%EB%89%B4%EC%96%BC-%EB%B0%95%EC%B0%AC?node-id=117-931)

## 사용된 기술

`html5` `css3` `javascript`

## 실행 환경
- 최신 Chrome / Edge
- **로컬 서버 없이도 실행 가능** (모듈 없이 전역 스크립트 로드)
- 로컬 서버 실행 시 JSON 실데이터 로드 가능

## 실행 방법
### 1) 로컬 파일로 실행 (권장)
- `index.html` 더블클릭 → 바로 실행

## ✔ 주요 기능
### ✏ 메인 페이지
<img width="1898" height="793" alt="Image" src="https://github.com/user-attachments/assets/7c666a02-adf7-4895-9032-4c8b174f8c1a" />

- 화면 중앙에 배치된 검색 기능
- 주요 서비스 바로가기 아이콘 함께 배치
- 반응형에서 검색 input 변경

### ✏ 사이트맵 페이지
<img width="1082" height="537" alt="Image" src="https://github.com/user-attachments/assets/26e0abb7-4879-44d7-a1ef-5f255aae2344" />

- 각 메뉴의 서브 메뉴를 표시
- 반응형으로 세로 배치로 변경

### ✏ 로그인 페이지
<img width="658" height="516" alt="Image" src="https://github.com/user-attachments/assets/6c0a820e-eb6a-4459-a495-707956f8f277" />

- ID/비밀번호 입력
- 반응형 구조 적용

### ✏ 강좌 / 행사 페이지
<img width="1425" height="1051" alt="Image" src="https://github.com/user-attachments/assets/a8776f41-4acf-4687-b901-b45aec3bb75a" />

- 필터와 페이지네이션 기능 구현(program.js)
- 카드형 배치
- 카드 내부 이미지요소 추가

### ✏ 공지사항 페이지
<img width="1090" height="786" alt="Image" src="https://github.com/user-attachments/assets/672e8e21-3f7b-4cfb-b835-723197d82121" />

- 페이지네이션 기능(notice.js)
- 페이지 갯수에 따라 prev,next 버튼 비활성화

### ✏ 공통 요소
<img width="1905" height="263" alt="Image" src="https://github.com/user-attachments/assets/65973bee-a7b5-448c-b816-83aa951cbe80" />

- header : 전체 페이지 공통 헤더 및 GNB + 서브메뉴 포함


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

