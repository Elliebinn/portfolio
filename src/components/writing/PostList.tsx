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

  const CIRCLED_NUMS = '①②③④⑤⑥⑦⑧⑨⑩';

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
          const num = String(idx + 1).padStart(2, '0');
          const seriesLabel = post.series ? SERIES_LABELS[post.series] : null;
          const seriesNum = post.seriesOrder != null ? CIRCLED_NUMS[post.seriesOrder - 1] ?? `(${post.seriesOrder})` : '';
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
                    {seriesLabel && (
                      <span
                        className="post-series-badge"
                        data-series={post.series === 'ratb' ? 'ratb' : post.series === 'jujutok' ? 'jujutok' : undefined}
                      >
                        {seriesLabel} {seriesNum}
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
