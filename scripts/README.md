# Resume Sync System

이력서 내용 **단일 원본**(`src/data/resume.ts`) 하나를 수정하면 4곳에 자동 반영되는 시스템.

## 아키텍처

```
           ┌────────────────────────┐
           │  src/data/resume.ts    │  ★ Single Source of Truth
           │  (TypeScript + types)  │
           └──────────┬─────────────┘
                      │
        ┌─────────────┼─────────────────────────┐
        │             │                         │
        ▼             ▼                         ▼
  [Astro Import]  [Astro Import]          [Node Scripts]
        │             │                         │
        ▼             ▼                         ▼
  resume.astro   resume-pdf.astro      gen-resume-md.ts
  (Web 이력서)   (PDF 이력서)          gen-linkedin-about.ts
                                              │
                                              ▼
                                   obsidian/resume-common.md
                                   obsidian/linkedin-about.md (ko만)
```

- **Web/PDF**: Astro가 빌드/dev 시 자동으로 `resume.ts`를 읽어 렌더
- **Obsidian resume-common.md**: `npm run sync:resume`로 재생성 (전체 덮어쓰기)
- **LinkedIn about.md (ko)**: 같은 명령으로 재생성 (`<!-- GENERATED:START/END -->` 마커 사이만, en 섹션 보존)

## 일상 워크플로우

### 이력서에 내용을 추가/수정하고 싶을 때

```bash
# 1. resume.ts 수정 (에디터)
code src/data/resume.ts

# 2. Obsidian 파일 동기화
npm run sync:resume

# 3. 감사 검사
npm run resume:audit

# 또는 2+3을 한 번에
npm run resume:sync-and-audit

# 4. Web/PDF는 Astro dev/build로 자동 반영
npm run dev   # 또는 npm run build
```

### 감사 검사가 무엇을 확인하는가

`bash scripts/resume-audit.sh` (또는 `npm run resume:audit`):

1. **5개 파일 존재 여부** — data.ts, Web astro, PDF astro, Obsidian md, LinkedIn md
2. **Web/PDF import 체크** — Astro 파일이 `src/data/resume`에서 import하는지 확인. 누가 하드코딩으로 되돌렸으면 감지
3. **핵심 팩트 존재 검사** — 중요 숫자/고유명사가 leaf 파일에 있는지
   - REQUIRED_ALL (7개): 모든 leaf에 있어야 함
   - REQUIRED_DATA_COMMON (3개): data.ts + resume-common에 있어야 함, LinkedIn은 info-only
4. **금지 문자열 검사** — `22~25차` 같은 오래된 오기가 남아있는지

## 파일 구조

```
portfolio/
├── src/
│   ├── data/
│   │   └── resume.ts              ★ 마스터 — 여기만 수정
│   └── pages/
│       └── ko/
│           ├── resume.astro        (data 기반, 자동)
│           └── resume-pdf.astro    (data 기반, 자동)
└── scripts/
    ├── gen-resume-md.ts            (→ resume-common.md 생성)
    ├── gen-linkedin-about.ts       (→ linkedin-about.md ko 섹션 생성)
    ├── resume-audit.sh             (4-way 일관성 검사)
    └── README.md                   (이 파일)

~/Desktop/obsidian/hyebin-vault/3-career/
├── resume/
│   └── resume-common.md            (완전 자동 생성, 수정 금지)
└── linkedin-about.md
    ├── 한국어 섹션  (마커 사이만 자동 생성)
    └── 영어 섹션    (수동 유지)
```

## 감사 기준 추가/수정

`scripts/resume-audit.sh` 상단의 배열 수정:

- 새 핵심 팩트 추가 → `REQUIRED_ALL` 배열에 `"이름|패턴"` 형식으로 추가
- LinkedIn 제외 팩트 → `REQUIRED_DATA_COMMON`
- 금지 문자열 추가 → `FORBIDDEN` 배열

## 기술 메모

- **Node 22.12+** 필요 (`--experimental-strip-types`로 TS 직접 실행)
- **LinkedIn 마커**: `<!-- GENERATED:START -->` ... `<!-- GENERATED:END -->`. 이 사이 내용만 재생성됨. 마커 지우면 오류
- **bold 마커**: `**텍스트**` 형식으로 `resume.ts` 데이터에 넣으면 자동 변환
  - Astro/HTML → `<strong>`
  - Markdown → `**` 유지
  - LinkedIn → strip (LinkedIn About은 bold 미지원)

## 영어 이력서 (미구현)

- `src/pages/en/resume.astro`는 아직 하드코딩 상태
- 필요 시 영어 버전 데이터를 `src/data/resume.ts`에 추가하거나, 별도 `resume-en.ts` 파일 분리
- LinkedIn About 영어 섹션도 현재 수동 유지

## 트러블슈팅

**Q: `npm run sync:resume` 실행 시 `ERR_UNKNOWN_FILE_EXTENSION` 오류**
- Node 22.12 미만. `node --version` 확인 후 업그레이드 필요

**Q: audit이 Web/PDF 연결 실패 표시**
- Astro 파일이 `src/data/resume`에서 import하는지 확인. 누가 하드코딩으로 되돌린 경우

**Q: LinkedIn 마커가 사라졌어요**
- `linkedin-about.md`에서 수동으로 마커 복원 필요. 마커 위치:
  ```
  ## 한국어

  <!-- GENERATED:START — ... -->
  ... 자동 생성 내용 ...
  <!-- GENERATED:END -->

  ---

  ## 영어
  ```
