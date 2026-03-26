import BlogPage from "../../page/blog/blog"
import { getAllPosts } from "../../lib/posts"

export default function Blog() {
  const posts = getAllPosts()
  return <BlogPage posts={posts} />
}
