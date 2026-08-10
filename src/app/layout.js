import  './globals.css';

export const metadata = {
  title: 'STORIES - Personal Blog',
  description: ' Crafted with Next.js & Cloudflare',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
