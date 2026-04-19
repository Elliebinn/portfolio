# Writing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Writing page to the portfolio site with a 2-pane SPA layout (sidebar post list + reader) using React islands in Astro.

**Architecture:** Astro page fetches all blog posts at build time via `getCollection('blog')` and renders each to HTML. A React component (`WritingShell`) receives the posts array as props and manages post selection/filtering client-side with no page navigations. Mobile uses a list/detail toggle pattern.

**Tech Stack:** Astro 6, React 19, CSS (custom properties from v2.css), TypeScript

**Spec:** `docs/superpowers/specs/2026-04-18-writing-page-design.md`

---

## File Structure

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `src/styles/v2-writing.css` | Writing page styles (ported from mockup) |
| Create | `src/components/writing/WritingShell.tsx` | Top-level React shell: 2-pane layout, state management |
| Create | `src/components/writing/PostList.tsx` | Left pane: header, metrics, filter, scrollable post list |
| Create | `src/components/writing/PostReader.tsx` | Right pane: article content + related links |
| Create | `src/components/writing/SeriesBar.tsx` | Sticky series navigation bar |
| Create | `src/pages/ko/writing.astro` | KO entry point: data fetching + React mount |
| Create | `src/pages/en/writing.astro` | EN entry point: data fetching + React mount |
| Modify | `src/pages/en/index.astro:30` | Change `#writing` to `/en/writing` |
| Modify | `src/pages/ko/index.astro:30` | Change `#writing` to `/ko/writing` |

---

### Task 1: Create v2-writing.css

**Files:**
- Create: `src/styles/v2-writing.css`

- [ ] **Step 1: Create the stylesheet**

Port the CSS from the mockup (`_workspace/mockups/portfolio-writing.html` lines 10-441) into `src/styles/v2-writing.css`. Remove the CSS variable declarations (`:root` block) since they already exist in `v2.css`. Remove the reset (`* { margin:0; ... }`, `html`, `body`) since `v2.css` handles that. Remove the `@font-face` declarations since `V2Layout.astro` loads fonts.

Keep all component styles: `.shell`, `.pane-left`, `.pane-header`, `.pane-back`, `.pane-ghost`, `.pane-title`, `.pane-desc`, `.pane-metrics`, `.metric-value`, `.metric-label`, `.pane-filter`, `.filter-label`, `.filter-btn`, `.post-list`, `.post-item`, `.post-link`, `.post-num`, `.post-meta`, `.post-cat`, `.post-date`, `.post-title`, `.pane-right`, `.reader-wrap`, `.reader-meta`, `.reader-h1`, `.reader-divider`, `.reader-text`, `.post-series-badge`, `.series-bar`, `.series-panel`, `.related-section`, `.related-card`.

Add mobile styles:

```css
/* Mobile: list/detail toggle */
@media (max-width: 1024px) {
  .shell { grid-template-columns: 1fr; }
  .pane-right { display: none; }
  .shell.reader-open .pane-left { display: none; }
  .shell.reader-open .pane-right { display: block; }
}

/* Mobile back button */
.mobile-back {
  display: none;
  align-items: center;
  gap: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: 16px 32px 0;
  transition: gap 0.3s var(--ease);
}
.mobile-back:hover { gap: 10px; }
@media (max-width: 1024px) {
  .mobile-back { display: flex; }
}

@media (max-width: 640px) {
  .pane-header { padding: 24px 20px 16px; }
  .pane-metrics { padding: 12px 20px; }
  .pane-filter { padding: 10px 20px; }
  .post-link { padding: 14px 20px; }
  .reader-wrap { padding: 40px 24px 80px; }
  .mobile-back { padding: 12px 20px 0; }
}
```

- [ ] **Step 2: Verify the file is valid CSS**

Run: `cd /Users/ellie/Documents/elliebinn.github.io && npx astro check 2>&1 | head -20`

- [ ] **Step 3: Commit**

```bash
git add src/styles/v2-writing.css
git commit -m "feat: add writing page stylesheet ported from mockup"
```

---

### Task 2: Create WritingShell.tsx

**Files:**
- Create: `src/components/writing/WritingShell.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { useState, useCallback } from 'react';
import { PostList } from './PostList';
import { PostReader } from './PostReader';

export interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: 'project' | 'planning' | 'deep-dive' | 'skill';
  tags: string[];
  series?: string;
  seriesOrder?: number;
  featured: boolean;
  relatedLinks: { label: string; url: string; type: string }[];
  html: string;
}

export type CategoryFilter = 'all' | 'planning' | 'project' | 'deep-dive' | 'skill';

interface Props {
  posts: PostData[];
  lang: 'ko' | 'en';
}

export function WritingShell({ posts, lang }: Props) {
  const [selectedSlug, setSelectedSlug] = useState(posts[0]?.slug ?? '');
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [readerOpen, setReaderOpen] = useState(false);

  const filteredPosts = activeFilter === 'all'
    ? posts
    : posts.filter(p => p.category === activeFilter);

  const selectedPost = posts.find(p => p.slug === selectedSlug) ?? posts[0];

  // Series posts for the selected post
  const seriesPosts = selectedPost?.series
    ? posts
        .filter(p => p.series === selectedPost.series)
        .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0))
    : [];

  const handleSelectPost = useCallback((slug: string) => {
    setSelectedSlug(slug);
    setReaderOpen(true);
  }, []);

  const handleBack = useCallback(() => {
    setReaderOpen(false);
  }, []);

  return (
    <div className={`shell${readerOpen ? ' reader-open' : ''}`}>
      <PostList
        posts={filteredPosts}
        allPosts={posts}
        selectedSlug={selectedSlug}
        activeFilter={activeFilter}
        onSelectPost={handleSelectPost}
        onFilterChange={setActiveFilter}
        lang={lang}
      />
      <div className="pane-right">
        <button className="mobile-back" onClick={handleBack}>
          ← {lang === 'ko' ? '목록' : 'List'}
        </button>
        {selectedPost && (
          <PostReader
            post={selectedPost}
            seriesPosts={seriesPosts}
            onSelectPost={handleSelectPost}
            lang={lang}
          />
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/writing/WritingShell.tsx
git commit -m "feat: add WritingShell React component"
```

---

### Task 3: Create PostList.tsx

**Files:**
- Create: `src/components/writing/PostList.tsx`

- [ ] **Step 1: Create the component**

```tsx
import type { PostData, CategoryFilter } from './WritingShell';

const CATEGORY_LABELS = {
  ko: { all: '전체', planning: '기획', project: '프로젝트', 'deep-dive': '삽질기', skill: '스킬' },
  en: { all: 'All', planning: 'Planning', project: 'Project', 'deep-dive': 'Deep Dive', skill: 'Skill' },
} as const;

const SERIES_LABELS: Record<string, string> = {
  'quant-platform': 'AED',
  jujutok: '주주톡',
  ratb: 'RATB',
};

interface Props {
  posts: PostData[];
  allPosts: PostData[];
  selectedSlug: string;
  activeFilter: CategoryFilter;
  onSelectPost: (slug: string) => void;
  onFilterChange: (filter: CategoryFilter) => void;
  lang: 'ko' | 'en';
}

export function PostList({ posts, allPosts, selectedSlug, activeFilter, onSelectPost, onFilterChange, lang }: Props) {
  const labels = CATEGORY_LABELS[lang];
  const filters: CategoryFilter[] = ['all', 'planning', 'project', 'deep-dive', 'skill'];

  const totalPosts = allPosts.length;
  const seriesCount = new Set(allPosts.filter(p => p.series).map(p => p.series)).size;
  const categoryCount = new Set(allPosts.map(p => p.category)).size;

  // Build series order map for badge display
  const seriesOrderMap = new Map<string, { label: string; order: number; total: number }>();
  for (const p of allPosts) {
    if (p.series && p.seriesOrder != null) {
      const total = allPosts.filter(x => x.series === p.series).length;
      seriesOrderMap.set(p.slug, {
        label: SERIES_LABELS[p.series] ?? p.series,
        order: p.seriesOrder,
        total,
      });
    }
  }

  return (
    <div className="pane-left">
      <div className="pane-header">
        <a href={lang === 'ko' ? '/ko/' : '/en/'} className="pane-back">← Portfolio</a>
        <div className="pane-ghost">Journal</div>
        <h1 className="pane-title">
          <em>{lang === 'ko' ? '생각의' : 'Thoughts'}</em> {lang === 'ko' ? '기록.' : 'archived.'}
        </h1>
        <p className="pane-desc">
          {lang === 'ko' ? '기획과 실행 사이의 기록들' : 'Records between planning and execution'}
        </p>
      </div>

      <div className="pane-metrics">
        <div>
          <div className="metric-value">
            {totalPosts}<span style={{ fontSize: '14px', color: 'var(--muted)' }}>{lang === 'ko' ? '편' : ''}</span>
          </div>
          <div className="metric-label">Posts</div>
        </div>
        <div>
          <div className="metric-value">
            {seriesCount}<span style={{ fontSize: '14px', color: 'var(--muted)' }}>{lang === 'ko' ? '시리즈' : ''}</span>
          </div>
          <div className="metric-label">Series</div>
        </div>
        <div>
          <div className="metric-value">
            {categoryCount}<span style={{ fontSize: '14px', color: 'var(--muted)' }}>{lang === 'ko' ? '주제' : ''}</span>
          </div>
          <div className="metric-label">Categories</div>
        </div>
      </div>

      <div className="pane-filter">
        <span className="filter-label">{lang === 'ko' ? '필터' : 'Filter'}</span>
        {filters.map((f, i) => (
          <span key={f}>
            {i > 0 && <span className="filter-sep">·</span>}
            <button
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => onFilterChange(f)}
            >
              {labels[f]}
            </button>
          </span>
        ))}
      </div>

      <ol className="post-list">
        {posts.map((post, idx) => {
          const seriesInfo = seriesOrderMap.get(post.slug);
          const num = String(idx + 1).padStart(2, '0');
          return (
            <li key={post.slug} className="post-item" data-category={post.category}>
              <a
                className={`post-link${selectedSlug === post.slug ? ' active' : ''}`}
                onClick={() => onSelectPost(post.slug)}
              >
                <span className="post-num">{num}</span>
                <div>
                  <div className="post-meta">
                    <span className="post-cat" data-cat={post.category}>
                      {labels[post.category] ?? post.category}
                    </span>
                    <span className="post-date">{post.date}</span>
                    {seriesInfo && (
                      <span
                        className="post-series-badge"
                        data-series={post.series === 'ratb' ? 'ratb' : post.series === 'jujutok' ? 'jujutok' : undefined}
                      >
                        {seriesInfo.label} {'\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468\u2469'[seriesInfo.order - 1] ?? `(${seriesInfo.order})`}
                      </span>
                    )}
                  </div>
                  <div className="post-title">{post.title}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/writing/PostList.tsx
git commit -m "feat: add PostList component with filter and series badges"
```

---

### Task 4: Create SeriesBar.tsx

**Files:**
- Create: `src/components/writing/SeriesBar.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { useState } from 'react';
import type { PostData } from './WritingShell';

const SERIES_LABELS: Record<string, string> = {
  'quant-platform': '퀀트 분석 플랫폼 AED',
  jujutok: 'AI 주식 분석 주주톡',
  ratb: '로보어드바이저 RATB',
};

const SERIES_LABELS_EN: Record<string, string> = {
  'quant-platform': 'Quant Analysis Platform AED',
  jujutok: 'AI Stock Analysis JujuTok',
  ratb: 'Robo-Advisor RATB',
};

interface Props {
  currentPost: PostData;
  seriesPosts: PostData[];
  onSelectPost: (slug: string) => void;
  lang: 'ko' | 'en';
}

export function SeriesBar({ currentPost, seriesPosts, onSelectPost, lang }: Props) {
  const [open, setOpen] = useState(false);

  if (!currentPost.series || seriesPosts.length < 2) return null;

  const labels = lang === 'ko' ? SERIES_LABELS : SERIES_LABELS_EN;
  const seriesTitle = labels[currentPost.series] ?? currentPost.series;
  const currentIdx = seriesPosts.findIndex(p => p.slug === currentPost.slug);
  const prevPost = currentIdx > 0 ? seriesPosts[currentIdx - 1] : null;
  const nextPost = currentIdx < seriesPosts.length - 1 ? seriesPosts[currentIdx + 1] : null;
  const progress = ((currentIdx + 1) / seriesPosts.length) * 100;

  return (
    <div className={`series-bar${open ? ' open' : ''}`}>
      <div className="series-bar-summary" onClick={() => setOpen(!open)}>
        <div className="series-bar-left">
          <span className="series-bar-label">Series</span>
          <span className="series-bar-title">{seriesTitle}</span>
          <div className="series-bar-progress">
            <div className="series-bar-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="series-bar-right">
          {prevPost && (
            <span className="series-bar-prevnext">
              <a onClick={(e) => { e.stopPropagation(); onSelectPost(prevPost.slug); }}>
                ← {lang === 'ko' ? '이전편' : 'Prev'}
              </a>
            </span>
          )}
          <span className="series-bar-count">
            {String(currentIdx + 1).padStart(2, '0')} / {String(seriesPosts.length).padStart(2, '0')}
          </span>
          {nextPost && (
            <span className="series-bar-prevnext">
              <a onClick={(e) => { e.stopPropagation(); onSelectPost(nextPost.slug); }}>
                {lang === 'ko' ? '다음편' : 'Next'} →
              </a>
            </span>
          )}
          <span className="series-bar-toggle">&#9662;</span>
        </div>
      </div>
      <div className="series-panel">
        <div className="series-panel-inner">
          <ol className="series-list">
            {seriesPosts.map((p, i) => (
              <li key={p.slug}>
                <a
                  className={`series-list-item${p.slug === currentPost.slug ? ' current' : ''}`}
                  onClick={() => onSelectPost(p.slug)}
                >
                  <span className="series-list-num">{String(i + 1).padStart(2, '0')}</span>
                  {p.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/writing/SeriesBar.tsx
git commit -m "feat: add SeriesBar component with collapse/expand and nav"
```

---

### Task 5: Create PostReader.tsx

**Files:**
- Create: `src/components/writing/PostReader.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { useEffect, useRef } from 'react';
import { SeriesBar } from './SeriesBar';
import type { PostData } from './WritingShell';

const CAT_LABELS = {
  ko: { planning: '기획', project: '프로젝트', 'deep-dive': '삽질기', skill: '스킬' },
  en: { planning: 'Planning', project: 'Project', 'deep-dive': 'Deep Dive', skill: 'Skill' },
} as const;

interface Props {
  post: PostData;
  seriesPosts: PostData[];
  onSelectPost: (slug: string) => void;
  lang: 'ko' | 'en';
}

function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function PostReader({ post, seriesPosts, onSelectPost, lang }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const labels = CAT_LABELS[lang];

  // Scroll to top when post changes
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [post.slug]);

  const readTime = estimateReadTime(post.html);

  return (
    <div className="pane-right-inner" ref={scrollRef} style={{ overflowY: 'auto', height: '100%' }}>
      <SeriesBar
        currentPost={post}
        seriesPosts={seriesPosts}
        onSelectPost={onSelectPost}
        lang={lang}
      />
      <div className="reader-wrap">
        <div className="reader-meta">
          <span className="cat">{(labels[post.category] ?? post.category).toUpperCase()}</span>
          <span className="sep">&middot;</span>
          <span>{post.date}</span>
          <span className="sep">&middot;</span>
          <span>{readTime} min read</span>
        </div>
        <h1 className="reader-h1">{post.title}</h1>
        <div className="reader-divider" />
        <div
          className="reader-text"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {post.relatedLinks.length > 0 && (
          <div className="related-section">
            <p className="related-label">
              {lang === 'ko' ? '함께 보면 좋은 글' : 'Related'}
            </p>
            {post.relatedLinks.map((link, i) => (
              <a key={i} className="related-card" href={link.url}>
                <div className="related-card-body">
                  <span className="related-card-title">{link.label}</span>
                  <span className="related-card-type">{link.type}</span>
                </div>
                <svg className="related-card-arrow" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/writing/PostReader.tsx
git commit -m "feat: add PostReader component with series bar and related links"
```

---

### Task 6: Create Astro pages (ko + en)

**Files:**
- Create: `src/pages/ko/writing.astro`
- Create: `src/pages/en/writing.astro`

- [ ] **Step 1: Create KO writing page**

```astro
---
import V2Layout from '../../layouts/V2Layout.astro';
import { WritingShell } from '../../components/writing/WritingShell';
import { getCollection } from 'astro:content';
import '../../styles/v2-writing.css';

const allPosts = await getCollection('blog');

const postsData = await Promise.all(
  allPosts
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .map(async (post) => {
      const { Content, ...rendered } = await post.render();
      // Render to HTML string by collecting the rendered output
      return {
        slug: post.id,
        title: post.data.title,
        description: post.data.description,
        date: new Date(post.data.date).toLocaleDateString('ko-KR', {
          year: 'numeric', month: '2-digit', day: '2-digit',
        }).replace(/\. /g, '.').replace(/\.$/, ''),
        category: post.data.category,
        tags: post.data.tags,
        series: post.data.series,
        seriesOrder: post.data.seriesOrder,
        featured: post.data.featured,
        relatedLinks: post.data.relatedLinks,
        html: rendered.remarkPluginFrontmatter?.__html ?? '',
      };
    })
);
---
<V2Layout title="Writing — Hyebin Woo" lang="ko">
  <WritingShell client:load posts={postsData} lang="ko" />
</V2Layout>
```

**Important Note:** Astro's `post.render()` returns a `Content` component, not raw HTML. We need a different approach to get the HTML string. The actual implementation should use Astro's experimental `renderToString` or render each post's markdown to HTML at build time using a custom approach.

The simpler approach: render posts as individual `<div>` elements in the Astro template and pass their innerHTML. However, the cleanest Astro-native approach is to compile markdown to HTML using `@astrojs/markdown-remark` directly, or use `post.body` (raw markdown) and render client-side.

**Revised approach — use raw markdown with a lightweight renderer:**

Actually, the best approach for Astro content collections is to use the compiled output. Let's use a helper that renders each post's Content component to a string server-side.

Create a helper first:

```astro
---
import V2Layout from '../../layouts/V2Layout.astro';
import { WritingShell } from '../../components/writing/WritingShell';
import { getCollection, render } from 'astro:content';
import '../../styles/v2-writing.css';

const allPosts = await getCollection('blog');
const sorted = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

// Use Astro's experimental container API to render each post to HTML
const postsData = [];
for (const post of sorted) {
  const rendered = await render(post);
  postsData.push({
    slug: post.id,
    title: post.data.title,
    description: post.data.description,
    date: new Date(post.data.date).toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    }).replace(/\. /g, '.').replace(/\.$/, ''),
    category: post.data.category,
    tags: post.data.tags,
    series: post.data.series,
    seriesOrder: post.data.seriesOrder,
    featured: post.data.featured,
    relatedLinks: post.data.relatedLinks,
    html: '', // Will be populated via slot rendering pattern
  });
}
---
<V2Layout title="Writing — Hyebin Woo" lang="ko">
  {/* Hidden rendered posts for HTML extraction */}
  <div id="post-html-data" style="display:none;">
    {sorted.map(async (post) => {
      const { Content } = await render(post);
      return <div data-slug={post.id}><Content /></div>;
    })}
  </div>
  <WritingShell client:load posts={postsData} lang="ko" />
  <script>
    // Extract rendered HTML from hidden divs and inject into React
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('post-html-data');
      if (!container) return;
      const htmlMap: Record<string, string> = {};
      container.querySelectorAll('[data-slug]').forEach(el => {
        htmlMap[el.getAttribute('data-slug')!] = el.innerHTML;
      });
      // Dispatch event for React to pick up
      window.dispatchEvent(new CustomEvent('posts-html-ready', { detail: htmlMap }));
    });
  </script>
</V2Layout>
```

**This is getting complex. Let me simplify with a proven pattern.**

The cleanest approach: render each post to HTML in the Astro frontmatter using the markdown compiler directly, since we need HTML strings, not components.

- [ ] **Step 1 (revised): Install marked for markdown→HTML**

We'll use Astro's built-in markdown pipeline. The `render()` function returns a `Content` Astro component. To get HTML strings, we'll use a hidden-div extraction pattern that's well-established in Astro SPA patterns.

Create `src/pages/ko/writing.astro`:

```astro
---
import V2Layout from '../../layouts/V2Layout.astro';
import { WritingShell } from '../../components/writing/WritingShell';
import { getCollection, render } from 'astro:content';
import '../../styles/v2-writing.css';

const allPosts = await getCollection('blog');
const sorted = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

const entries = [];
for (const post of sorted) {
  const rendered = await render(post);
  entries.push({ post, Content: rendered.Content });
}

const postsMetadata = entries.map(({ post }) => ({
  slug: post.id,
  title: post.data.title,
  description: post.data.description,
  date: new Date(post.data.date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).replace(/\. /g, '.').replace(/\.$/, ''),
  category: post.data.category,
  tags: post.data.tags,
  series: post.data.series,
  seriesOrder: post.data.seriesOrder,
  featured: post.data.featured,
  relatedLinks: post.data.relatedLinks,
}));
---
<V2Layout title="Writing — Hyebin Woo" lang="ko">
  <div id="__posts-html" style="display:none;" aria-hidden="true">
    {entries.map(({ post, Content }) => (
      <article data-slug={post.id}><Content /></article>
    ))}
  </div>
  <div id="__writing-root"
    data-posts={JSON.stringify(postsMetadata)}
    data-lang="ko"
  ></div>
  <WritingShell client:only="react" posts={[]} lang="ko" />
</V2Layout>
```

**Actually, this is overcomplicating things.** Let me use the most straightforward approach that works with Astro: compile markdown to HTML using a simple Node API in the frontmatter.

- [ ] **Step 1 (final approach): Create KO page with markdown compilation**

The simplest reliable approach: use `marked` to compile raw markdown. Install it first.

Run: `cd /Users/ellie/Documents/elliebinn.github.io && npm install marked`

Then create `src/pages/ko/writing.astro`:

```astro
---
import V2Layout from '../../layouts/V2Layout.astro';
import { WritingShell } from '../../components/writing/WritingShell';
import { getCollection } from 'astro:content';
import { marked } from 'marked';
import '../../styles/v2-writing.css';

const allPosts = await getCollection('blog');
const sorted = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

const postsData = sorted.map((post) => ({
  slug: post.id,
  title: post.data.title,
  description: post.data.description,
  date: new Date(post.data.date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).replace(/\. /g, '.').replace(/\.$/, ''),
  category: post.data.category,
  tags: post.data.tags,
  series: post.data.series,
  seriesOrder: post.data.seriesOrder,
  featured: post.data.featured,
  relatedLinks: post.data.relatedLinks,
  html: marked.parse(post.body ?? '', { async: false }) as string,
}));
---
<V2Layout title="Writing — Hyebin Woo" lang="ko">
  <WritingShell client:load posts={postsData} lang="ko" />
</V2Layout>
```

- [ ] **Step 2: Create EN page**

Create `src/pages/en/writing.astro` — identical but with `lang="en"` and English date format:

```astro
---
import V2Layout from '../../layouts/V2Layout.astro';
import { WritingShell } from '../../components/writing/WritingShell';
import { getCollection } from 'astro:content';
import { marked } from 'marked';
import '../../styles/v2-writing.css';

const allPosts = await getCollection('blog');
const sorted = allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

const postsData = sorted.map((post) => ({
  slug: post.id,
  title: post.data.title,
  description: post.data.description,
  date: new Date(post.data.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  }),
  category: post.data.category,
  tags: post.data.tags,
  series: post.data.series,
  seriesOrder: post.data.seriesOrder,
  featured: post.data.featured,
  relatedLinks: post.data.relatedLinks,
  html: marked.parse(post.body ?? '', { async: false }) as string,
}));
---
<V2Layout title="Writing — Hyebin Woo" lang="en">
  <WritingShell client:load posts={postsData} lang="en" />
</V2Layout>
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/ko/writing.astro src/pages/en/writing.astro
git commit -m "feat: add writing page Astro routes for ko and en"
```

---

### Task 7: Update navigation links

**Files:**
- Modify: `src/pages/en/index.astro:30`
- Modify: `src/pages/ko/index.astro:30`

- [ ] **Step 1: Update EN nav link**

In `src/pages/en/index.astro`, change line 30:

```diff
-    <a href="#writing" class="nav-link">Writing</a>
+    <a href="/en/writing" class="nav-link">Writing</a>
```

- [ ] **Step 2: Update KO nav link**

In `src/pages/ko/index.astro`, change line 30:

```diff
-    <a href="#writing" class="nav-link">Writing</a>
+    <a href="/ko/writing" class="nav-link">Writing</a>
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/en/index.astro src/pages/ko/index.astro
git commit -m "feat: update nav writing link to dedicated page"
```

---

### Task 8: Build verification and fixes

- [ ] **Step 1: Install marked**

Run: `cd /Users/ellie/Documents/elliebinn.github.io && npm install marked`

- [ ] **Step 2: Run dev build**

Run: `cd /Users/ellie/Documents/elliebinn.github.io && npm run build 2>&1 | tail -30`

Fix any TypeScript or build errors.

- [ ] **Step 3: Run dev server and verify**

Run: `cd /Users/ellie/Documents/elliebinn.github.io && npm run dev`

Visit `http://localhost:4321/ko/writing` and verify:
- Page loads without errors
- Post list shows 17 posts
- Clicking a post updates the reader pane
- Category filter works
- Series bar appears for series posts
- Mobile viewport shows list/detail toggle

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: resolve build issues for writing page"
```
