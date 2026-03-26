import { getPost } from "../../../lib/posts"
import Post from "../../../page/blog/post/post"

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data, content } = getPost(slug)
  return <Post title={data.title} date={String(data.date)} content={content} />
}
