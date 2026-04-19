import { useState } from 'react';
import type { PostData } from './WritingShell';

const SERIES_LABELS: Record<string, Record<string, string>> = {
  ko: { 'quant-platform': '퀀트 분석 플랫폼 AED', jujutok: 'AI 주식 분석 주주톡', ratb: '로보어드바이저 RATB' },
  en: { 'quant-platform': 'Quant Analysis Platform AED', jujutok: 'AI Stock Analysis JujuTok', ratb: 'Robo-Advisor RATB' },
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

  const seriesTitle = SERIES_LABELS[lang]?.[currentPost.series] ?? currentPost.series;
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
          <span className="series-bar-toggle">▾</span>
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
