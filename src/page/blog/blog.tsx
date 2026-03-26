"use client";
import { useRouter, usePathname } from "next/navigation";
import * as S from "./blog.style";
import { contents } from "../../components/TabsContents";
import { PostMeta } from "../../lib/posts"

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const activeKey = pathname === "/blog" ? "blog" : "main";
  const onChange = (key: string) => {
    router.push(key === "blog" ? "/blog" : "/");
  };
  const goMain = () =>{
    router.push("/");
  }
  return (
    <S.Container>
      <S.Banner>
        <S.Logo onClick={goMain}>Dev Blog</S.Logo>
        <S.StyledTabs
          activeKey={activeKey}
          items={contents}
          onChange={onChange}
        />
      </S.Banner>
      <S.MainBox>
        <S.SideNav>
          <S.Index>목차</S.Index>
          <S.Menu>
            <span>programming</span>
            <div>({posts.filter(p => p.category === "programming").length})</div>
          </S.Menu>
        </S.SideNav>
        <S.PostList>
          {posts.map((post) => (
            <S.PostItem key={post.slug} onClick={() => router.push(`/blog/${post.slug}`)}>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.PostDate>{post.date.slice(0,10)}</S.PostDate>
            </S.PostItem>
          ))}
        </S.PostList>
      </S.MainBox>
    </S.Container>
  );
}
