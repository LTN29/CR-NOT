import { AUTHOR, postContent } from '../content/posts';

export interface BlogPost {
  id: string;
  image: string;
  date: string;
  author: string;
}

/** Newest first; translated copy comes from t(`blogs_data.<id>.*`). */
export const posts: BlogPost[] = [...postContent]
  .sort((a, b) => b.published.localeCompare(a.published))
  .map((p) => ({ id: p.id, image: p.image, date: p.published, author: AUTHOR }));
