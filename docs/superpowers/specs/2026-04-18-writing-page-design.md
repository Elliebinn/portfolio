# Writing Page Design Spec

## Overview

포트폴리오 사이트에 Writing 페이지 추가. 2-pane SPA 레이아웃으로, 왼쪽 사이드바(포스트 리스트)와 오른쪽 리더(본문)가 동시 표시되며, 포스트 전환 시 사이드바가 유지됨.

## Architecture

- **패턴**: Astro 페이지 + React 아일랜드 (`client:load`)
- **빌드 타임**: `getCollection('blog')` → 각 포스트 `render()` → HTML + frontmatter 배열 생성
- **클라이언트**: React 상태로 포스트 선택/필터 관리, 페이지 전환 없음

## File Structure

```
src/pages/ko/writing.astro          # KO 진입점
src/pages/en/writing.astro          # EN 진입점
src/components/writing/
  WritingShell.tsx                   # 메인 셸 (2-pane 레이아웃)
  PostList.tsx                       # 왼쪽 패널: 헤더 + 메트릭 + 필터 + 리스트
  PostReader.tsx                     # 오른쪽 패널: 시리즈바 + 본문 + 관련글
  SeriesBar.tsx                      # 시리즈 네비게이션 (접기/펼치기)
src/styles/v2-writing.css            # Writing 전용 스타일
```

## Data Flow

1. `writing.astro`에서 `getCollection('blog')` 호출
2. 각 포스트 `render()` → `{ slug, data, html }` 배열 생성
3. 날짜 내림차순 정렬
4. `<WritingShell client:load posts={posts} lang="ko" />` 전달

### Post Data Shape (Props)

```typescript
interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;          // YYYY.MM.DD 포맷
  category: 'project' | 'planning' | 'deep-dive' | 'skill';
  tags: string[];
  series?: string;
  seriesOrder?: number;
  featured: boolean;
  relatedLinks: { label: string; url: string; type: string }[];
  html: string;          // 렌더된 마크다운 HTML
}
```

## Components

### WritingShell.tsx
- State: `selectedSlug`, `activeFilter`
- 2-pane grid: `420px 1fr`
- 초기 선택: 첫 번째 포스트 (또는 featured)
- 모바일(≤1024px): 리스트만 표시, 클릭 시 리더로 전환 (뒤로가기 버튼)

### PostList.tsx
- **Header**: 고스트 텍스트 "Journal", 타이틀 "생각의 기록." / "Thoughts archived."
- **Metrics**: 포스트 수, 시리즈 수(unique series count), 카테고리 수
- **Filter**: 전체/기획/프로젝트/삽질기/스킬 (EN: All/Planning/Project/Deep-dive/Skill)
- **List**: 번호(01~), 카테고리 뱃지(색상별), 날짜, 시리즈 뱃지, 제목
- 활성 포스트 하이라이트, hover 시 좌측 패딩 증가

### PostReader.tsx
- **Meta**: 카테고리 · 날짜 · 읽기 시간(단어수/200 기반)
- **Title**: 큰 타이틀
- **Divider**
- **Body**: `dangerouslySetInnerHTML`로 렌더된 HTML 삽입
- **Related Links**: relatedLinks 배열 기반 카드

### SeriesBar.tsx
- 시리즈 포스트일 때만 표시
- sticky top, 클릭으로 접기/펼치기
- 시리즈명, 진행도 바, 이전/다음 링크, 전체 목차
- 목차에서 클릭 시 해당 포스트로 전환

## Styling

- `v2-writing.css`에 목업의 CSS를 Astro 프로젝트에 맞게 이식
- 기존 `v2.css` CSS 변수 재사용 (`--bg`, `--bg-2`, `--fg`, `--muted`, `--faint`, `--border`, `--accent`, `--accent-soft`, `--midnight`, `--ease`)
- 라이트모드: `html[data-theme="light"]` 지원
- 카테고리 색상: planning=accent, deep-dive=midnight, project=#D4833D, skill=accent-soft
- 시리즈 뱃지 색상: AED=accent, RATB=#D4833D, jujutok=midnight

## Responsive

- **≤1024px**: 단일 패널 모드
  - 기본: 포스트 리스트만 표시
  - 포스트 클릭 → 리더 표시 + 뒤로가기 버튼
  - 뒤로가기 → 리스트로 복귀
- **≤640px**: 패딩 축소, 폰트 크기 조정

## Navigation Changes

- `en/index.astro`, `ko/index.astro`: `#writing` → `/en/writing`, `/ko/writing`
- Writing 페이지에 "← Portfolio" 백링크 (홈으로)

## Out of Scope

- 개별 포스트 URL 라우팅 (`/writing/[slug]`)
- 검색 기능
- 태그 기반 필터링
- 댓글 시스템
