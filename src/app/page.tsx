import Main from "../page/main/main"
import { getAllPosts } from "../lib/posts"

export default function Home() {
  const posts = getAllPosts()
  return <Main posts={posts} />
}
