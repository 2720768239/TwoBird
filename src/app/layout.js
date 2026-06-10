import './globals.css';

export const metadata = {
  title: 'Claude + 英语双修课程',
  description: 'TwoBird learning app for Claude and agent engineering articles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
