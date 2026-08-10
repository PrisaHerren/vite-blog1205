import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const manifestPath = path.join(process.cwd(), 'src/app/posts-manifest.json');

function generateManifest() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory);
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '無標題',
        date: data.date || '',
        category: data.category || '未分類',
        image: data.image || 'https://unsplash.com',
        summary: data.summary || '',
        content: content,
      };
    });

  allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(manifestPath, JSON.stringify(allPostsData, null, 2));
  console.log('✅ Vinext 部落格文章清單已自動更新！');
}

generateManifest();
