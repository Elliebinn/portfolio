import type { ProjectData } from '../components/ProjectDetail';

export const jujutok: Record<'en' | 'ko', ProjectData> = {
  en: {
    slug: 'jujutok',
    label: 'Case Study / Fintech AI',
    title: 'JujuTok \u2014 ',
    titleAccent: 'AI Stock Research',
    status: 'Live / Production',
    deployId: 'DEPLOY_ID: AI_RESEARCH_V2N',

    problem: {
      heading: 'Stock analysis reports are everywhere. But objectivity is nowhere.',
      paragraphs: [
        'Every brokerage, every YouTube channel, every newsletter pushes a single narrative. Bulls only see upside. Bears only see risk. The investor is left to reconcile contradictions alone\u2014with no structured framework to do so.',
        'I wanted to build something different: a system where multiple AI agents independently analyze a stock from completely different angles, then argue with each other before presenting a conclusion. Not consensus for the sake of agreement, but dialectical tension that surfaces what a single analyst would miss.',
        'The result is JujuTok\u2014a multi-agent AI platform where 6 specialized agents analyze in parallel, and 4 investment personas debate in real-time.',
      ],
    },

    walkthrough: {
      heading: 'From query to insight in under 60 seconds.',
      steps: [
        {
          label: 'Input',
          title: 'Enter any stock ticker',
          description: 'Type a ticker symbol and hit analyze. The system identifies the sector, selects optimal agent weights, and begins parallel execution.',
          screenshot: '/assets/projects/jujutok/home.png',
        },
        {
          label: 'Analysis',
          title: '6 agents analyze simultaneously',
          description: 'Technical, Fundamental, Macro, News, Commodity, and Related agents each produce independent assessments. Results stream in real-time via SSE\u2014you watch the analysis materialize token by token.',
          screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
        },
        {
          label: 'Debate',
          title: '4 personas challenge each other',
          description: 'An Aggressive Bull, Conservative Bear, Quant Expert, and Macro Strategist engage in 3 rounds: opinion, rebuttal, and synthesis. 9 LLM calls generate a dialectical report that surfaces disagreements, not just consensus.',
          screenshot: '/assets/projects/jujutok/debate-view.png',
        },
        {
          label: 'Result',
          title: 'Synthesized investment signal',
          description: 'The Supervisor agent weighs all inputs and produces a final signal (BUY/HOLD/SELL) with a confidence score (0\u2013100), detailed reasoning, and risk factors. Every report is saved and searchable.',
          screenshot: '/assets/projects/jujutok/analysis-result.png',
        },
      ],
    },

    overview:
      'JujuTok is a high-density, multi-agent AI environment designed to strip away market noise. It doesn\u2019t just aggregate data; it <em>synthesizes</em> intelligence through a collaborative network of specialized LLM agents.',
    highlights: [
      { icon: 'brain', title: 'Deep Synthesis', description: 'Cross-referencing historical patterns with real-time news velocity.' },
      { icon: 'cog', title: 'Agentic Execution', description: 'Distributed reasoning across 6 distinct vertical-specific AI agents.' },
    ],

    agents: [
      { id: '0x01', key: 'technical', name: 'Technical Agent', description: 'Price action, RSI, MACD, and volume profile analysis across multi-timeframes.', tags: ['PATTERN', 'QUANT'] },
      { id: '0x02', key: 'fundamental', name: 'Fundamental Agent', description: 'SEC filings, earnings transcripts, and balance sheet health ratios.', tags: ['8-K', 'DCF'] },
      { id: '0x03', key: 'macro', name: 'Macro Agent', description: 'FED policy, interest rate shifts, and global geopolitical risk factors.', tags: ['RATES', 'GEOPOLITICS'] },
      { id: '0x04', key: 'news', name: 'News Agent', description: 'Real-time headline sentiment analysis and social velocity monitoring.', tags: ['SENTIMENT', 'NLP'] },
      { id: '0x05', key: 'commodity', name: 'Commodity Agent', description: 'Raw material pricing correlated with equity sector rotations.', tags: ['CRUDE', 'METALS'] },
      { id: '0x06', key: 'related', name: 'Related Agent', description: 'Sympathy plays and sector-wide rotations across global markets.', tags: ['ALPHA', 'CORRELATION'] },
    ],

    debate: {
      title: 'Dialectical ',
      titleAccent: 'Intelligence.',
      description:
        'To eliminate confirmation bias, the final report is generated through a 4-persona debate mechanism. Each agent adopts a specific market philosophy, challenging the other\u2019s conclusions until a consensus\u2014or a highlighted divergence\u2014is reached.',
      personas: ['Aggressive Bull', 'Conservative Bear', 'Quant Expert', 'Macro Strategist'],
      features: [
        { title: 'Conflict Resolution', description: 'AI personas cross-examine data sources for hallucinations and logical gaps.' },
        { title: 'Synthesized Thesis', description: 'Final output presents a unified bull/bear case with confidence scoring.' },
        { title: '3-Round Structure', description: 'Opinion \u2192 Rebuttal \u2192 Synthesis. 9 LLM calls produce a dialectical report.' },
      ],
      screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
    },

    stack: [
      { category: 'Frontend', name: 'React 19' },
      { category: 'Logic', name: 'TypeScript' },
      { category: 'Backend', name: 'FastAPI' },
      { category: 'LLM', name: 'Claude API' },
      { category: 'Streaming', name: 'SSE' },
      { category: 'Storage', name: 'MySQL' },
    ],

    flow: [
      { title: 'User Query', subtitle: 'Natural Language' },
      { title: 'Agent Orchestration', subtitle: 'Task Distribution' },
      { title: 'Parallel Debating', subtitle: '4-Agent Cross-Ref' },
      { title: 'Synthesized Insight', subtitle: 'SSE Streaming' },
    ],

    metrics: [
      { value: '31K+', label: 'Lines of Code' },
      { value: '147', label: 'Test Cases' },
      { value: '6', label: 'AI Agents' },
      { value: '9', label: 'LLM Calls per Debate' },
    ],

    cta: {
      heading: 'Interested in the full build?',
      subtext: 'Access the source code and technical overview.',
      githubUrl: 'https://github.com/Elliebinn/jujutok',
      githubLabel: 'View on GitHub',
    },

    screenshots: {
      hero: '/assets/projects/jujutok/home-dark.png',
    },
  },

  ko: {
    slug: 'jujutok',
    label: '\uCF00\uC774\uC2A4 \uC2A4\uD130\uB514 / \uD540\uD14C\uD06C AI',
    title: '\uC8FC\uC8FC\uD1A1 \u2014 ',
    titleAccent: 'AI \uC8FC\uC2DD \uBD84\uC11D',
    status: '\uC6B4\uC601 \uC911',
    deployId: 'DEPLOY_ID: AI_RESEARCH_V2N',

    problem: {
      heading: '\uC8FC\uC2DD \uBD84\uC11D \uB9AC\uD3EC\uD2B8\uB294 \uB118\uCCD0\uB09C\uB2E4. \uD558\uC9C0\uB9CC \uAC1D\uAD00\uC131\uC740 \uC5C6\uB2E4.',
      paragraphs: [
        '\uBAA8\uB4E0 \uC99D\uAD8C\uC0AC, \uC720\uD29C\uBC84, \uB274\uC2A4\uB808\uD130\uB294 \uD558\uB098\uC758 \uB0B4\uB7EC\uD2F0\uBE0C\uB9CC \uBC00\uC5B4\uBD99\uC785\uB2C8\uB2E4. \uAC15\uC138\uB860\uC790\uB294 \uD56D\uC0C1 \uC0AC\uB77C\uACE0 \uD558\uACE0, \uC57D\uC138\uB860\uC790\uB294 \uD56D\uC0C1 \uD314\uB77C\uACE0 \uD569\uB2C8\uB2E4. \uD22C\uC790\uC790\uB294 \uBAA8\uC21C\uB41C \uC815\uBCF4\uB97C \uD63C\uC790 \uC815\uB9AC\uD574\uC57C \uD558\uC9C0\uB9CC, \uAD6C\uC870\uC801 \uD504\uB808\uC784\uC6CC\uD06C\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.',
        '\uC800\uB294 \uB2E4\uB978 \uAC83\uC744 \uB9CC\uB4E4\uACE0 \uC2F6\uC5C8\uC2B5\uB2C8\uB2E4. \uC5EC\uB7EC AI \uC5D0\uC774\uC804\uD2B8\uAC00 \uC644\uC804\uD788 \uB2E4\uB978 \uAC01\uB3C4\uC5D0\uC11C \uB3C5\uB9BD\uC801\uC73C\uB85C \uBD84\uC11D\uD55C \uD6C4, \uACB0\uB860\uC744 \uB0B4\uAE30 \uC804\uC5D0 \uC11C\uB85C \uB17C\uC7C1\uD558\uB294 \uC2DC\uC2A4\uD15C. \uD569\uC758\uB97C \uC704\uD55C \uD569\uC758\uAC00 \uC544\uB2C8\uB77C, \uB2E8\uC77C \uBD84\uC11D\uAC00\uAC00 \uB193\uCE60 \uC218 \uC788\uB294 \uAC83\uC744 \uB4DC\uB7EC\uB0B4\uB294 \uBCC0\uC99D\uBC95\uC801 \uAE34\uC7A5.',
        '\uADF8 \uACB0\uACFC\uBB3C\uC774 \uC8FC\uC8FC\uD1A1\uC785\uB2C8\uB2E4 \u2014 6\uAC1C \uC804\uBB38 \uC5D0\uC774\uC804\uD2B8\uAC00 \uBCD1\uB82C \uBD84\uC11D\uD558\uACE0, 4\uBA85\uC758 \uD22C\uC790 \uD398\uB974\uC18C\uB098\uAC00 \uC2E4\uC2DC\uAC04 \uD1A0\uB860\uD558\uB294 \uBA40\uD2F0\uC5D0\uC774\uC804\uD2B8 AI \uD50C\uB7AB\uD3FC.',
      ],
    },

    walkthrough: {
      heading: '\uCFFC\uB9AC\uC5D0\uC11C \uC778\uC0AC\uC774\uD2B8\uAE4C\uC9C0 60\uCD08.',
      steps: [
        {
          label: '\uC785\uB825',
          title: '\uC885\uBAA9 \uD2F0\uCEE4\uB97C \uC785\uB825\uD558\uC138\uC694',
          description: '\uD2F0\uCEE4\uB97C \uC785\uB825\uD558\uACE0 \uBD84\uC11D \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC139\uD130 \uC2DD\uBCC4, \uCD5C\uC801 \uC5D0\uC774\uC804\uD2B8 \uAC00\uC911\uCE58 \uC120\uD0DD, \uBCD1\uB82C \uC2E4\uD589\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/home.png',
        },
        {
          label: '\uBD84\uC11D',
          title: '6\uAC1C \uC5D0\uC774\uC804\uD2B8\uAC00 \uB3D9\uC2DC \uBD84\uC11D',
          description: '\uAE30\uC220\uC801, \uD380\uB354\uBA58\uD138, \uB9E4\uD06C\uB85C, \uB274\uC2A4, \uC6D0\uC790\uC7AC, \uACBD\uC7C1\uC0AC \uC5D0\uC774\uC804\uD2B8\uAC00 \uAC01\uAC01 \uB3C5\uB9BD\uC801 \uD3C9\uAC00\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. SSE\uB97C \uD1B5\uD574 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD1A0\uD070 \uB2E8\uC704\uB85C \uBD84\uC11D\uC774 \uD3BC\uCCD0\uC9C0\uB294 \uAC83\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
        },
        {
          label: '\uD1A0\uB860',
          title: '4\uBA85\uC758 \uD398\uB974\uC18C\uB098\uAC00 \uB3C4\uC804',
          description: '\uACF5\uACA9\uC801 \uAC15\uC138\uB860\uC790, \uBCF4\uC218\uC801 \uC57D\uC138\uB860\uC790, \uD000\uD2B8 \uC804\uBB38\uAC00, \uB9E4\uD06C\uB85C \uC804\uB7B5\uAC00\uAC00 3\uB77C\uC6B4\uB4DC\uB85C \uD1A0\uB860\uD569\uB2C8\uB2E4: \uC758\uACAC \u2192 \uBC18\uBC15 \u2192 \uC885\uD569. 9\uD68C LLM \uD638\uCD9C\uB85C \uD569\uC758\uBFD0 \uC544\uB2C8\uB77C \uC758\uACAC \uCC28\uC774\uB97C \uB4DC\uB7EC\uB0B4\uB294 \uBCC0\uC99D\uBC95\uC801 \uB9AC\uD3EC\uD2B8\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/debate-view.png',
        },
        {
          label: '\uACB0\uACFC',
          title: '\uC885\uD569 \uD22C\uC790 \uC2DC\uADF8\uB110',
          description: 'Supervisor \uC5D0\uC774\uC804\uD2B8\uAC00 \uBAA8\uB4E0 \uC785\uB825\uC744 \uAC00\uC911\uD558\uC5EC \uCD5C\uC885 \uC2DC\uADF8\uB110(BUY/HOLD/SELL), \uC2E0\uB8B0\uB3C4 \uC810\uC218(0\u2013100), \uC0C1\uC138 \uADFC\uAC70, \uB9AC\uC2A4\uD06C \uC694\uC18C\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uBAA8\uB4E0 \uB9AC\uD3EC\uD2B8\uB294 \uC800\uC7A5\uB418\uACE0 \uAC80\uC0C9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/analysis-result.png',
        },
      ],
    },

    overview:
      '\uC8FC\uC8FC\uD1A1\uC740 \uC2DC\uC7A5 \uB178\uC774\uC988\uB97C \uC81C\uAC70\uD558\uAE30 \uC704\uD574 \uC124\uACC4\uB41C \uACE0\uBC00\uB3C4 \uBA40\uD2F0\uC5D0\uC774\uC804\uD2B8 AI \uD658\uACBD\uC785\uB2C8\uB2E4. \uB2E8\uC21C\uD788 \uB370\uC774\uD130\uB97C \uBAA8\uC73C\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, \uC804\uBB38 LLM \uC5D0\uC774\uC804\uD2B8\uB4E4\uC758 \uD611\uC5C5 \uB124\uD2B8\uC6CC\uD06C\uB97C \uD1B5\uD574 \uC9C0\uB2A5\uC744 <em>\uC885\uD569</em>\uD569\uB2C8\uB2E4.',
    highlights: [
      { icon: 'brain', title: '\uB51C \uC2E0\uB808\uC2DC\uC2A4', description: '\uACFC\uAC70 \uD328\uD134\uACFC \uC2E4\uC2DC\uAC04 \uB274\uC2A4 \uC18D\uB3C4\uB97C \uAD50\uCC28 \uBD84\uC11D\uD569\uB2C8\uB2E4.' },
      { icon: 'cog', title: '\uC5D0\uC774\uC804\uD2B8 \uC2E4\uD589', description: '6\uAC1C \uC804\uBB38 \uC601\uC5ED\uBCC4 AI \uC5D0\uC774\uC804\uD2B8\uAC00 \uBD84\uC0B0 \uCD94\uB860\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.' },
    ],

    agents: [
      { id: '0x01', key: 'technical', name: '\uAE30\uC220\uC801 \uC5D0\uC774\uC804\uD2B8', description: '\uAC00\uACA9 \uC561\uC158, RSI, MACD, \uBCFC\uB968 \uD504\uB85C\uD30C\uC77C \uBD84\uC11D\uC744 \uBA40\uD2F0 \uD0C0\uC784\uD504\uB808\uC784\uC73C\uB85C \uC218\uD589.', tags: ['\uD328\uD134', '\uC815\uB7C9'] },
      { id: '0x02', key: 'fundamental', name: '\uD380\uB354\uBA58\uD138 \uC5D0\uC774\uC804\uD2B8', description: 'SEC \uACF5\uC2DC, \uC2E4\uC801 \uBC1C\uD45C, \uC7AC\uBB34\uC81C\uD45C \uAC74\uC804\uC131 \uBD84\uC11D.', tags: ['8-K', 'DCF'] },
      { id: '0x03', key: 'macro', name: '\uB9E4\uD06C\uB85C \uC5D0\uC774\uC804\uD2B8', description: '\uC5F0\uC900 \uC815\uCC45, \uAE08\uB9AC \uBCC0\uB3D9, \uAE00\uB85C\uBC8C \uC9C0\uC815\uD559\uC801 \uB9AC\uC2A4\uD06C \uD3C9\uAC00.', tags: ['\uAE08\uB9AC', '\uC9C0\uC815\uD559'] },
      { id: '0x04', key: 'news', name: '\uB274\uC2A4 \uC5D0\uC774\uC804\uD2B8', description: '\uC2E4\uC2DC\uAC04 \uD5E4\uB4DC\uB77C\uC778 \uAC10\uC131 \uBD84\uC11D\uACFC \uC18C\uC15C \uD655\uC0B0 \uBAA8\uB2C8\uD130\uB9C1.', tags: ['\uAC10\uC131', 'NLP'] },
      { id: '0x05', key: 'commodity', name: '\uC6D0\uC790\uC7AC \uC5D0\uC774\uC804\uD2B8', description: '\uC6D0\uC790\uC7AC \uAC00\uACA9\uACFC \uC8FC\uC2DD \uC139\uD130 \uB85C\uD14C\uC774\uC158 \uC0C1\uAD00 \uBD84\uC11D.', tags: ['\uC6D0\uC720', '\uAE08\uC18D'] },
      { id: '0x06', key: 'related', name: '\uACBD\uC7C1\uC0AC \uC5D0\uC774\uC804\uD2B8', description: '\uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0\uC11C \uC2EC\uD30C\uD2F0 \uD50C\uB808\uC774\uC640 \uC139\uD130 \uB85C\uD14C\uC774\uC158 \uD0D0\uC0C9.', tags: ['\uC54C\uD30C', '\uC0C1\uAD00'] },
    ],

    debate: {
      title: '\uBCC0\uC99D\uBC95\uC801 ',
      titleAccent: '\uC9C0\uB2A5.',
      description:
        '\uD655\uC99D\uD3B8\uD5A5\uC744 \uC81C\uAC70\uD558\uAE30 \uC704\uD574 \uCD5C\uC885 \uB9AC\uD3EC\uD2B8\uB294 4\uC778 \uD398\uB974\uC18C\uB098 \uD1A0\uB860 \uBA54\uCEE4\uB2C8\uC998\uC744 \uD1B5\uD574 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uAC01 \uC5D0\uC774\uC804\uD2B8\uB294 \uD2B9\uC815 \uC2DC\uC7A5 \uCCA0\uD559\uC744 \uCC44\uD0DD\uD558\uC5EC \uD569\uC758 \uB610\uB294 \uBA85\uD655\uD55C \uC758\uACAC \uCC28\uC774\uAC00 \uB3C4\uCD9C\uB420 \uB54C\uAE4C\uC9C0 \uC0C1\uB300\uC758 \uACB0\uB860\uC5D0 \uB3C4\uC804\uD569\uB2C8\uB2E4.',
      personas: ['\uACF5\uACA9\uC801 \uAC15\uC138\uB860\uC790', '\uBCF4\uC218\uC801 \uC57D\uC138\uB860\uC790', '\uD000\uD2B8 \uC804\uBB38\uAC00', '\uB9E4\uD06C\uB85C \uC804\uB7B5\uAC00'],
      features: [
        { title: '\uAC08\uB4F1 \uD574\uACB0', description: 'AI \uD398\uB974\uC18C\uB098\uAC00 \uB370\uC774\uD130 \uCD9C\uCC98\uB97C \uAD50\uCC28 \uAC80\uC99D\uD558\uC5EC \uD658\uAC01\uACFC \uB17C\uB9AC\uC801 \uACB0\uD568\uC744 \uBC29\uC9C0\uD569\uB2C8\uB2E4.' },
        { title: '\uC885\uD569 \uB17C\uC9C0', description: '\uCD5C\uC885 \uC0B0\uCD9C\uBB3C\uC740 \uC2E0\uB8B0\uB3C4 \uC810\uC218\uC640 \uD568\uAED8 \uD1B5\uD569\uB41C \uAC15\uC138/\uC57D\uC138 \uB17C\uAC70\uB97C \uC81C\uC2DC\uD569\uB2C8\uB2E4.' },
        { title: '3\uB77C\uC6B4\uB4DC \uAD6C\uC870', description: '\uC758\uACAC \u2192 \uBC18\uBC15 \u2192 \uC885\uD569. 9\uD68C LLM \uD638\uCD9C\uB85C \uBCC0\uC99D\uBC95\uC801 \uB9AC\uD3EC\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.' },
      ],
      screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
    },

    stack: [
      { category: '\uD504\uB860\uD2B8\uC5D4\uB4DC', name: 'React 19' },
      { category: '\uB85C\uC9C1', name: 'TypeScript' },
      { category: '\uBC31\uC5D4\uB4DC', name: 'FastAPI' },
      { category: 'LLM', name: 'Claude API' },
      { category: '\uC2A4\uD2B8\uB9AC\uBC0D', name: 'SSE' },
      { category: '\uC800\uC7A5\uC18C', name: 'MySQL' },
    ],

    flow: [
      { title: '\uC0AC\uC6A9\uC790 \uCFFC\uB9AC', subtitle: '\uC790\uC5F0\uC5B4 \uC785\uB825' },
      { title: '\uC5D0\uC774\uC804\uD2B8 \uC624\uCF00\uC2A4\uD2B8\uB808\uC774\uC158', subtitle: '\uD0C0\uC2A4\uD06C \uBD84\uBC30' },
      { title: '\uBCD1\uB82C \uD1A0\uB860', subtitle: '4\uC778 \uAD50\uCC28 \uAC80\uC99D' },
      { title: '\uC885\uD569 \uC778\uC0AC\uC774\uD2B8', subtitle: 'SSE \uC2A4\uD2B8\uB9AC\uBC0D' },
    ],

    metrics: [
      { value: '31K+', label: '\uCF54\uB4DC \uB77C\uC778' },
      { value: '147', label: '\uD14C\uC2A4\uD2B8 \uCF00\uC774\uC2A4' },
      { value: '6', label: 'AI \uC5D0\uC774\uC804\uD2B8' },
      { value: '9', label: '\uD1A0\uB860\uB2F9 LLM \uD638\uCD9C' },
    ],

    cta: {
      heading: '\uC804\uCCB4 \uBE4C\uB4DC\uAC00 \uAD81\uAE08\uD558\uC2E0\uAC00\uC694?',
      subtext: '\uC18C\uC2A4 \uCF54\uB4DC\uC640 \uAE30\uC220 \uAC1C\uC694\uB97C \uD655\uC778\uD558\uC138\uC694.',
      githubUrl: 'https://github.com/Elliebinn/jujutok',
      githubLabel: 'GitHub \uBCF4\uAE30',
    },

    screenshots: {
      hero: '/assets/projects/jujutok/home-dark.png',
    },
  },
};
