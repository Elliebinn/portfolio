---
title: "주주톡(JujuTok) — 이력서용 프로젝트 정리"
description: "이력서/포트폴리오에 바로 사용할 수 있는 프로젝트 요약"
date: 2026-03-23
tags: ["Portfolio", "Resume"]
category: "project"
featured: true
---

## 이력서 — 한 줄 요약

> AI 멀티에이전트 기반 주식 분석 플랫폼 (풀스택 1인 개발)

---

## 이력서 — 프로젝트 설명 (3줄)

**주주톡 (JujuTok)** — AI 주식 분석 플랫폼 / 1인 풀스택 개발
6개 AI 에이전트가 종목을 병렬 분석하고, 4명의 투자 페르소나가 실시간 토론을 벌여 다각도 투자 판단을 제공하는 웹 플랫폼.
FastAPI + React 19 + Claude API 기반, SSE 실시간 스트리밍, 31,000+ LOC.

---

## 이력서 — 기술 스택 나열

**Backend**: Python 3.14, FastAPI, SQLAlchemy Async, MySQL 8.0, Alembic, SSE(sse-starlette), Docker
**Frontend**: React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4, shadcn/ui, recharts
**AI/LLM**: Claude API (Anthropic), 멀티에이전트 오케스트레이션, 프롬프트 엔지니어링
**외부 API**: Finnhub, FRED, yFinance, AlphaVantage 등 7개
**기타**: pytest (147 TC), Git, Docker Compose, uv

---

## 이력서 — 주요 성과 (bullet points)

- 6개 전문 AI 에이전트(기술/펀더멘털/매크로/뉴스/원자재/경쟁사)를 병렬 실행하는 오케스트레이션 엔진 설계·구현
- 4명 투자 페르소나 기반 3라운드 토론 시스템 설계 (의견→반박→종합, 9회 LLM 호출)
- SSE + asyncio.Queue 기반 실시간 스트리밍으로 분석·토론 진행 상황을 점진적 UI 반영
- 섹터별 동적 가중치 시스템으로 12개 섹터 × 6개 에이전트 조합 자동 최적화
- 코드 검증 + LLM 자기검증 하이브리드 방식으로 분석 신뢰도 확보 및 불필요한 LLM 호출 절감
- 30개 REST API 엔드포인트, 85개 React 컴포넌트, 16개 커스텀 훅, 147개 테스트 케이스
- 풀스택 1인 개발: 백엔드(Python 4,400줄) + 프론트엔드(TypeScript 15,100줄) + DB 설계 + 테스트

---

## 이력서 — 핵심 기능 요약 (표)

| 기능 | 설명 |
|------|------|
| 멀티에이전트 분석 | 6개 에이전트 병렬 실행 → Supervisor 종합 → 신호(BUY/HOLD/SELL) + 점수(0-100) |
| 4인 토론 | 트레이더·가치투자자·성장투자자·리스크분석가 3라운드 토론 + Q&A 채팅 |
| 실시간 스트리밍 | SSE 기반 점진적 결과 표시, 분석+토론 동시 실행 가능 |
| 포트폴리오 관리 | 종목 폴더 분류, 시그널 추이 추적, 분석/토론 히스토리 |
| 노트 시스템 | 종목별 메모 CRUD, 분석 리포트 연결, 태그·핀 고정 |

---

## 이력서 — 기술적 의사결정 (면접 대비)

| 질문 | 답변 |
|------|------|
| 왜 멀티에이전트? | 단일 LLM은 확증편향이 강함. 6개 전문 에이전트 독립 분석 + Devil's Advocate로 구조적 편향 완화 |
| 왜 SSE? | 서버→클라이언트 단방향 스트리밍에 적합. WebSocket 대비 구현 단순, 브라우저 자동 재연결 |
| 왜 CLI subprocess? | SDK 대비 동시성 문제 구조적 회피. 세마포어 없이 요청별 독립 프로세스 |
| 왜 하이브리드 검증? | 코드 검증(형식)은 빠르고 저렴, LLM 검증(논리)은 data_quality < 0.4일 때만 → 비용 절감 |
| 왜 React 19 + shadcn? | 서버 컴포넌트 대응 + headless UI로 디자인 자유도 확보. Tailwind 4와 궁합 |

---

## 이력서 — 규모 지표

```
Python       66파일   4,391줄   (에이전트, API, 서버)
TypeScript  118파일  15,109줄   (컴포넌트, 페이지, 훅)
테스트       25파일   2,620줄   (147 TC)
──────────────────────────────
합계        299파일  31,783줄
```

---

## 포트폴리오 사이트 — 관련 글

- [아키텍처 설계기](/blog/jujutok-architecture) — 멀티에이전트 오케스트레이션 deep-dive
- [토론 시스템 기획](/blog/debate-system-design) — 페르소나 설계와 프롬프트 엔지니어링
