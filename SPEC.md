# 블로그 기능 명세서

## 개요

GitHub Actions를 통해 자동 배포되는 정적 블로그 사이트.
글 작성은 Markdown으로, 빌드 및 배포는 GitHub Actions로 자동화한다.

---

## 추천 기술 스택

| 영역 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | **Next.js 14+ (App Router)** | SSG 지원, MDX 통합 용이, Vercel/GitHub Pages 모두 배포 가능 |
| 스타일링 | **Tailwind CSS** | 유틸리티 클래스 기반, 빠른 커스터마이징 |
| 콘텐츠 형식 | **MDX** | Markdown + JSX 컴포넌트 혼용 가능 |
| 문법 강조 | **Shiki** | 정확한 토큰 기반 하이라이팅, 테마 다수 지원 |
| 배포 | **GitHub Pages** (또는 Vercel) | GitHub Actions와 네이티브 연동 |
| CI/CD | **GitHub Actions** | push 이벤트 트리거로 자동 빌드·배포 |
| 패키지 매니저 | **pnpm** | 빠른 설치, 디스크 효율 |

---

## 기능 명세

### 1. 콘텐츠 관리

#### 1.1 포스트
- `posts/` 디렉토리에 `.mdx` 파일로 관리
- 파일명 규칙: `YYYY-MM-DD-slug.mdx`
- Frontmatter 필드:

```yaml
---
title: string         # 포스트 제목 (필수)
date: YYYY-MM-DD      # 작성일 (필수)
tags: string[]        # 태그 목록 (선택)
summary: string       # 짧은 설명, OG 태그에 사용 (선택)
draft: boolean        # true면 빌드에서 제외 (기본값: false)
---
```

#### 1.2 페이지
- `pages/` 또는 App Router의 `app/` 구조로 About, Projects 등 정적 페이지 추가

---

### 2. 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 최신 포스트 목록 (페이지네이션 또는 무한 스크롤) |
| `/posts/[slug]` | 포스트 상세 페이지 |
| `/tags/[tag]` | 태그별 포스트 필터 |
| `/about` | 자기소개 페이지 |
| `/rss.xml` | RSS 피드 |

---

### 3. 포스트 목록 페이지 (`/`)

- 포스트 카드: 제목, 날짜, 태그, 요약 표시
- 최신순 정렬
- 페이지당 10개 표시 + 페이지네이션
- `draft: true` 포스트는 제외

---

### 4. 포스트 상세 페이지 (`/posts/[slug]`)

- MDX 렌더링
- 문법 강조 (Shiki)
- 코드 블록: 언어 표시 + 복사 버튼
- 목차(TOC): h2, h3 기준 자동 생성, 스크롤 연동
- 이전 / 다음 포스트 네비게이션
- 예상 읽기 시간 표시

---

### 5. 태그 시스템

- 포스트 상세 페이지에서 태그 클릭 시 `/tags/[tag]`로 이동
- `/tags/[tag]`: 해당 태그 포스트 목록 표시
- 모든 태그 및 포스트 수 집계

---

### 6. 검색

- 클라이언트 사이드 전문 검색 (제목, 태그, 요약 대상)
- 정적 배포 환경이므로 **Fuse.js** 기반 퍼지 검색
- 빌드 시 검색 인덱스 JSON 생성

---

### 7. SEO / 메타데이터

- 각 페이지 `<title>`, `<meta description>` 자동 생성
- Open Graph 태그 (제목, 요약, 날짜)
- `sitemap.xml` 빌드 시 자동 생성
- `robots.txt` 포함

---

### 8. RSS

- `/rss.xml`: 전체 포스트 피드
- 빌드 시 자동 생성

---

### 9. 다크 모드

- 시스템 설정 자동 감지 (`prefers-color-scheme`)
- 수동 토글 버튼 제공
- `localStorage`로 설정 유지

---

### 10. GitHub Actions CI/CD

#### 트리거
- `main` 브랜치 push 시 자동 실행

#### 파이프라인

```
push to main
  └── 1. 코드 체크아웃
  └── 2. Node.js / pnpm 설치
  └── 3. 의존성 설치 (pnpm install)
  └── 4. 빌드 (next build → next export → out/)
  └── 5. GitHub Pages 배포 (actions/deploy-pages)
```

#### 워크플로우 파일 위치
`.github/workflows/deploy.yml`

---

### 11. 폴더 구조 (예시)

```
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── app/
│   ├── page.tsx          # 홈 (포스트 목록)
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx  # 포스트 상세
│   ├── tags/
│   │   └── [tag]/
│   │       └── page.tsx  # 태그 필터
│   ├── about/
│   │   └── page.tsx
│   └── layout.tsx        # 공통 레이아웃
├── components/           # 공통 컴포넌트
├── lib/                  # 포스트 파싱, 유틸
├── posts/                # MDX 포스트 파일들
├── public/               # 정적 파일
├── SPEC.md
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 비기능 요건

| 항목 | 목표 |
|------|------|
| Lighthouse Performance | 90점 이상 |
| 빌드 시간 | 2분 이내 |
| 접근성 | WCAG 2.1 AA 수준 |
| 브라우저 지원 | 최신 Chrome, Firefox, Safari, Edge |

---

## 향후 고려 기능 (v2)

- 댓글: **giscus** (GitHub Discussions 연동)
- 뷰 카운트: Vercel KV 또는 Supabase
- 뉴스레터 구독
- 다국어(i18n) 지원
