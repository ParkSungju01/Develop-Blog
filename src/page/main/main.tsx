import * as S from "../main/main.style";
import Banner from "../Banner/Banner";
import Image from "next/image"
export default function Main() {
  return (
    <S.Container>
      <S.Banner>
        <Banner />
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
        </S.LeftBox>
        <S.RightBox>
          <S.MiddleTitle>박성주</S.MiddleTitle>
          <S.SmallTitle>Jonior Developer</S.SmallTitle>
          <S.Div>
            <Image src="/GitHub_Invertocat_Black.png" alt="gitHub" width={40} height={40} />
          </S.Div>
        </S.RightBox>
      </S.MainBox>
    </S.Container>
  );
}
