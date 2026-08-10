export const runtime = 'edge';
import Link from 'next/link';
import posts from './posts-manifest.json'; // 這裡會自動讀取剛剛產生的目錄

export const runtime = 'edge'; // 啟用 Cloudflare Edge Runtime

export default function Home() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <Link href="/" className="logo">STORIES</Link>
        <p className="subtitle">閱讀、思維、技術與生活的完美交織</p>
      </header>

      <main className="main-content">
        <h2 className="section-title">精選創作</h2>
        <div className="stories-grid">
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug} className="story-card">
              <div className="card-image-box">
                <img src={post.image} alt={post.title} />
                <span className="card-category">{post.category}</span>
              </div>
              <div className="card-content">
                <span className="card-date">{post.date}</span>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-summary">{post.summary}</p>
                <span className="card-more">繼續閱讀 —</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="blog-footer">
        <p>© 2026 Stories Blog. Powered by Next.js & Cloudflare Pages.</p>
      </footer>
    </div>
  );
}
