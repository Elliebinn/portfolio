# Phase 0 Status — GATE 0-A 대기

작성: pm-orchestrator · 2026-04-08

## Tasks

| # | Task | 담당 | 상태 |
|---|---|---|---|
| 1 | P0.1 토큰 전수 추출 | design-architect | ✅ completed |
| 2 | P0.2 DESIGN.md 한/영 (awesome-design-md 11섹션) | design-architect | ✅ completed |
| 3 | P0.3 Dead code 감사 + 이력서 안전성 입증 | deadcode-auditor | ✅ completed |

## Artifacts

| 파일 | 크기 | 비고 |
|---|---|---|
| `/DESIGN.md` | 42 KB · 720줄 | 11섹션 한/영, awesome-design-md 포맷, PRD §4/§5/§6.1/§7 인용 정합 |
| `_workspace/design_tokens_extracted.json` | 8 KB | raw, warm_palette_findings 포함 (#fef9f2 1건, --ed-* 24건 — 전부 editorial.css 내부, 이력서 미참조) |
| `_workspace/design_tokens_summary.md` | 6 KB | 카테고리별 요약 + "이력서 영향" 컬럼 |
| `_workspace/rhythm_map.md` | 5.5 KB | 섹션별 리듬 매트릭스, 인접 검증 9/9 통과 |
| `_workspace/deadcode_audit.md` | 10 KB | SAFE_TO_DELETE 13개 / 77 KB / 이력서 영향 0건 |
| `_workspace/refs/awesome-design-md/` | (clone) | 58개 회사 DESIGN.md 레퍼런스 |

## P0.3 핵심 결과

**삭제 후보 13개** (총 ~77 KB):
- `src/layouts/EditorialLayout.astro`
- `src/styles/editorial.css`
- `src/components/editorial/Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Skills.tsx`, `Journey.tsx`, `Certifications.tsx`, `Contact.tsx`, `Footer.tsx`, `ProjectDetail.tsx`, `CaseStudy.tsx`

**이력서 안전성 (PRD R1 / AC2):**
- 이력서 3종(`ko/resume.astro`, `en/resume.astro`, `ko/resume-pdf.astro`) 모두 양방향 import grep으로 editorial 참조 **0건** 입증
- `editorial`이 등장하는 파일은 모두 후보 리스트 내부 (자기들끼리만 묶임 = orphan island)
- `src/pages/**/v2/` 디렉토리 자체가 존재하지 않음

**false positive 5건** (모두 삭제 대상 아님):
- `hero-v2.jpg`, `before-v2.jpg`, `after-v2.jpg` (자산 파일명)
- SVG path `M12 9v2m...` (path 명령어)
- `logo-v2-character-circle.png` (자산)

## PM 보류 이슈 (혜빈님 결정 필요)

- `src/pages/ko/index.astro:126` 본문 카피 **"기획 프로세스 v2"** — 사용자 가시 텍스트, P0.3 삭제 대상은 아님. 표현 검토만 필요. **GATE 0-A에서 함께 결정**.

## 다음 단계 (GATE 0-A 승인 후)

- P0.4 deadcode-auditor → `git rm` 13개 → `npm run build` 즉시 → 실패 시 `git restore`
- P0.5 visual-qa → `verify-resume-untouched` 실행 (AC2)
- GATE 0-B (자동, AC PASS 시)
- Phase 1 (Motion Foundation) 진입
