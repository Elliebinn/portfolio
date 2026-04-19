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

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [post.slug]);

  const readTime = estimateReadTime(post.html);

  return (
    <div ref={scrollRef} style={{ overflowY: 'auto', height: '100%' }}>
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
            {post.relatedLinks.map((link, i) => {
              // Extract slug from internal blog URLs like /ko/blog/{slug}/
              const blogMatch = link.url.match(/\/ko\/blog\/([^/]+)/);
              const isBlogLink = link.type === 'blog' && blogMatch;
              const isExternal = link.url.startsWith('http');

              return (
                <a
                  key={i}
                  className="related-card"
                  href={isExternal ? link.url : isBlogLink ? '#' : link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onClick={isBlogLink ? (e) => {
                    e.preventDefault();
                    onSelectPost(blogMatch![1]);
                  } : undefined}
                >
                  <div className="related-card-body">
                    <span className="related-card-title">{link.label}</span>
                    <span className="related-card-type">{link.type}</span>
                  </div>
                  <svg className="related-card-arrow" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
