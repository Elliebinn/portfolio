import { useState, useCallback, useEffect } from 'react';
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

  const seriesPosts = selectedPost?.series
    ? posts
        .filter(p => p.series === selectedPost.series)
        .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0))
    : [];

  // Open specific post from URL hash (e.g. /ko/writing#post-slug)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && posts.some(p => p.slug === hash)) {
      setSelectedSlug(hash);
      setReaderOpen(true);
    }
  }, [posts]);

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
