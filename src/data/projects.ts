import type { ProjectData } from '../components/ProjectDetail';

export const jujutok: Record<'en' | 'ko', ProjectData> = {
  en: {
    slug: 'jujutok',
    label: 'Case Study / Fintech AI',
    title: 'JujuTok \u2014 ',
    titleAccent: 'AI Stock Research',
    status: 'Live / Production',
    deployId: 'DEPLOY_ID: AI_RESEARCH_V2N',

    heroSubtitle: 'Analyzing a stock used to take hours. 6 AI agents do it in 60 seconds \u2014 then 4 of them argue about it.',

    problem: {
      heading: 'Stock analysis reports are everywhere. But objectivity is nowhere.',
      paragraphs: [
        'Every brokerage, every YouTube channel, every newsletter pushes a single narrative. Bulls only see upside. Bears only see risk. The investor is left to reconcile contradictions alone\u2014with no structured framework to do so.',
        'I wanted to build something different: a system where multiple AI agents independently analyze a stock from completely different angles, then argue with each other before presenting a conclusion.',
        'The result is JujuTok\u2014a multi-agent AI platform where 6 specialized agents analyze in parallel, and 4 investment personas debate in real-time.',
      ],
    },

    challenge: {
      label: '01 The Challenge',
      heading: 'Too much data, no conclusion.',
      description: 'To properly analyze a single stock, you need to check technicals, financials, macro trends, news sentiment, commodities, and competitors. That takes 2\u20133 hours for a human. By the time you finish, the market has already moved.',
      metricValue: '+19.5%',
      metricLabel: 'Fund performance improvement',
    },

    solution: {
      label: '02 The Solution',
      heading: 'Let AI agents argue \u2014 better answers come out.',
      description: 'Instead of one AI giving one opinion, JujuTok runs 6 specialist agents in parallel and then makes 4 AI personas debate each other. The result isn\'t just an analysis \u2014 it\'s a stress-tested conclusion.',
      badges: [
        { title: 'Multi-Agent', subtitle: '6 specialized analysis agents' },
        { title: 'Real-time', subtitle: 'Live SSE streaming' },
      ],
    },

    walkthrough: {
      heading: 'From query to insight in under 60 seconds.',
      steps: [
        {
          label: 'Input',
          title: 'Enter any stock ticker',
          description: 'Type a ticker symbol and hit analyze. The system identifies the sector, picks the right agents, and starts running them in parallel.',
          screenshot: '/assets/projects/jujutok/home.png',
        },
        {
          label: 'Analysis',
          title: '6 agents analyze at once',
          description: 'Technical, Fundamental, Macro, News, Commodity, and Competitor agents each produce independent assessments. You watch the analysis appear in real-time, token by token.',
          screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
        },
        {
          label: 'Debate',
          title: '4 personas challenge each other',
          description: 'A Trader, Value Investor, Growth Investor, and Risk Analyst go through 3 rounds: opinion, rebuttal, and synthesis. They disagree on purpose \u2014 that\'s the point.',
          screenshot: '/assets/projects/jujutok/debate-view.png',
        },
        {
          label: 'Result',
          title: 'Final verdict with confidence score',
          description: 'The Supervisor weighs all inputs and produces a final signal (BUY/HOLD/SELL) with a confidence score, detailed reasoning, and risk factors. Every report is saved and searchable.',
          screenshot: '/assets/projects/jujutok/analysis-result.png',
        },
      ],
    },

    overview:
      'JujuTok doesn\'t just collect data \u2014 it makes AI agents <em>think together</em>. 6 specialists analyze from different angles, then 4 personas debate the results before a final verdict is delivered.',
    highlights: [
      { icon: 'brain', title: 'Cross-Analysis', description: 'Historical patterns meet real-time news for a complete picture.' },
      { icon: 'cog', title: 'Parallel Agents', description: '6 AI agents run simultaneously, each focused on a different domain.' },
    ],

    agents: [
      { id: '0x01', key: 'technical', name: 'Technical Agent', description: 'Charts, momentum, RSI, MACD \u2014 reads the price action across multiple timeframes.', tags: ['PATTERN', 'QUANT'] },
      { id: '0x02', key: 'fundamental', name: 'Fundamental Agent', description: 'Earnings, balance sheets, cash flow \u2014 checks if the company is actually healthy.', tags: ['8-K', 'DCF'] },
      { id: '0x03', key: 'macro', name: 'Macro Agent', description: 'Interest rates, inflation, geopolitics \u2014 the big picture that moves everything.', tags: ['RATES', 'GEOPOLITICS'] },
      { id: '0x04', key: 'news', name: 'News Agent', description: 'Headlines and social sentiment \u2014 what the market is feeling right now.', tags: ['SENTIMENT', 'NLP'] },
      { id: '0x05', key: 'commodity', name: 'Commodity Agent', description: 'Oil, gold, copper \u2014 raw materials that quietly drive sector rotations.', tags: ['CRUDE', 'METALS'] },
      { id: '0x06', key: 'related', name: 'Related Agent', description: 'Competitors and sector peers \u2014 no stock moves alone.', tags: ['ALPHA', 'CORRELATION'] },
    ],

    debate: {
      title: 'AI ',
      titleAccent: 'Debate System.',
      description:
        'One AI gives one opinion. That\'s dangerous \u2014 it sounds objective but it\'s not. So we make 4 AI personas with different investment philosophies argue with each other. The disagreements are where the real insights hide.',
      personas: ['Trader', 'Value Investor', 'Growth Investor', 'Risk Analyst'],
      features: [
        { title: 'Built-in Disagreement', description: 'Each persona finds holes in the others\' arguments. Weak logic gets called out.' },
        { title: 'Bull vs Bear Verdict', description: 'The final report shows both sides with a confidence score \u2014 you decide.' },
        { title: '3 Rounds, 9 LLM Calls', description: 'Opinion \u2192 Rebuttal \u2192 Synthesis. Structured debate, not random noise.' },
      ],
      screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
    },

    stack: [
      { category: 'Frontend', name: 'React 19' },
      { category: 'Core', name: 'TypeScript' },
      { category: 'API Engine', name: 'FastAPI' },
      { category: 'LLM Agent', name: 'Claude 3.5' },
      { category: 'Live Streaming', name: 'SSE' },
      { category: 'Persistent', name: 'MySQL' },
    ],

    flow: [
      { title: 'User Query', subtitle: 'Input ticker or sector theme' },
      { title: 'Orchestration', subtitle: 'Parallel agent activation' },
      { title: 'Debate Logic', subtitle: 'Cross-examination' },
      { title: 'Insight', subtitle: 'Final synthesized output' },
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

    heroSubtitle: '\uC885\uBAA9 \uD558\uB098 \uBD84\uC11D\uD558\uB294 \uB370 2\uC2DC\uAC04? AI 6\uBA85\uC774 60\uCD08\uC5D0 \uB05D\uB0B4\uACE0, 4\uBA85\uC774 \uAC70\uAE30\uC5D0 \uD1A0\uB860\uC744 \uBD99\uC785\uB2C8\uB2E4.',

    problem: {
      heading: '\uC8FC\uC2DD \uBD84\uC11D \uB9AC\uD3EC\uD2B8\uB294 \uB118\uCCD0\uB09C\uB2E4. \uD558\uC9C0\uB9CC \uAC1D\uAD00\uC131\uC740 \uC5C6\uB2E4.',
      paragraphs: [
        '\uBAA8\uB4E0 \uC99D\uAD8C\uC0AC, \uC720\uD29C\uBC84, \uB274\uC2A4\uB808\uD130\uB294 \uD558\uB098\uC758 \uB0B4\uB7EC\uD2F0\uBE0C\uB9CC \uBC00\uC5B4\uBD99\uC785\uB2C8\uB2E4. \uAC15\uC138\uB860\uC790\uB294 \uD56D\uC0C1 \uC0AC\uB77C\uACE0 \uD558\uACE0, \uC57D\uC138\uB860\uC790\uB294 \uD56D\uC0C1 \uD314\uB77C\uACE0 \uD569\uB2C8\uB2E4. \uD22C\uC790\uC790\uB294 \uBAA8\uC21C\uB41C \uC815\uBCF4\uB97C \uD63C\uC790 \uC815\uB9AC\uD574\uC57C \uD558\uC9C0\uB9CC, \uAD6C\uC870\uC801 \uD504\uB808\uC784\uC6CC\uD06C\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.',
        '\uC5EC\uB7EC AI\uAC00 \uAC01\uAC01 \uB2E4\uB978 \uAC01\uB3C4\uC5D0\uC11C \uBD84\uC11D\uD55C \uB2E4\uC74C, \uACB0\uB860\uC744 \uB0B4\uAE30 \uC804\uC5D0 \uC11C\uB85C \uB17C\uC7C1\uD558\uB294 \uC2DC\uC2A4\uD15C\uC744 \uB9CC\uB4E4\uACE0 \uC2F6\uC5C8\uC2B5\uB2C8\uB2E4.',
        '\uADF8 \uACB0\uACFC\uBB3C\uC774 \uC8FC\uC8FC\uD1A1\uC785\uB2C8\uB2E4 \u2014 6\uAC1C \uC804\uBB38 \uC5D0\uC774\uC804\uD2B8\uAC00 \uBCD1\uB82C \uBD84\uC11D\uD558\uACE0, 4\uBA85\uC758 \uD22C\uC790 \uD398\uB974\uC18C\uB098\uAC00 \uC2E4\uC2DC\uAC04 \uD1A0\uB860\uD558\uB294 AI \uD50C\uB7AB\uD3FC.',
      ],
    },

    challenge: {
      label: '01 \uBB38\uC81C',
      heading: '\uC815\uBCF4\uB294 \uB118\uCE58\uB294\uB370, \uACB0\uB860\uC774 \uC548 \uB098\uC628\uB2E4.',
      description: '\uC885\uBAA9 \uD558\uB098\uB97C \uC81C\uB300\uB85C \uBD84\uC11D\uD558\uB824\uBA74 \uCC28\uD2B8, \uC7AC\uBB34\uC81C\uD45C, \uAE08\uB9AC, \uB274\uC2A4, \uC6D0\uC790\uC7AC, \uACBD\uC7C1\uC0AC\uAE4C\uC9C0 \uBD10\uC57C \uD569\uB2C8\uB2E4. \uC0AC\uB78C\uC774 \uD558\uBA74 2\u20133\uC2DC\uAC04. \uB2E4 \uBCF4\uACE0 \uB098\uBA74 \uC2DC\uC7A5\uC740 \uC774\uBBF8 \uC6C0\uC9C1\uC600\uC8E0.',
      metricValue: '+19.5%',
      metricLabel: '\uD380\uB4DC \uC131\uACFC \uAC1C\uC120',
    },

    solution: {
      label: '02 \uD574\uACB0\uCC45',
      heading: 'AI\uB07C\uB9AC \uC2F8\uC6B0\uAC8C \uD588\uB354\uB2C8, \uB354 \uC88B\uC740 \uB2F5\uC774 \uB098\uC654\uB2E4.',
      description: 'AI \uD558\uB098\uAC00 \uD558\uB098\uC758 \uC758\uACAC\uC744 \uB0B4\uB294 \uB300\uC2E0, \uC8FC\uC8FC\uD1A1\uC740 6\uAC1C \uC804\uBB38 \uC5D0\uC774\uC804\uD2B8\uB97C \uB3D9\uC2DC\uC5D0 \uB3CC\uB9AC\uACE0 4\uBA85\uC758 AI \uD398\uB974\uC18C\uB098\uAC00 \uC11C\uB85C \uD1A0\uB860\uD569\uB2C8\uB2E4. \uACB0\uACFC\uB294 \uB2E8\uC21C \uBD84\uC11D\uC774 \uC544\uB2C8\uB77C, \uAC80\uC99D\uB41C \uACB0\uB860\uC785\uB2C8\uB2E4.',
      badges: [
        { title: '\uBA40\uD2F0\uC5D0\uC774\uC804\uD2B8', subtitle: '6\uAC1C \uC804\uBB38 \uBD84\uC11D \uC5D0\uC774\uC804\uD2B8' },
        { title: '\uC2E4\uC2DC\uAC04', subtitle: 'SSE \uC2A4\uD2B8\uB9AC\uBC0D \uC5F0\uB3D9' },
      ],
    },

    walkthrough: {
      heading: '\uC785\uB825\uBD80\uD130 \uACB0\uB860\uAE4C\uC9C0 60\uCD08.',
      steps: [
        {
          label: '\uC785\uB825',
          title: '\uC885\uBAA9 \uD2F0\uCEE4\uB97C \uC785\uB825\uD558\uC138\uC694',
          description: '\uD2F0\uCEE4\uB97C \uC785\uB825\uD558\uACE0 \uBD84\uC11D \uBC84\uD2BC\uC744 \uB204\uB974\uBA74, \uC139\uD130\uB97C \uD30C\uC545\uD558\uACE0 \uC801\uD569\uD55C \uC5D0\uC774\uC804\uD2B8\uB97C \uACE8\uB77C \uBCD1\uB82C\uB85C \uB3CC\uB9BD\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/home.png',
        },
        {
          label: '\uBD84\uC11D',
          title: '6\uAC1C \uC5D0\uC774\uC804\uD2B8\uAC00 \uB3D9\uC2DC \uBD84\uC11D',
          description: '\uCC28\uD2B8, \uC7AC\uBB34\uC81C\uD45C, \uAE08\uB9AC, \uB274\uC2A4, \uC6D0\uC790\uC7AC, \uACBD\uC7C1\uC0AC \u2014 \uAC01\uAC01 \uB3C5\uB9BD\uC801\uC73C\uB85C \uBD84\uC11D\uD558\uACE0, \uACB0\uACFC\uAC00 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD654\uBA74\uC5D0 \uB098\uD0C0\uB0A9\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
        },
        {
          label: '\uD1A0\uB860',
          title: '4\uBA85\uC774 \uC11C\uB85C \uBC18\uBC15\uD569\uB2C8\uB2E4',
          description: '\uD2B8\uB808\uC774\uB354, \uAC00\uCE58\uD22C\uC790\uC790, \uC131\uC7A5\uD22C\uC790\uC790, \uB9AC\uC2A4\uD06C \uBD84\uC11D\uAC00\uAC00 3\uB77C\uC6B4\uB4DC\uB85C \uD1A0\uB860\uD569\uB2C8\uB2E4. \uC758\uACAC \u2192 \uBC18\uBC15 \u2192 \uC885\uD569. \uC77C\uBD80\uB7EC \uC758\uACAC\uC774 \uB2E4\uB978 \uAC8C \uD575\uC2EC\uC785\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/debate-view.png',
        },
        {
          label: '\uACB0\uACFC',
          title: '\uC2E0\uB8B0\uB3C4 \uC810\uC218\uC640 \uD568\uAED8 \uCD5C\uC885 \uD310\uB2E8',
          description: '\uBAA8\uB4E0 \uBD84\uC11D\uACFC \uD1A0\uB860\uC744 \uC885\uD569\uD558\uC5EC \uCD5C\uC885 \uC2DC\uADF8\uB110(BUY/HOLD/SELL), \uC2E0\uB8B0\uB3C4 \uC810\uC218, \uADFC\uAC70, \uB9AC\uC2A4\uD06C\uB97C \uC815\uB9AC\uD569\uB2C8\uB2E4. \uBAA8\uB4E0 \uB9AC\uD3EC\uD2B8\uB294 \uC800\uC7A5\uB418\uACE0 \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',
          screenshot: '/assets/projects/jujutok/analysis-result.png',
        },
      ],
    },

    overview:
      '\uC8FC\uC8FC\uD1A1\uC740 \uB370\uC774\uD130\uB97C \uBAA8\uC73C\uB294 \uAC8C \uC544\uB2C8\uB77C, AI\uAC00 <em>\uAC19\uC774 \uC0DD\uAC01\uD558\uAC8C</em> \uB9CC\uB4ED\uB2C8\uB2E4. 6\uAC1C \uC804\uBB38\uAC00\uAC00 \uAC01\uAC01 \uB2E4\uB978 \uAC01\uB3C4\uC5D0\uC11C \uBD84\uC11D\uD558\uACE0, 4\uBA85\uC774 \uD1A0\uB860\uD55C \uB4A4\uC5D0 \uCD5C\uC885 \uACB0\uB860\uC744 \uB0C5\uB2C8\uB2E4.',
    highlights: [
      { icon: 'brain', title: '\uAD50\uCC28 \uBD84\uC11D', description: '\uACFC\uAC70 \uD328\uD134\uACFC \uC2E4\uC2DC\uAC04 \uB274\uC2A4\uB97C \uD568\uAED8 \uBD10\uC57C \uC804\uCCB4 \uADF8\uB9BC\uC774 \uBCF4\uC785\uB2C8\uB2E4.' },
      { icon: 'cog', title: '\uBCD1\uB82C \uC5D0\uC774\uC804\uD2B8', description: '6\uAC1C AI \uC5D0\uC774\uC804\uD2B8\uAC00 \uAC01\uC790\uC758 \uC601\uC5ED\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uBD84\uC11D\uD569\uB2C8\uB2E4.' },
    ],

    agents: [
      { id: '0x01', key: 'technical', name: '\uCC28\uD2B8 \uBD84\uC11D', description: '\uAC00\uACA9 \uD750\uB984, RSI, MACD, \uAC70\uB798\uB7C9 \u2014 \uC5EC\uB7EC \uD0C0\uC784\uD504\uB808\uC784\uC758 \uAE30\uC220\uC801 \uD750\uB984\uC744 \uC77D\uC2B5\uB2C8\uB2E4.', tags: ['\uD328\uD134', '\uC815\uB7C9'] },
      { id: '0x02', key: 'fundamental', name: '\uC7AC\uBB34 \uBD84\uC11D', description: '\uC2E4\uC801, \uC7AC\uBB34\uC81C\uD45C, \uD604\uAE08\uD750\uB984 \u2014 \uD68C\uC0AC\uAC00 \uC2E4\uC81C\uB85C \uAC74\uAC15\uD55C\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.', tags: ['8-K', 'DCF'] },
      { id: '0x03', key: 'macro', name: '\uAE08\uB9AC/\uACBD\uC81C', description: '\uAE08\uB9AC, \uC778\uD50C\uB808\uC774\uC158, \uC9C0\uC815\uD559 \u2014 \uBAA8\uB4E0 \uAC78 \uC6C0\uC9C1\uC774\uB294 \uD070 \uADF8\uB9BC.', tags: ['\uAE08\uB9AC', '\uC9C0\uC815\uD559'] },
      { id: '0x04', key: 'news', name: '\uB274\uC2A4/\uC2EC\uB9AC', description: '\uD5E4\uB4DC\uB77C\uC778\uACFC \uC18C\uC15C \uBC18\uC751 \u2014 \uC2DC\uC7A5\uC774 \uC9C0\uAE08 \uBB34\uC5C7\uC744 \uB290\uB07C\uB294\uC9C0.', tags: ['\uAC10\uC131', 'NLP'] },
      { id: '0x05', key: 'commodity', name: '\uC6D0\uC790\uC7AC', description: '\uC720\uAC00, \uAE08, \uAD6C\uB9AC \u2014 \uC870\uC6A9\uD788 \uC139\uD130 \uB85C\uD14C\uC774\uC158\uC744 \uC774\uB04C\uB294 \uC6D0\uC7AC\uB8CC.', tags: ['\uC6D0\uC720', '\uAE08\uC18D'] },
      { id: '0x06', key: 'related', name: '\uACBD\uC7C1\uC0AC', description: '\uACBD\uC7C1\uC0AC\uC640 \uC139\uD130 \uB3D9\uD5A5 \u2014 \uC8FC\uC2DD\uC740 \uD63C\uC790 \uC6C0\uC9C1\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.', tags: ['\uC54C\uD30C', '\uC0C1\uAD00'] },
    ],

    debate: {
      title: 'AI ',
      titleAccent: '\uD1A0\uB860 \uC2DC\uC2A4\uD15C.',
      description:
        'AI \uD558\uB098\uAC00 \uD558\uB098\uC758 \uC758\uACAC\uC744 \uB0B4\uBA74 \uAC1D\uAD00\uC801\uC73C\uB85C \uBCF4\uC774\uC9C0\uB9CC, \uC0AC\uC2E4 \uD55C\uCABD \uC2DC\uAC01\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uC11C \uD22C\uC790 \uCCA0\uD559\uC774 \uB2E4\uB978 4\uBA85\uC758 AI\uAC00 \uC11C\uB85C \uBC18\uBC15\uD558\uAC8C \uD588\uC2B5\uB2C8\uB2E4. \uC9C4\uC9DC \uC778\uC0AC\uC774\uD2B8\uB294 \uC758\uACAC\uC774 \uBD80\uB52A\uD788\uB294 \uC9C0\uC810\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.',
      personas: ['\uD2B8\uB808\uC774\uB354', '\uAC00\uCE58\uD22C\uC790\uC790', '\uC131\uC7A5\uD22C\uC790\uC790', '\uB9AC\uC2A4\uD06C \uBD84\uC11D\uAC00'],
      features: [
        { title: '\uC77C\uBD80\uB7EC \uBC18\uB300\uD569\uB2C8\uB2E4', description: '\uAC01 \uD398\uB974\uC18C\uB098\uAC00 \uC0C1\uB300 \uB17C\uB9AC\uC758 \uD5C8\uC810\uC744 \uCC3E\uC2B5\uB2C8\uB2E4. \uC57D\uD55C \uADFC\uAC70\uB294 \uBC14\uB85C \uC9C0\uC801\uB429\uB2C8\uB2E4.' },
        { title: '\uAC15\uC138 vs \uC57C\uC138 \uD310\uC815', description: '\uCD5C\uC885 \uB9AC\uD3EC\uD2B8\uB294 \uC591\uCABD \uB17C\uAC70\uC640 \uC2E0\uB8B0\uB3C4 \uC810\uC218\uB97C \uD568\uAED8 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uD310\uB2E8\uC740 \uC0AC\uC6A9\uC790 \uBAB0\uC785\uB2C8\uB2E4.' },
        { title: '3\uB77C\uC6B4\uB4DC, 9\uD68C \uD638\uCD9C', description: '\uC758\uACAC \u2192 \uBC18\uBC15 \u2192 \uC885\uD569. \uAD6C\uC870\uD654\uB41C \uD1A0\uB860\uC774\uC9C0, \uB79C\uB364\uD55C \uC758\uACAC \uB098\uC5F4\uC774 \uC544\uB2D9\uB2C8\uB2E4.' },
      ],
      screenshot: '/assets/projects/jujutok/stock-analysis-dark.png',
    },

    stack: [
      { category: '\uD504\uB860\uD2B8\uC5D4\uB4DC', name: 'React 19' },
      { category: '\uCF54\uC5B4', name: 'TypeScript' },
      { category: 'API \uC5D4\uC9C4', name: 'FastAPI' },
      { category: 'LLM \uC5D0\uC774\uC804\uD2B8', name: 'Claude 3.5' },
      { category: '\uB77C\uC774\uBE0C \uC2A4\uD2B8\uB9AC\uBC0D', name: 'SSE' },
      { category: '\uC800\uC7A5\uC18C', name: 'MySQL' },
    ],

    flow: [
      { title: '\uC885\uBAA9 \uC785\uB825', subtitle: '\uD2F0\uCEE4 \uB610\uB294 \uC139\uD130' },
      { title: '\uC5D0\uC774\uC804\uD2B8 \uBC30\uCE58', subtitle: '\uBCD1\uB82C \uBD84\uC11D \uC2DC\uC791' },
      { title: '\uD1A0\uB860 \uC9C4\uD589', subtitle: '4\uC778 \uAD50\uCC28 \uAC80\uC99D' },
      { title: '\uCD5C\uC885 \uACB0\uB860', subtitle: '\uC885\uD569 \uB9AC\uD3EC\uD2B8 \uCD9C\uB825' },
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

export const quantPlatform: Record<'en' | 'ko', ProjectData> = {
  en: {
    slug: 'quant-platform',
    label: 'Case Study / Service Planning',
    title: 'AED — ',
    titleAccent: 'Quant Research Platform',
    status: 'In Production',
    deployId: 'INTERNAL_TOOL',

    heroSubtitle: 'A quant strategy analysis tool used daily by 4 researchers. 0 frontend devs. 0 designers. 1 planner who built it all.',

    problem: {
      heading: '4 researchers used this tool every day — but nobody was improving it.',
      paragraphs: [
        'AlphaBridge Quant Research team. They were using an internal dashboard every day to backtest hundreds of strategies and analyze performance.',
        'The problem? There was nobody to improve the tool. No frontend dev, no designer, no planner. Pain points kept getting pushed to "later."',
        '200+ strategies listed without tags, 3 clicks to see Holdings, and the UI was stuck at prototype level.',
      ],
    },

    challenge: {
      label: '01 The Challenge',
      heading: 'Used every day, painful every time.',
      description: '200+ strategies listed without any classification. Accessing core data required 3+ clicks. The V1 UI was prototype-level, making strategy comparison impossible at a glance.',
      metricValue: '83%',
      metricLabel: 'Workflow time reduced',
    },

    solution: {
      label: '02 The Solution',
      heading: 'Claude Code was my frontend team.',
      description: 'I drew HTML mockups myself, documented design tokens, then handed them to Claude Code. Not "build something like this" — but "match this mockup exactly." That was the key.',
      badges: [
        { title: 'Design System', subtitle: 'Token-based consistency' },
        { title: 'Auto Migration', subtitle: '20+ page conversion' },
      ],
    },

    walkthrough: {
      heading: 'The visible transformation.',
      steps: [
        {
          label: 'Before',
          title: 'V1 — A prototype-level dashboard',
          description: '1 KPI, untagged list, minimal styling. The UI developers built and never touched again.',
          screenshot: '/images/aed/overview-v1.png',
        },
        {
          label: 'After',
          title: 'V2 — Information density completely transformed',
          description: '5 KPIs, tag-based classification, color coding, multilingual, dark mode. Same data, entirely different experience.',
          screenshot: '/images/aed/overview-v2.png',
        },
        {
          label: 'Compare',
          title: 'Same data, completely different screen',
          description: 'Before/After of the backtest detail page. KPIs that were just numbers now have benchmark comparisons, rankings, and date context.',
          screenshot: '/images/aed/v1-v2-compare.png',
        },
        {
          label: 'Vision',
          title: 'Dark mode — the next design direction',
          description: 'Simplified sidebar, cumulative return charts, strategy ranking widgets. The v3 direction currently in progress.',
          screenshot: '/assets/projects/aed/dashboard-overview.png',
        },
      ],
    },

    overview:
      'AED wasn\'t just a redesign. It was rebuilding the <em>information architecture</em> of a tool researchers use every day. I designed a tag taxonomy, reorganized navigation around workflows, and built a design system to consistently transform 20 pages.',
    highlights: [
      { icon: 'brain', title: 'Information Architecture Redesign', description: '200+ strategies classified by benchmark, universe, and type. Changed how exploration works entirely.' },
      { icon: 'cog', title: 'AI-Powered Implementation', description: 'Used Claude Code to convert 20+ pages following a unified design system.' },
    ],

    stack: [
      { category: 'Planning', name: 'Service Planning' },
      { category: 'AI Dev', name: 'Claude Code' },
      { category: 'OLAP', name: 'ClickHouse' },
      { category: 'RDBMS', name: 'MySQL' },
      { category: 'UI', name: 'Design System' },
      { category: 'Theme', name: 'Dark Mode' },
    ],

    flow: [
      { title: 'Collect Pain Points', subtitle: 'User friction mapping' },
      { title: 'Root Cause Analysis', subtitle: 'Structural diagnosis' },
      { title: 'Feature Planning', subtitle: 'IA & interaction design' },
      { title: 'AI Implementation', subtitle: 'Claude Code execution' },
    ],

    metrics: [
      { value: '20+', label: 'Pages Redesigned' },
      { value: '200+', label: 'Strategies Classified' },
      { value: '3→1', label: 'Clicks to Holdings' },
      { value: '0', label: 'Frontend Developers' },
    ],

    cta: {
      heading: 'Want to read the full story?',
      subtext: 'Deep-dive blog posts covering the planning process, user research, and AI implementation.',
      githubUrl: '/en/blog/2026-03-23-aed-quant-tool-overview/',
      githubLabel: 'Read the Blog',
    },

    screenshots: {
      hero: '/assets/projects/aed/dashboard-overview.png',
    },
  },

  ko: {
    slug: 'quant-platform',
    label: '케이스 스터디 / 서비스 기획',
    title: 'AED — ',
    titleAccent: '퀀트 리서치 플랫폼',
    status: '운영 중',
    deployId: 'INTERNAL_TOOL',

    heroSubtitle: '리서처 4명이 매일 쓰는 퀀트 전략 분석 도구. 프론트엔드 개발자 0명. 디자이너 0명. 기획자 1명이 직접 만들었어요.',

    problem: {
      heading: '리서처 4명이 매일 쓰는 도구인데, 개선할 사람이 없었어요.',
      paragraphs: [
        '알파브릿지 퀀트 리서치팀. 수백 개 전략을 백테스트하고 성과를 분석하는 내부 대시보드를 매일 쓰고 있었어요.',
        '문제는 이 도구를 개선할 사람이 없었다는 거예요. 프론트엔드도 디자이너도 기획자도 없었고, 불편사항은 계속 "나중에"로 밀리는 상황.',
        '전략 200개가 태그 없이 나열되어 있고, Holdings 보려면 3번 클릭해야 하고, UI는 프로토타입 수준에 멈춰 있었어요.',
      ],
    },

    challenge: {
      label: '01 문제',
      heading: '매일 쓰는 도구인데, 쓸 때마다 불편했어요.',
      description: '200개 넘는 전략이 분류 없이 나열되어 있고, 핵심 데이터에 접근하려면 클릭을 3번 이상 해야 했어요. V1 UI는 프로토타입 수준이라 전략 비교가 한눈에 안 됐죠.',
      metricValue: '83%',
      metricLabel: '운용시간 단축',
    },

    solution: {
      label: '02 해결',
      heading: 'Claude Code가 제 프론트엔드 팀이었어요.',
      description: 'HTML 목업을 직접 그리고, 디자인 토큰을 문서화한 다음 Claude Code에 넘겼어요. "이렇게 만들어줘"가 아니라 "이 목업이랑 똑같이" — 그게 핵심이었어요.',
      badges: [
        { title: '디자인 시스템', subtitle: '토큰 기반 일관성' },
        { title: '자동 전환', subtitle: '20+ 페이지 마이그레이션' },
      ],
    },

    walkthrough: {
      heading: '눈에 보이는 변화.',
      steps: [
        {
          label: 'Before',
          title: 'V1 — 프로토타입 수준의 대시보드',
          description: 'KPI 1개, 분류 없는 목록, 최소한의 스타일링. 개발자가 만든 그대로의 UI였어요.',
          screenshot: '/images/aed/overview-v1.png',
        },
        {
          label: 'After',
          title: 'V2 — 정보 밀도가 완전히 달라졌어요',
          description: 'KPI 5개, 태그 기반 분류, 컬러 코딩, 다국어, 다크모드. 같은 데이터인데 전혀 다른 경험.',
          screenshot: '/images/aed/overview-v2.png',
        },
        {
          label: '비교',
          title: '같은 데이터, 완전히 다른 화면',
          description: '백테스트 상세 페이지의 Before/After. 숫자만 있던 KPI에 벤치마크 대비, 순위, 날짜 맥락이 추가됐어요.',
          screenshot: '/images/aed/v1-v2-compare.png',
        },
        {
          label: '비전',
          title: '다크모드 — 다음 단계 디자인',
          description: '사이드바 단순화, 누적 수익률 차트, 전략 랭킹 위젯. 현재 진행 중인 v3 방향성이에요.',
          screenshot: '/assets/projects/aed/dashboard-overview.png',
        },
      ],
    },

    overview:
      'AED는 단순한 리디자인이 아니었어요. 리서처가 매일 쓰는 도구의 <em>정보 구조 자체</em>를 바꾼 프로젝트예요. 태그 분류 체계를 설계하고, 네비게이션을 워크플로우 기준으로 재편하고, 디자인 시스템을 구축해서 20페이지를 일관되게 전환했어요.',
    highlights: [
      { icon: 'brain', title: '정보 구조 재설계', description: '200+ 전략을 벤치마크/유니버스/유형으로 분류. 탐색 방식 자체가 바뀌었어요.' },
      { icon: 'cog', title: 'AI 기반 구현', description: 'Claude Code로 20+ 페이지를 디자인 시스템 기준으로 일괄 전환했어요.' },
    ],

    stack: [
      { category: '기획', name: 'Service Planning' },
      { category: 'AI 개발', name: 'Claude Code' },
      { category: 'OLAP', name: 'ClickHouse' },
      { category: 'RDBMS', name: 'MySQL' },
      { category: 'UI', name: 'Design System' },
      { category: '테마', name: 'Dark Mode' },
    ],

    flow: [
      { title: '사용자 불편 수집', subtitle: '마찰 포인트 매핑' },
      { title: '근본 원인 분석', subtitle: '구조적 진단' },
      { title: '기능 기획', subtitle: 'IA & 인터랙션 설계' },
      { title: 'AI 구현', subtitle: 'Claude Code 실행' },
    ],

    metrics: [
      { value: '20+', label: '페이지 리디자인' },
      { value: '200+', label: '전략 분류 체계화' },
      { value: '3→1', label: 'Holdings 접근 클릭' },
      { value: '0명', label: '프론트엔드 개발자' },
    ],

    cta: {
      heading: '전체 스토리가 궁금하세요?',
      subtext: '기획 과정, 사용자 리서치, AI 구현까지 담은 블로그 글이에요.',
      githubUrl: '/ko/blog/2026-03-23-aed-quant-tool-overview/',
      githubLabel: '블로그 읽기',
    },

    screenshots: {
      hero: '/assets/projects/aed/dashboard-overview.png',
    },
  },
};
