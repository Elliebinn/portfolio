---
name: extract-design-tokens
description: "src/styles/global.css에서 모든 디자인 토큰(--color-*, --font-*, --shadow-*, --radius-*, --space-*, --ease-*)을 전수 추출하여 _workspace/design_tokens_extracted.json으로 저장한다. DESIGN.md 작성, 색 토큰 회귀 검증, 웜 팔레트(#fef9f2, --ed-*) 잔재 탐지에 사용. PRD §5와 AC11/AC12를 충족하기 위한 단일 진실 추출 도구. 디자인 토큰을 언급하거나 DESIGN.md/global.css 작업이 필요하면 반드시 이 스킬을 사용한다."
---

# Extract Design Tokens

`global.css`에서 디자인 토큰을 grep으로 전수 추출하여 구조화 데이터로 만든다. design-architect가 DESIGN.md §2/§3/§6을 작성할 때 가장 먼저 호출한다.

## 왜 이 스킬이 필요한가

- DESIGN.md는 "코드와 동기화된 단일 진실"이어야 하고, 사람이 눈으로 토큰을 옮기면 실수와 누락이 생긴다
- AC11(기존 색 토큰 삭제 0)·AC12(웜 팔레트 사용 0)는 토큰 인벤토리 없이 측정 불가
- frontend-executor가 새 토큰을 추가했는지 비교 기준이 필요하다

## 절차

1. **target 파일 확인**
   - `src/styles/global.css` (필수)
   - `src/styles/editorial.css` (잔재 탐지용, 존재 시)
   - 그 외 `src/**/*.css` 전체

2. **추출 카테고리** (정규식)
   - 색: `--color-[a-z-]+`, `--bg-[a-z-]+`, `--text-[a-z-]+`, `--ed-[a-z-]+` (잔재)
   - 폰트: `--font-[a-z-]+`
   - 그림자: `--shadow-[a-z-]+`
   - 라운드: `--radius-[a-z-]+`, `--rounded-[a-z-]+`
   - 간격: `--space-[a-z0-9-]+`, `--gap-[a-z0-9-]+`
   - 이징/타이밍: `--ease-[a-z-]+`, `--duration-[a-z-]+`

3. **각 토큰의 사용처 grep** — `src/components/`, `src/pages/`, `src/layouts/`에서 토큰명 등장 위치 카운트

4. **JSON 산출**

```json
{
  "extracted_at": "ISO8601",
  "source": "src/styles/global.css",
  "tokens": {
    "color": [
      {
        "name": "--color-accent",
        "value": "#...",
        "usage_count": 14,
        "used_in": ["Hero.tsx", "Projects.tsx", "..."],
        "is_warm_palette": false
      }
    ],
    "font": [...],
    "shadow": [...],
    "radius": [...],
    "space": [...],
    "ease": [...]
  },
  "warm_palette_findings": {
    "hex_fef9f2_count": 0,
    "ed_prefix_tokens": []
  }
}
```

5. **저장**: `_workspace/design_tokens_extracted.json` + 사람 읽기용 `_workspace/design_tokens_summary.md`

## 사용 도구

- Grep (`output_mode: "content"`로 라인 단위 추출)
- Read (값 확인)
- Write (산출물 저장)

## 출력 검증

- 색 토큰 1개 이상 추출되었는가
- `warm_palette_findings`가 존재하는가 (없으면 grep 누락)
- 각 토큰에 `usage_count` 필드가 있는가

## 호출 예시

```
"global.css 토큰 추출해서 design_tokens_extracted.json 만들어줘"
"DESIGN.md §2 작성 전에 색 토큰 인벤토리 추출"
"웜 팔레트 잔재 있는지 확인"
```
