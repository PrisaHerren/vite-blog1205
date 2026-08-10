import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import posts from '../../posts-manifest.json';

export const runtime = 'edge';

// 1. 將元件函式改為 async
export default async function Post({ params }) {
  // 2. 使用 await 解析非同步的 params
  const { slug } = await params;
  
  // 從自動生成的資訊清單中找出對應的文章
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-container">
      <header className="blog-header">
        <Link href="/" className="logo">STORIES</Link>
      </header>

      <article className="post-detail-wrapper">
        <Link href="/" className="back-btn">← 返回探索</Link>
        
        <div className="detail-header">
          <span className="detail-category">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="detail-date">發布於 {post.date}</p>
        </div>

        <div className="detail-hero-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="detail-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      <footer className="blog-footer">
        <p>© 2026 Stories Blog.</p>
      </footer>
    </div>
  );
}

