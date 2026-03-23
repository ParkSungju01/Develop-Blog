"use client";
import { useRouter, usePathname } from "next/navigation";
import * as S from "./blog.style";
import { contents } from "../../components/TabsContents";
import {CaretDownOutlined} from "@ant-design/icons"
export default function Blog() {
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
            <CaretDownOutlined/>
          </S.Menu>
          <S.Menu>
            Programming
            <CaretDownOutlined/>
          </S.Menu>
        </S.SideNav>
      </S.MainBox>
    </S.Container>
  );
}
