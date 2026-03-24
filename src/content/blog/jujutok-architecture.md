---
title: "JujuTok 아키텍처 설계기 — 6개 AI 에이전트를 어떻게 오케스트레이션 했는가"
description: "멀티 에이전트 시스템의 설계 과정과 기술적 의사결정을 기록합니다."
date: 2026-03-20
tags: ["AI", "Architecture", "FastAPI", "Claude API"]
category: "project"
featured: true
---

## 왜 멀티 에이전트인가

단일 LLM 호출로는 주식 분석의 다양한 관점을 커버하기 어렵습니다. 기술적 분석, 펀더멘털, 매크로 환경, 뉴스 등 각 영역은 서로 다른 데이터와 추론 방식을 필요로 합니다.

JujuTok은 6개의 전문 에이전트를 설계하여 이 문제를 해결했습니다.

## 에이전트 구조

각 에이전트는 `BaseAgent` 추상 클래스를 상속하며, 섹터 기반 가중치를 가집니다.

```python
class BaseAgent(ABC):
    @abstractmethod
    async def analyze(self, ticker: str, context: dict) -> AgentOutput:
        ...
```

## SSE 스트리밍

분석 결과는 Server-Sent Events로 실시간 전달됩니다. 사용자는 각 에이전트의 분석이 완료되는 즉시 결과를 확인할 수 있습니다.

## 배운 점

- 에이전트 간 의존성을 최소화하면 병렬 실행이 가능해진다
- Supervisor 패턴으로 최종 합성의 일관성을 유지할 수 있다
- 프롬프트 설계가 모델 선택보다 중요하다
