import { BlogSection } from '../components/sections/BlogSection';

/** /blog: every article, laid out exactly like the blog section on the home page. */
export default function BlogIndexPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <BlogSection all />
    </main>
  );
}
