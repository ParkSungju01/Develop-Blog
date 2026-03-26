"use client"
import { useRouter, usePathname } from "next/navigation"
import * as S from "../main/main.style";
import Image from "next/image"
import {contents} from "../../components/TabsContents"
import {PostMeta} from "../../lib/posts"
export default function Main({posts}:{ posts: PostMeta[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const activeKey = pathname === "/blog" ? "blog" : "main";
  const onChange = (key:string)=>{
    router.push(key === "blog"? "/blog" : "/");
  }
  return (
    <S.Container>
      <S.Banner>
        <S.Logo>Dev Blog</S.Logo>
        <S.StyledTabs
          activeKey={activeKey}
          items={contents}
          onChange={onChange}
        />
      </S.Banner>
      <S.MainBox>
        <S.LeftBox>
          <S.Title>
            개발 블로그
            <S.SubTitle>개인공부 & 포트폴리오용</S.SubTitle>
          </S.Title>
          <S.MiddleTitle>
            최근 포스트
          </S.MiddleTitle>
          <S.PostList>
            {posts.map((post) => (
              <S.PostItem key={post.slug} onClick={() => router.push(`/blog/${post.slug}`)}>
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostDate>{post.date.slice(0,10)}</S.PostDate>
              </S.PostItem>
            ))}
          </S.PostList>
        </S.LeftBox>
        <S.RightBox>
          <S.MiddleTitle>박성주</S.MiddleTitle>
          <S.SmallTitle>Jonior Developer</S.SmallTitle>
          <S.Div>
            <Image src="/GitHub_Invertocat_Black.png" alt="gitHub" width={40} height={40} onClick={()=>{
              window.open("https://github.com/ParkSungju01","_blank")
            }} />
          </S.Div>
        </S.RightBox>
      </S.MainBox>
    </S.Container>
  );
}
