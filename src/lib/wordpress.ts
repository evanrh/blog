const { WP_URL: wpRootUrl } = import.meta.env;

type RenderedText = { rendered: string };

export interface EmbedPost {
  title: RenderedText;
  excerpt: RenderedText;
  slug: string;
}

export interface Post {
  title: RenderedText;
  content: RenderedText;
}

function buildApiUrl(endpoint: string) {
  return `${wpRootUrl}/wp-json/wp/v2/${endpoint}`;
}

export async function getAllPosts(): Promise<EmbedPost[]> {
  const url = buildApiUrl("posts?_fields=title,excerpt,slug");
  const res = await fetch(url);
  return await res.json();
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const url = buildApiUrl(`posts?slug=${slug}`);
  const res = await fetch(url);
  const [result] = await res.json();
  return result;
}
