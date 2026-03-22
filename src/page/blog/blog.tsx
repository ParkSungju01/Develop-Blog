"use client"
import { useRouter, usePathname } from "next/navigation"
import * as S from "./blog.style"
import { contents } from "../../components/TabsContents"
export default function Blog(){
  const router = useRouter();
  const pathname = usePathname();
  const activeKey = pathname === "/blog" ? "blog" : "main";
  const onChange = (key:string)=>{
    router.push(key === "blog"? "/blog" : "/");
  }
  return(
    <S.StyledTabs
      activeKey={activeKey}
      items={contents}
      onChange={onChange}
    />
  )
}