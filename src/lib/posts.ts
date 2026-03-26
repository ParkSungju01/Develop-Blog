import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "posts")

export type PostMeta = {
  slug: string
  title: string
  date: string
  category: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir)
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "")
      const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf-8"))
      return { slug, title: data.title, date: String(data.date), category: data.category }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string) {
  const file = fs.readFileSync(path.join(postsDir, `${decodeURIComponent(slug)}.md`), "utf-8")
  return matter(file)
}
